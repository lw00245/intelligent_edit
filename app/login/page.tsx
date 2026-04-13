export default function LoginPage() {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <div className="brand-mark">AT</div>
        <p className="eyebrow" style={{ marginTop: 18 }}>Animation Task Console</p>
        <h1 className="display-title">动画智能插帧平台</h1>
        <p className="supporting-text">
          登录后进入角色训练列表页。当前阶段先完成页面串联，方便后续继续接接口和真实任务流。
        </p>

        <form action="/role-list" className="form-stack">
          <div className="field">
            <label htmlFor="username">用户名</label>
            <input id="username" name="username" className="input" placeholder="architect_id" defaultValue="admin" />
          </div>
          <div className="field">
            <label htmlFor="password">密码</label>
            <input id="password" name="password" type="password" className="input" placeholder="请输入密码" defaultValue="123456" />
          </div>
          <button type="submit" className="primary-button">登录并进入控制台</button>
        </form>
      </section>
    </main>
  );
}