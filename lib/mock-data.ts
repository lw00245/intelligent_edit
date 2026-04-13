export type TaskStatus = "已完成" | "训练中" | "失败";

export type RoleTask = {
  id: string;
  name: string;
  createdAt: string;
  status: TaskStatus;
  engine: string;
  datasetPath: string;
};

export type FrameTask = {
  id: string;
  name: string;
  createdAt: string;
  status: TaskStatus;
  model: string;
  uploadPath: string;
  episode: string;
  scene: string;
  shot: string;
  layer: string;
};

export const roleTasks: RoleTask[] = [
  {
    id: "mofan",
    name: "mofan",
    createdAt: "2026-04-06 14:30",
    status: "已完成",
    engine: "High Fidelity Mesh v2.4",
    datasetPath: "OSS/Datasets/MoFan/",
  },
  {
    id: "elder-oak",
    name: "Elder Oak - 场景角色",
    createdAt: "2026-04-06 12:15",
    status: "训练中",
    engine: "Environment Interactive NPC",
    datasetPath: "/data/training/characters/elder_oak/",
  },
  {
    id: "villager-c",
    name: "Villager C",
    createdAt: "2026-04-05 09:45",
    status: "已完成",
    engine: "Background Crowd System",
    datasetPath: "/data/training/characters/villager_c/",
  },
  {
    id: "rex-support",
    name: "Commander Rex",
    createdAt: "2026-04-04 16:20",
    status: "已完成",
    engine: "Hero Class - Support Tier",
    datasetPath: "/data/training/characters/rex_support/",
  },
];

export const frameTasks: FrameTask[] = [
  {
    id: "ad-4k",
    name: "mofan_project_肘击",
    createdAt: "2026-04-06 14:20",
    status: "已完成",
    model: "mofan",
    uploadPath: "/OSS/{用户名}/Projects/莫凡肘击",
    episode: "AD",
    scene: "SC_02",
    shot: "SH_017",
    layer: "FG_L01",
  },
  {
    id: "trailer-v2",
    name: "Cinematic_Trailer_V2",
    createdAt: "2026-04-06 15:05",
    status: "训练中",
    model: "Support_Bot_A",
    uploadPath: "/nas/projects/interpolation/trailer_v2/source_frames/",
    episode: "TR",
    scene: "SC_08",
    shot: "SH_021",
    layer: "BG_L02",
  },
  {
    id: "product-demo",
    name: "Product_Demo_Final",
    createdAt: "2026-04-05 09:12",
    status: "失败",
    model: "Main_Protagonist_V1",
    uploadPath: "/nas/projects/interpolation/product_demo/source_frames/",
    episode: "PD",
    scene: "SC_01",
    shot: "SH_004",
    layer: "FG_L03",
  },
  {
    id: "animation-04",
    name: "Animation_Sequence_04",
    createdAt: "2026-04-05 08:45",
    status: "已完成",
    model: "Support_Bot_A",
    uploadPath: "/nas/projects/interpolation/animation_04/source_frames/",
    episode: "AN",
    scene: "SC_11",
    shot: "SH_039",
    layer: "FX_L01",
  },
];

export const rolePreviewFrames = [
  { name: "Frame_001.jpg", resolution: "1920 x 1080" },
  { name: "Frame_002.jpg", resolution: "1920 x 1080" },
  { name: "Frame_003.jpg", resolution: "1920 x 1080" },
];

export const framePreviewItems = [
  { name: "frame_interp_v01_001.png", createdAt: "2026-04-06 14:30:22", state: "已完成" },
  { name: "frame_interp_v01_002.png", createdAt: "2026-04-06 14:30:25", state: "训练中" },
  { name: "frame_interp_v01_003.png", createdAt: "2026-04-06 14:30:18", state: "已完成" },
];

export function getRoleTask(id?: string) {
  return roleTasks.find((item) => item.id === id) ?? null;
}

export function getFrameTask(id?: string) {
  return frameTasks.find((item) => item.id === id) ?? null;
}

export function statusClassName(status: TaskStatus | FrameTask["status"]) {
  if (status === "已完成") {
    return "success";
  }

  if (status === "训练中") {
    return "processing";
  }

  if (status === "失败") {
    return "failed";
  }

  return "processing";
}