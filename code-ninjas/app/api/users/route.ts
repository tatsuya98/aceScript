import { NextResponse, NextRequest } from "next/server";
import { handleMongoError } from "../utils/mongoErrorHandler";
import { z } from "zod";
import { createUser, fetchUsers } from "./model";

export async function GET() {
  const response = await fetchUsers();
  return NextResponse.json({ response }, { status: 200 });
}

export async function POST(NextRequest: NextRequest) {
  try {
    const newUser = await createUser(await NextRequest.json());
    return Response.json(newUser, { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.errors }, { status: 400 });
    }
    const { status, message } = handleMongoError(error);
    return NextResponse.json({ message }, { status });
  }
}
