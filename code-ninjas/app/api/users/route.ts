import { NextResponse , NextRequest} from "next/server";
import {usersController , postUser} from "./userController";

export async function GET() {
  const response = await usersController();
  return NextResponse.json({ response }, { status: 200 });
}

export async function POST(NextRequest: NextRequest , NextResponse:NextResponse){
  try{
  const newUser = await postUser(await NextRequest.json())
  return Response.json(newUser, {status:201})
  }
  catch(error : any){
    return Response.json("User already exists", {status:400})
  }
}


