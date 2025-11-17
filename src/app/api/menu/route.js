import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Menu API работает!" });
}
