import { NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";

const TRAIN_DIR = "/home/featurize/work/test_npm/test_data/mofan/mofan_role/OSS/Datasets/MoFan/train";

export async function GET() {
  try {
    const files = readdirSync(TRAIN_DIR)
      .filter((f) => /\.(png|jpg|jpeg|bmp|webp)$/i.test(f))
      .sort();
    return NextResponse.json({ images: files });
  } catch {
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
