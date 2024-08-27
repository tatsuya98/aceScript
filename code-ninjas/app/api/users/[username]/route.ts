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
    
    let userDetails;
    try {
      userDetails = await nextRequest.json();
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return NextResponse.json({ message: "Invalid JSON data provided" }, { status: 400 });
    }

    console.log(`Received username: ${username}`);
    console.log(`User details received for update:`, userDetails);

    const response = await changeUserDetails(username, userDetails);
    console.log(`Change details response:`, response);
    return NextResponse.json(response, { status: 202 });
  } catch (error) {
    console.error(`Error in PATCH operation for username ${username}:`, error);
    return NextResponse.json({ message: "Internal server error", details: error }, { status: 500 });
  }
}

  