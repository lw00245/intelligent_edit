import { NextRequest, NextResponse } from "next/server";
import { readFile, stat } from "fs/promises";
import { join, extname } from "path";
import sharp from "sharp";

const IMAGE_DIR = "/home/featurize/work/test_npm/test_data/mofan/mofan_project/OSS/Projects/莫凡肘击/quantilized_images";

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");
  if (!name || /\.\./.test(name)) {
    return NextResponse.json({ error: "invalid name" }, { status: 400 });
  }

  const filePath = join(IMAGE_DIR, name);

  try {
    const buf = await readFile(filePath);
    const s = await stat(filePath);
    const ext = extname(name).toLowerCase();

    if (ext === ".tga" || ext === ".targa") {
      const TGA = (await import("tga-js")).default;
      const tga = new TGA();
      tga.load(new Uint8Array(buf));
      const { width, height } = tga.header;
      const imgData = { width, height, data: new Uint8ClampedArray(width * height * 4) };
      tga.getImageData(imgData);
      const png = await sharp(Buffer.from(imgData.data), { raw: { width, height, channels: 4 } }).png().toBuffer();
      return new NextResponse(png, {
        headers: {
          "Content-Type": "image/png",
          "Content-Length": String(png.length),
          "Cache-Control": "public, max-age=86400",
          "Last-Modified": s.mtime.toUTCString(),
        },
      });
    }

    return new NextResponse(buf, {
      headers: {
        "Content-Type": "image/png",
        "Content-Length": String(buf.length),
        "Cache-Control": "public, max-age=86400",
        "Last-Modified": s.mtime.toUTCString(),
      },
    });
  } catch (err) {
    return NextResponse.json({ error: "not found", detail: String(err) }, { status: 404 });
  }
}
