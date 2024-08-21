import { NextResponse } from "next/server";
import { getKatas } from "./model";

export async function GET() {
    const response = await getKatas();
    return NextResponse.json({ response }, { status: 200 });
  }