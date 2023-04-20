import axios from "axios";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("handleSubmit");
  const params = new FormData(event.target);
  axios
    .post("http://localhost:3000/users.json", params)
    .then((response) => {
      console.log(response);
      event.target.reset();
    })
    .catch((error) => {
      console.log(error.response.data.errors);
    });
};

export function SignUp() {
  return (
    <div id="Signup" class="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
