import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Suppiler from "@/models/Supplier";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const suppliers = await Suppiler.find({
      $or: [
        { manufacturerId: data.id },
        { manufacturerId: { $exists: false } },
      ],
    }).populate("manufacturer");
    console.log(suppliers);
    return NextResponse.json(suppliers, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
