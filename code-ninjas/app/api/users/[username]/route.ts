import { NextRequest, NextResponse } from "next/server";
import {
  changeUserDetails,
  fetchUser,
  fetchUserLoginAttempt,
  removeUser,
} from "./model";

export async function GET(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  const response = await fetchUser(username);
  return NextResponse.json(response, { status: 200 });
}
export async function POST(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  const userDetails = await nextRequest.json();
  const response = await fetchUserLoginAttempt(username, userDetails.password);
  return NextResponse.json(response, { status: 200 });
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
