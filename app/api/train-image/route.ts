import { NextRequest, NextResponse } from "next/server";
import { readFile, stat } from "fs/promises";
import { join } from "path";

const TRAIN_DIR = "/home/featurize/work/test_npm/test_data/mofan/mofan_role/OSS/Datasets/MoFan/train";

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");
  if (!name || /\.\./.test(name)) {
    return NextResponse.json({ error: "invalid name" }, { status: 400 });
  }

  const filePath = join(TRAIN_DIR, name);
  try {
    const buf = await readFile(filePath);
    const s = await stat(filePath);
    return new NextResponse(buf, {
      headers: {
        "Content-Type": "image/png",
        "Content-Length": String(buf.length),
        "Cache-Control": "public, max-age=86400",
        "Last-Modified": s.mtime.toUTCString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
}
