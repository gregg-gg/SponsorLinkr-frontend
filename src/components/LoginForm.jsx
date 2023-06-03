const LoginForm = () => {

  const linkedInLogin = async () => {
    const scope = ["r_liteprofile", "r_emailaddress", "w_member_social"]
    const URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=864siauvsuqfcz&redirect_uri=http://localhost:8000&scope=${scope.join(" "  )}`
    window.location.href = URL;
  }

  return (
    <div className="m-10">

      <button
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, rgba(89, 89, 89, 0) 100%);",
          border: "1px solid #97AAB1",
        }}
        className="rounded-lg mt-8 text-2xl w-[562px] h-[45px] text-white"
        onClick={linkedInLogin}
      >
        Log In with LinkedIn
      </button>
    </div>
  );
};

export default LoginForm;
