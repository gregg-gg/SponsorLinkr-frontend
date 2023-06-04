import { Link } from "react-router-dom";
import "./Home.css";
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
          className="text-7xl font-bold leading-normal my-[-4%] mt-[-7%]"
        >
          SponsorLinkr
        </h1>
        <p className="text-white font-bold text-2xl my-8">
          Your One Stop Solution to find sponsors for your event
        </p>
      </div>
      <div>
        <Link to="/new">
          <button className="mt-80 text-3xl font-bold getStarted">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
