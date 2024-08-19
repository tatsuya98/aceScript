import { NextResponse } from "next/server";
import userController from "./userController";

export async function GET() {
  const response = await userController();
  return NextResponse.json({ response }, { status: 200 });
}
