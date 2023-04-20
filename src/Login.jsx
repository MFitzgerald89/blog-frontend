export function Login() {
  return (
    <div id="login" class="login">
      <h1>Login</h1>
      <form method="POST" active="http://localhost:3000/sessions.json">
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Confirm Password: <input name="password_confirmation" type="password_confirmation" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
