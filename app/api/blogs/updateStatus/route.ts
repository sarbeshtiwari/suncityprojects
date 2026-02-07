import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from '../../../../models/Blog';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { _id, isActive } = body;

    if (!_id) {
      return NextResponse.json({ success: false, message: "Missing project ID" });
    }

    const updated = await Blog.findByIdAndUpdate(
      _id,
     { isActive, isPublished: isActive },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ success: false, message: "Project not found" });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("Error updating status:", error);
    return NextResponse.json({ success: false, message: "Server error" });
  }
}