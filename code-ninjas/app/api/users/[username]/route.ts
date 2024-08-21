import { NextRequest, NextResponse } from "next/server";
import {
  changeUserDetails,
  fetchUser,
  fetchUserLoginAttempt,
  removeUser,
} from "./model";
import { z } from "zod";
import { handleUserNotFound } from "../../utils/errorHandler";
import { handleMongoError } from "../../utils/mongoErrorHandler";

export async function GET(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  try {
    let user = await fetchUser(username);
    if (user === null) {
      // Use the separate function to handle the case where the user is not found
      return handleUserNotFound();
    }
    return Response.json(user, { status: 200 });
  } catch (error: any) {
    const { status, message } = handleMongoError(error);
    return Response.json({ message }, { status });
  }
}
export async function POST(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  try {
    const userDetails = await nextRequest.json();
    const response = await fetchUserLoginAttempt(
      username,
      userDetails.password
    );
    console.log(response);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    console.error("Error creating user:", error);

    // Check if the error is a ZodError (validation error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.errors }, { status: 400 });
    }

    // Handle other potential errors
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  await removeUser(username);
  return Response.json("User Succesfully Deleted", { status: 200 });
}

export async function PATCH(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  try {
    const userDetails = await nextRequest.json();
    const response = await changeUserDetails(username, userDetails);
    return NextResponse.json(response, { status: 202 });
  } catch (error) {
    return NextResponse.json("user does not exist", { status: 404 });
  }
}
