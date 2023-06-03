import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="flex"
      style={{
        height: "100vh",
        backgroundImage: `url(
          "../../BG.svg"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-60 ml-40" style={{ width: "50vw" }}>
        <p className="text-white font-bold text-2xl my-8">Welcome to</p>
        <h1
          style={{
            background:
              "linear-gradient(90deg, #BDDDE9 0%, #97AAB1 25.38%, #B1C6C1 52.7%, #AFCFC2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            BackgroundClip: "text",
            TextFillColor: "transparent",
          }}
          className="text-7xl font-bold leading-10 h-[66px] w-[467px]"
        >
          SponsorLinkr
        </h1>
        <p className="text-white font-bold text-2xl my-8">
          Your One Stop Solution to find sponsors for your event
        </p>
      </div>
      <div>
        <button
          style={{
            background:
              "linear-gradient(89.98deg, rgba(189, 221, 233, 0.82) 0.01%, rgba(206, 242, 228, 0.82) 99.98%)",
          }}
          className="rounded-lg mt-80 text-3xl font-bold w-[427px] h-[90px]"
        >
          <Link to="/new">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
