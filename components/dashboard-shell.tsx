import Link from "next/link";
import type { ReactNode } from "react";

type DashboardShellProps = {
  active: "role" | "frame" | "account";
  title: string;
  subtitle: string;
  action?: ReactNode;
  children: ReactNode;
};

const navItems = [
  {
    key: "role",
    href: "/role-list",
    title: "角色训练",
    caption: "训练角色模型",
    icon: "role",
    optional: true,
  },
  {
    key: "frame",
    href: "/frame-list",
    title: "插帧任务",
    caption: "插帧任务列表与结果查看",
    icon: "frame",
    optional: false,
  },
] as const;

function SidebarIcon({ kind }: { kind: "role" | "frame" | "account" | "logout" }) {
  if (kind === "role") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.75a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5ZM5.5 19a6.5 6.5 0 0 1 13 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "frame") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10.5h8M8 13.5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "account") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8.5" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6.5 19a5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 7 5 12l5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12h9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 5.5h2.5A1.5 1.5 0 0 1 18 7v10a1.5 1.5 0 0 1-1.5 1.5H14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function DashboardShell({ active, title, subtitle, action, children }: DashboardShellProps) {
  return (
    <div className="page-shell dashboard">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">IE</div>
          <div className="sidebar-brand-copy" style={{ textAlign: "center" }}>
            <p className="eyebrow">Intelligent&nbsp;Edit</p>
            <strong className="sidebar-brand-title">智能编辑平台</strong>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`nav-link ${active === item.key ? "active" : ""} ${item.optional && active !== item.key ? "nav-link-optional" : ""}`}
            >
              <span className="nav-link-row">
                <span className="nav-icon" aria-hidden="true">
                  <SidebarIcon kind={item.icon} />
                </span>
                <span>
                  <span className="nav-title">
                    {item.title}
                    {item.optional && (
                      <span className="nav-optional-tag">可选</span>
                    )}
                  </span>
                  <span className="nav-caption">{item.caption}</span>
                </span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-utility-nav">
            <Link href="/account" className={`nav-link utility-link ${active === "account" ? "active" : ""}`}>
              <span className="nav-link-row">
                <span className="nav-icon" aria-hidden="true">
                  <SidebarIcon kind="account" />
                </span>
                <span>
                  <span className="nav-title">账户管理</span>
                  <span className="nav-caption">账号信息与偏好设置</span>
                </span>
              </span>
            </Link>
            <Link href="/login" className="nav-link utility-link utility-link-danger">
              <span className="nav-link-row">
                <span className="nav-icon" aria-hidden="true">
                  <SidebarIcon kind="logout" />
                </span>
                <span>
                  <span className="nav-title">退出登录</span>
                  <span className="nav-caption">返回登录页</span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </aside>

      <main className="workspace">
        <div className="topbar">
          <div className="searchbar-wrap">
            <span className="searchbar-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-4.2-4.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <input className="searchbar" placeholder="搜索任务 / 角色 / 项目" />
          </div>
          {action ?? <div />}
        </div>

        {children}
      </main>
    </div>
  );
}