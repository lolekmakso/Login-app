import GoogleIcon from "../icons/GoogleIcon";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login__title">NFT Access</div>
      <div className="login__desc">
        Please fill your detail to access your account.
      </div>
      <form action="get" className="form">
        <label className="form__field">
          <span className="form__title">Email</span>
          <input
            type="email"
            className="form__input"
            placeholder="debra.holt@example.com"
          />
        </label>

        <label className="form__field">
          <span className="form__title">Password</span>
          <input
            type="password"
            className="form__input"
            placeholder="••••••••"
          />
        </label>

        <div className="form__row">
          <label>
            <input type="checkbox" className="form__checkbox" />
            <span className="form__title">Remember me</span>
          </label>
          <a href="/">Forgot Password?</a>
        </div>

        <input type="submit" className="form__submit" value="Sing in" />
      </form>

      <a href="/" className="login__google">
        <GoogleIcon />
        <span>Sign in with Google</span>
      </a>

      <div className="login__sign-up">
        Don't have an account? <a href="/">Sign up</a>
      </div>
    </div>
  );
}

export default Login;
