import Link from "next/link";
import { DashboardShell } from "@/components/dashboard-shell";
import { getFrameTask } from "@/lib/mock-data";
import { FrameDataPreview } from "@/components/frame-image-viewer";

type FrameTrainPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function FrameTrainPage({ searchParams }: FrameTrainPageProps) {
  const params = (await searchParams) ?? {};
  const taskId = typeof params.task === "string" ? params.task : undefined;
  const task = getFrameTask(taskId);
  const isHistoryMode = Boolean(task);

  return (
    <DashboardShell
      active="frame"
      title={isHistoryMode ? `插帧任务 · ${task?.name}` : "新建插帧任务"}
      subtitle={
        isHistoryMode
          ? "当前为历史插帧任务回填视图，项目名称、角色模型、分镜信息和上传路径均已带入。"
          : "从插帧任务列表点击新建任务进入此页，当前阶段先保持页面清爽并完成基本联动。"
      }
      action={(
        <Link href="/frame-list" className="secondary-button">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6l-6 6l6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          返回列表
        </Link>
      )}
    >
      <section className="panel panel-grid">
        <div className="row-between">
          <div>
            <p className="eyebrow">Task Config</p>
            <h2 className="card-title" style={{ margin: "10px 0 0", fontSize: 24 }}>任务配置</h2>
          </div>
        </div>

        <div className="fields-grid">
          <div className="field">
            <label htmlFor="project-name">项目名称</label>
            <input id="project-name" className="input" defaultValue={task?.name ?? "mofan_project_肘击"} />
          </div>
          <div className="field">
            <label htmlFor="frame-model">角色模型</label>
            <select id="frame-model" className="select" defaultValue={task?.model ?? "mofan"}>
              <option value="mofan">mofan</option>
              <option value="Elder Oak - 场景角色">Elder Oak - 场景角色</option>
              <option value="Villager C">Villager C</option>
              <option value="Commander Rex">Commander Rex</option>
            </select>
          </div>
        </div>

        <div className="fields-grid compact">
          <div className="field">
            <label htmlFor="episode">剧集</label>
            <input id="episode" className="input" defaultValue={task?.episode ?? "E01"} />
          </div>
          <div className="field">
            <label htmlFor="scene">场景</label>
            <input id="scene" className="input" defaultValue={task?.scene ?? "SC_04"} />
          </div>
          <div className="field">
            <label htmlFor="shot">镜头</label>
            <input id="shot" className="input" defaultValue={task?.shot ?? "SH_012"} />
          </div>
          <div className="field">
            <label htmlFor="layer">图层</label>
            <input id="layer" className="input" defaultValue={task?.layer ?? "BG_L01"} />
          </div>
        </div>

        <div className="field">
          <label htmlFor="upload-path">文件上传路径</label>
          <input id="frame-file-upload" type="file" multiple style={{ display: "none" }} />
          <div className="row-between" style={{ alignItems: "stretch" }}>
            <input
              id="upload-path"
              className="input"
              style={{ flex: 1 }}
              defaultValue={task?.uploadPath ?? "/OSS/{用户名}/Projects/莫凡肘击"}
            />
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <label htmlFor="frame-file-upload" className="secondary-button">上传文件</label>
              <button type="button" className="primary-button">开始插帧</button>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="row-between" style={{ marginBottom: 12 }}>
          <div>
            <p className="eyebrow">Frame Preview</p>
            <h2 className="card-title" style={{ margin: "10px 0 0", fontSize: 22 }}>每帧数据预览</h2>
          </div>
          <button className="secondary-button" type="button" aria-label="刷新进度">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 12a8 8 0 1 1-2.34-5.66" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M20 4v6h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <FrameDataPreview />
      </section>
    </DashboardShell>
  );
}
