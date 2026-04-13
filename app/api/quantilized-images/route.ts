import { NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";

const IMAGE_DIR = "/home/featurize/work/test_npm/test_data/mofan/mofan_project/OSS/Projects/莫凡肘击/quantilized_images";

export async function GET() {
  try {
    const files = readdirSync(IMAGE_DIR)
      .filter((f) => /\.(png|jpg|jpeg|bmp|webp|tga)$/i.test(f))
      .sort();
    return NextResponse.json({ images: files });
  } catch {
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
