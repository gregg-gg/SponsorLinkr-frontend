import Sidebar from "./Sidebar";

const Data = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div style={{ zIndex: 10 }}>
        <h1
          style={{
            background:
              "linear-gradient(90deg, #BDDDE9 0%, #97AAB1 25.38%, #B1C6C1 52.7%, #AFCFC2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            BackgroundClip: "text",
            TextFillColor: "transparent",
          }}
          className="text-7xl font-bold leading-10 h-[66px] w-[467px] ml-[50vw]"
        >
          SponsorLinkr
        </h1>
      </div>
    </div>
  );
};

export default Data;
