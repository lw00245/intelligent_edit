import { DashboardShell } from "@/components/dashboard-shell";

export default function AccountPage() {
  return (
    <DashboardShell
      active="account"
      title="账户管理"
      subtitle="这里先承接侧边栏入口，展示当前账号信息、环境权限和通知偏好，后续可以再接入真实用户中心接口。"
    >
      <section className="panel panel-grid">
        <div>
          <p className="eyebrow">Account Overview</p>
          <h2 className="card-title" style={{ margin: "10px 0 0", fontSize: 24 }}>当前账户信息</h2>
        </div>

        <div className="fields-grid">
          <div className="inline-note">
            <p className="eyebrow">用户名</p>
            <p style={{ margin: "12px 0 0", fontSize: 24, fontWeight: 800 }}>Admin User</p>
            <p className="supporting-text" style={{ marginTop: 8 }}>admin@architect.local</p>
          </div>
          <div className="inline-note">
            <p className="eyebrow">角色权限</p>
            <p style={{ margin: "12px 0 0", fontSize: 24, fontWeight: 800 }}>管理员</p>
            <p className="supporting-text" style={{ marginTop: 8 }}>可访问角色训练、插帧任务和账户设置</p>
          </div>
        </div>
      </section>

      <section className="panel panel-grid">
        <div>
          <p className="eyebrow">Preferences</p>
          <h2 className="card-title" style={{ margin: "10px 0 0", fontSize: 24 }}>通知与偏好</h2>
        </div>

        <div className="meta-list">
          <div className="meta-item">
            <span>任务完成通知</span>
            <strong>已开启</strong>
          </div>
          <div className="meta-item">
            <span>失败任务提醒</span>
            <strong>已开启</strong>
          </div>
          <div className="meta-item">
            <span>当前环境</span>
            <strong>演示环境</strong>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}