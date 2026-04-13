"use client";

import { useEffect, useState } from "react";

export type TrainImage = {
  name: string;
  url: string;
};

export function ImageViewer({
  images,
  initialIndex,
  onClose,
}: {
  images: TrainImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initialIndex);

  const prev = () => setIdx((i) => (i > 0 ? i - 1 : images.length - 1));
  const next = () => setIdx((i) => (i < images.length - 1 ? i + 1 : 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      {/* top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          color: "#fff",
          fontSize: 14,
        }}
      >
        <span>
          {images[idx].name} ({idx + 1} / {images.length})
        </span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 24,
            cursor: "pointer",
            lineHeight: 1,
          }}
          aria-label="关闭"
        >
          &#10005;
        </button>
      </div>

      {/* image */}
      <img
        src={images[idx].url}
        alt={images[idx].name}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "90vw",
          maxHeight: "80vh",
          objectFit: "contain",
          borderRadius: 4,
          userSelect: "none",
        }}
      />

      {/* bottom nav */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={prev}
          style={{
            background: "rgba(255,255,255,0.35)",
            border: "2px solid rgba(255,255,255,0.7)",
            borderRadius: 8,
            padding: "10px 28px",
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          &#9664; 上一张
        </button>
        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 600, minWidth: 80, textAlign: "center", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
          {idx + 1} / {images.length}
        </span>
        <button
          onClick={next}
          style={{
            background: "rgba(255,255,255,0.35)",
            border: "2px solid rgba(255,255,255,0.7)",
            borderRadius: 8,
            padding: "10px 28px",
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          下一张 &#9654;
        </button>
      </div>
    </div>
  );
}

export function TrainDataPreview() {
  const [images, setImages] = useState<TrainImage[]>([]);
  const [viewerIdx, setViewerIdx] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/train-images")
      .then((r) => r.json())
      .then((data) => {
        setImages(data.images.map((name: string) => ({ name, url: `/api/train-image?name=${encodeURIComponent(name)}` })));
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <div className="table-panel" style={{ boxShadow: "none", background: "rgba(255,255,255,0.54)" }}>
        <div className="table-header" style={{ gridTemplateColumns: "100px 1fr 120px" }}>
          <div>缩略图</div>
          <div>文件名</div>
          <div style={{ textAlign: "right" }}>操作</div>
        </div>
        <div className="table-body">
          {images.map((img, i) => (
            <div key={img.name} className="table-row" style={{ gridTemplateColumns: "100px 1fr 120px" }}>
              <div style={{ width: 80, height: 50, borderRadius: 4, overflow: "hidden", background: "#eee" }}>
                <img src={img.url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="stack">
                <strong>{img.name}</strong>
                <span className="muted">训练数据帧</span>
              </div>
              <div className="table-actions">
                <button
                  className="text-button"
                  type="button"
                  onClick={() => setViewerIdx(i)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.5 12s3.5-6 9.5-6s9.5 6 9.5 6s-3.5 6-9.5 6s-9.5-6-9.5-6Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  预览
                </button>
              </div>
            </div>
          ))}
          {images.length === 0 && (
            <div style={{ padding: 24, textAlign: "center", color: "#999" }}>加载中...</div>
          )}
        </div>
      </div>

      {viewerIdx !== null && (
        <ImageViewer images={images} initialIndex={viewerIdx} onClose={() => setViewerIdx(null)} />
      )}
    </>
  );
}
