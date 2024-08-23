import { NextRequest, NextResponse } from "next/server";
import { createKata, getKatas } from "./model";
import { handleMongoError } from "../utils/mongoErrorHandler";

export async function GET() {
  const response = await getKatas();
  return NextResponse.json({ response }, { status: 200 });
}

export async function POST(NextRequest: NextRequest) {
  try {
    const newKata = await createKata(await NextRequest.json());
    return Response.json(newKata, { status: 201 });
  } catch (error: any) {
    const { status, message } = handleMongoError(error);
    return NextResponse.json({ message }, { status });
  }
}
