import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
    // Your logic here
    const data = { message: 'Hello, world!' };
    return NextResponse.json(data);
}