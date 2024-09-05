import { NextRequest, NextResponse } from "next/server";
import { fetchUserLoginAttempt } from "./model";

export async function POST(nextRequest: NextRequest) {
  try {
    const { username, password } = await nextRequest.json();
    const response = await fetchUserLoginAttempt(username, password);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}
