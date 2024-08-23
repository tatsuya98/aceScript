import { NextRequest, NextResponse } from "next/server";
import { fetchKata } from "./model";
import { handleMongoError } from "../../utils/mongoErrorHandler";
import { handleNotFound } from "../../utils/errorHandler";

export async function GET(
  nextRequest: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    const kata = await fetchKata(slug);
    if (kata === null) {
      return handleNotFound("kata");
    }
    return NextResponse.json(kata, { status: 200 });
  } catch (error: any) {
    const { status, message } = handleMongoError(error);
    return NextResponse.json({ message }, { status });
  }
}
