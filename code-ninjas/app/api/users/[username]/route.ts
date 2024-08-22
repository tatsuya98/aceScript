import { NextRequest, NextResponse } from "next/server";
import { changeUserDetails, fetchUser, removeUser } from "./model";
import { z } from "zod";
import { handleNotFound } from "../../utils/errorHandler";
import { handleMongoError } from "../../utils/mongoErrorHandler";

export async function GET(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  try {
    let user = await fetchUser(username);
    if (user === null) {
      // Use the separate function to handle the case where the user is not found
      return handleNotFound("user");
    }
    return Response.json(user, { status: 200 });
  } catch (error: any) {
    const { status, message } = handleMongoError(error);
    return Response.json({ message }, { status });
  }
}


export async function DELETE(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  const { deletedCount } = await removeUser(username);
  if (deletedCount === 0) {
    return handleNotFound("user");
  }
  return Response.json("User Succesfully Deleted", { status: 200 });
}

export async function PATCH(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  try {
    const userDetails = await nextRequest.json();
    const response = await changeUserDetails(username, userDetails);
    console.log(response);
    return NextResponse.json(response, { status: 202 });
  } catch (error) {
    return NextResponse.json("user does not exist", { status: 404 });
  }
}
