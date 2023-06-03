import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="m-10">
      <div>
        <p>Email</p>
        <input
          style={{
            border: "0",
            outline: "0",
            background: "transparent",
            borderBottom: "0.404603px solid #C9C9C9",
            width: "562px",
            color: "#C9C9C9",
          }}
          type="text"
          placeholder="Enter your email"
        ></input>
      </div>
      <div>
        <p>Full Name</p>
        <input
          style={{
            border: "0",
            outline: "0",
            background: "transparent",
            borderBottom: "0.404603px solid #C9C9C9",
            width: "562px",
            color: "#C9C9C9",
          }}
          type="text"
          placeholder="Enter your Full Name"
        ></input>
      </div>
      <div>
        <p>Password</p>
        <input
          style={{
            border: "0",
            outline: "0",
            background: "transparent",
            borderBottom: "0.404603px solid #C9C9C9",
            width: "562px",
            color: "#C9C9C9",
          }}
          type="password"
          placeholder="Enter a password"
        ></input>
      </div>
      <div>
        <p>Confirm Password</p>
        <input
          style={{
            border: "0",
            outline: "0",
            background: "transparent",
            borderBottom: "0.404603px solid #C9C9C9",
            width: "562px",
            color: "#C9C9C9",
          }}
          type="password"
          placeholder="Confirm password"
        ></input>
      </div>

      <button
        style={{
          background:
            "linear-gradient(89.98deg, rgba(189, 221, 233, 0.82) 0.01%, rgba(206, 242, 228, 0.82) 99.98%)",
        }}
        className="rounded-lg mt-20 text-3xl font-bold w-[562px] h-[45px]"
      >
        Sign Up
      </button>
      <button
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, rgba(89, 89, 89, 0) 100%);",
          border: "1px solid #97AAB1",
        }}
        className="rounded-lg mt-8 text-2xl w-[562px] h-[45px] text-white"
      >
        <Link to="/app">Log In with LinkedIn</Link>
      </button>
    </div>
  );
};

export default SignUpForm;
