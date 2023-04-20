export function SignUp() {
  return (
    <div id="Signup">
      <h1>Sign Up</h1>
      <form method="POST" action="http://localhost:3000/users.json">
        <div>
          Name: <input name="name" type="text" />
        </div>
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
