const Login = () => {
  return (
    <div>
      <div>
        <h2>Welcom to shareNote</h2>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="enter username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="********" />
          </div>
          <div>
            <label htmlFor="">
              <input type="checkbox" />
              Remember Me?
            </label>
            <span></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
