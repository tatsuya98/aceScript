import { NextRequest, NextResponse } from "next/server";
import { fetchKata } from "./model";

export async function GET(
    nextRequest: NextRequest,
    { params: { slug } }: { params: { slug: string } }
  ) {
    const response = await fetchKata(slug);
    return NextResponse.json(response, { status: 200 });
  }