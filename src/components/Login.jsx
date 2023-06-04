import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <h1
        style={{
          background:
            "linear-gradient(90deg, #BDDDE9 0%, #97AAB1 25.38%, #B1C6C1 52.7%, #AFCFC2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          BackgroundClip: "text",
          TextFillColor: "transparent",
        }}
        className="text-7xl font-bold leading-normal m-auto sponsorLinkr"
      >
        SponsorLinkr
      </h1>
      <div className="flex">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(189, 221, 233, 0.93) 0%, #C7E3D0 100%)",
            top: "137px",
            left: "292px",
            width: "45vw",
            height: "80vh",
          }}
          className="ml-40 my-10 rounded-tl-xl rounded-bl-xl"
        >
          <h1 className="flex justify-center items-center text-3xl font-bold mt-60 mx-4">
            Oh to be at the right place, at the right time!
          </h1>
        </div>
        <div
          style={{
            //   background:
            //     "linear-gradient(180deg, #000000 0%, rgba(89, 89, 89, 0) 100%);",
            background:
              "linear-gradient(180deg, #000000 0%, rgba(89, 89, 89, 0) 100%);",
            top: "137px",
            left: "292px",
            width: "658px",
            height: "563px",
          }}
          className="mr-40 my-10 rounded-tr-xl rounded-br-xl"
        >
          {/* parent for the content */}
          <div>
            <div className="flex text-white text-xl mx-10">
              <button
                onClick={() => {
                  setIsSigningUp(false);
                }}
              >
                Login
              </button>
              <p className="mx-2">|</p>
              <button
                onClick={() => {
                  setIsSigningUp(true);
                }}
              >
                Sign up
              </button>
            </div>
            <div className="text-[#97AAB1] font-bold leading-7 text-3xl m-10">
              Welcome,
            </div>
            <div className="text-white mx-10 my-[-3%]">
              Please enter your details below to sign in
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
