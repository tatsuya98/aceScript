import { NextRequest, NextResponse } from "next/server";
import fetchUser from "./fecthUserByName";
import { WithId } from "mongodb";

export async function GET(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: String } }
) {
  const response = await fetchUser(username);
  return NextResponse.json(response, { status: 200 });
}

export async function DELETE(
  nextRequest: NextRequest,
  { params: { username } }: { params: { username: String } }
) {
  const response =  
}
