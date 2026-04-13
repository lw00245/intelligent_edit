import Link from "next/link";
import { DashboardShell } from "@/components/dashboard-shell";
import { roleTasks, statusClassName } from "@/lib/mock-data";

export default function RoleListPage() {
  return (
    <DashboardShell
      active="role"
      title="角色训练任务"
      subtitle="登录后默认进入此页。点击新建任务进入训练页，点击历史任务则带入已有参数进入同一个训练页。"
      action={(
        <Link href="/role-train" className="primary-button">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          新建任务
        </Link>
      )}
    >
      <section className="stats-grid">
        <article className="stat-card">
          <small>角色总数</small>
          <strong>128</strong>
        </article>
        <article className="stat-card">
          <small>已完成</small>
          <strong>92</strong>
        </article>
        <article className="stat-card">
          <small>训练中</small>
          <strong>14</strong>
        </article>
        <article className="stat-card">
          <small>成功率</small>
          <strong>98.4%</strong>
        </article>
      </section>

      <section className="table-panel">
        <div className="table-header" style={{ gridTemplateColumns: "1.4fr 0.9fr 0.7fr 0.8fr" }}>
          <div>角色名称</div>
          <div>训练日期</div>
          <div>状态</div>
          <div style={{ textAlign: "right" }}>操作</div>
        </div>
        <div className="table-body">
          {roleTasks.map((task) => (
            <div key={task.id} className="table-row" style={{ gridTemplateColumns: "1.4fr 0.9fr 0.7fr 0.8fr" }}>
              <div className="stack">
                <strong>{task.name}</strong>
                <span className="muted">{task.engine}</span>
              </div>
              <div>{task.createdAt}</div>
              <div>
                <span className={`badge ${statusClassName(task.status)}`}>{task.status}</span>
              </div>
              <div className="table-actions">
                <Link href={`/role-train?task=${task.id}`} className="text-button">
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
          <span>显示 1-4 条，共 128 条角色训练任务</span>
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