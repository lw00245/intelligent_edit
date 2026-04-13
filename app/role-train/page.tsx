import Link from "next/link";
import { DashboardShell } from "@/components/dashboard-shell";
import { getRoleTask } from "@/lib/mock-data";
import { TrainDataPreview } from "@/components/train-image-viewer";

type RoleTrainPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function RoleTrainPage({ searchParams }: RoleTrainPageProps) {
  const params = (await searchParams) ?? {};
  const taskId = typeof params.task === "string" ? params.task : undefined;
  const task = getRoleTask(taskId);
  const isHistoryMode = Boolean(task);

  return (
    <DashboardShell
      active="role"
      title={isHistoryMode ? `角色训练 · ${task?.name}` : "新建角色训练任务"}
      subtitle={
        isHistoryMode
          ? "当前为历史任务回填视图，已将任务名称和数据路径带入表单。"
          : "从列表页点击新建任务进入此页，用于录入角色名称和训练数据路径。"
      }
      action={(
        <Link href="/role-list" className="secondary-button">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6l-6 6l6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          返回列表
        </Link>
      )}
    >
      <section className="panel panel-grid">
        <div>
          <p className="eyebrow">Training Setup</p>
          <h2 className="card-title" style={{ margin: "10px 0 0", fontSize: 24 }}>角色训练配置</h2>
        </div>

        <div className="field">
          <label htmlFor="role-name">角色名称</label>
          <input id="role-name" className="input" defaultValue={task?.name ?? "mofan"} placeholder="请输入角色名称" />
        </div>

        <div className="field">
          <label htmlFor="role-path">上传角色数据路径</label>
          <input id="role-file-upload" type="file" multiple style={{ display: "none" }} />
          <div className="row-between" style={{ alignItems: "stretch" }}>
            <input
              id="role-path"
              className="input"
              style={{ flex: 1 }}
              defaultValue={task?.datasetPath ?? "OSS/Datasets/MoFan/"}
            />
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <label htmlFor="role-file-upload" className="secondary-button">上传数据</label>
              <button type="button" className="primary-button">开始角色训练</button>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="row-between" style={{ marginBottom: 12 }}>
          <div>
            <p className="eyebrow">Preview</p>
            <h2 className="card-title" style={{ margin: "10px 0 0", fontSize: 22 }}>角色训练数据预览</h2>
          </div>
          <button className="secondary-button" type="button" aria-label="刷新列表">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 12a8 8 0 1 1-2.34-5.66" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M20 4v6h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <TrainDataPreview />
      </section>
    </DashboardShell>
  );
}
