export default function LoginPage() {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <div className="brand-mark" style={{ margin: "0 auto", display: "flex" }}>IE</div>
        <p className="eyebrow" style={{ marginTop: 18, textAlign: "center" }}>Intelligent&nbsp;Edit</p>
        <h1 className="display-title">动画智能插帧平台</h1>
        <p className="supporting-text">
          登录后进入插帧任务列表。角色训练为可选前置步骤，可在侧边栏随时进入。
        </p>

        <form action="/frame-list" className="form-stack">
          <div className="field">
            <label htmlFor="username">用户名</label>
            <input id="username" name="username" className="input" placeholder="architect_id" defaultValue="admin" />
          </div>
          <div className="field">
            <label htmlFor="password">密码</label>
            <input id="password" name="password" type="password" className="input" placeholder="请输入密码" defaultValue="123456" />
          </div>
          <button type="submit" className="primary-button">登录</button>
        </form>
      </section>
    </main>
  );
}