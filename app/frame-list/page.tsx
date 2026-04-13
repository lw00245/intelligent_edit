import Link from "next/link";
import { DashboardShell } from "@/components/dashboard-shell";
import { frameTasks, statusClassName } from "@/lib/mock-data";

export default function FrameListPage() {
  return (
    <DashboardShell
      active="frame"
      title="插帧任务列表"
      subtitle="左侧切换到此页后，可以点击新建任务进入插帧配置页，也可以从历史记录回填已有参数。"
      action={(
        <Link href="/frame-train" className="primary-button">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          新建任务
        </Link>
      )}
    >
      <section className="stats-grid">
        <article className="stat-card">
          <small>任务总数</small>
          <strong>1,284</strong>
        </article>
        <article className="stat-card">
          <small>已完成</small>
          <strong>1,150</strong>
        </article>
        <article className="stat-card">
          <small>训练中</small>
          <strong>32</strong>
        </article>
        <article className="stat-card">
          <small>成功率</small>
          <strong>98.2%</strong>
        </article>
      </section>

      <section className="table-panel">
        <div className="table-header" style={{ gridTemplateColumns: "1.4fr 0.9fr 0.7fr 0.8fr" }}>
          <div>任务名称</div>
          <div>创建日期</div>
          <div>状态</div>
          <div style={{ textAlign: "right" }}>操作</div>
        </div>
        <div className="table-body">
          {frameTasks.map((task) => (
            <div key={task.id} className="table-row" style={{ gridTemplateColumns: "1.4fr 0.9fr 0.7fr 0.8fr" }}>
              <div className="stack">
                <strong>{task.name}</strong>
                <span className="muted">模型 {task.model}</span>
              </div>
              <div>{task.createdAt}</div>
              <div>
                <span className={`badge ${statusClassName(task.status)}`}>{task.status}</span>
              </div>
              <div className="table-actions">
                <Link href={`/frame-train?task=${task.id}`} className="text-button">
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.5 12s3.5-6 9.5-6s9.5 6 9.5 6s-3.5 6-9.5 6s-9.5-6-9.5-6Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  预览
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="table-footer">
          <span>显示 1-4 条，共 1,284 条插帧任务</span>
          <div className="row-between" style={{ gap: 10 }}>
            <span className="secondary-button">1</span>
            <span className="secondary-button">2</span>
            <span className="secondary-button">3</span>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}