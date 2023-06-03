import "./Dashboard.css";
import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const companyData = [
    {
      id: 1,
      title: "Amantya",
      imageName: "amantya",
    },
    {
      id: 2,
      title: "Josh Talks",
      imageName: "joshtalks",
    },
    {
      id: 3,
      title: "Brilliant printers",
      imageName: "printer",
    },
  ];
  const [category, setCategory] = useState("Hackathons");
  return (
    <div className="flex">
      <Sidebar />
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(189, 221, 233, 0.88) 0%, #AFCFC2 59.17%, rgba(199, 227, 211, 0.83) 80.24%, rgba(199, 227, 208, 0.87) 100%)",
        }}
        className="w-[18.5vw] h-screen"
      >
        <div className="font-bold text-3xl m-8">Good Evening, Anurag!</div>
        <div
          style={{
            background: " linear-gradient(180deg, #000000 0%, #121212 100%)",
          }}
          className="box-border	w-[19.5vw] h-[13vh] ml-[-2.5%] premium"
        >
          <span className=" text-white font-semibold text-2xl premiumInner">
            {" "}
            <img src="../../crown.svg" />
            <span className="mx-5">Premium!</span>
          </span>
        </div>
        <div className="text-black font-semibold text-xl stats">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 statsIcon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span className="mx-5">Previous searches</span>
        </div>
        <div className="text-black font-semibold stats">
          <div className="text-black font-semibold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 statsIcon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl">27</h1>
            <p className="text-xs">credits used till date</p>
          </div>
        </div>
        <div className="text-black font-semibold stats">
          <div className="text-black font-semibold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 statsIcon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl">54k</h1>
            <p className="text-xs">rasied till date</p>
          </div>
        </div>
      </div>
      <div>
        <h1
          style={{
            background:
              "linear-gradient(90deg, #BDDDE9 0%, #97AAB1 25.38%, #B1C6C1 52.7%, #AFCFC2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            BackgroundClip: "text",
            TextFillColor: "transparent",
          }}
          className="text-7xl font-bold leading-normal h-[66px] w-[467px] m-auto mt-10"
        >
          SponsorLinkr
        </h1>

        <div className="flex">
          <span
            style={{ height: "108px", width: "426px" }}
            className="text-4xl m-20 text-[#BCDEE9]"
          >
            What Sponsor are we looking for today?
          </span>
          <div
            style={{
              width: "346px",
              height: "86px",
              background:
                "url(.png), linear-gradient(180deg, rgba(167, 195, 202, 0.3) 0%, rgba(171, 198, 183, 0.1) 100%)",
              backgroundBlendMode: "overlay",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(9px)",
            }}
            className="flex mt-20"
          >
            <span className="text-white font-semibold flex m-4 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <span className="text-white font-semibold  mx-4 text-4xl">3</span>
              <span className="text-white font-semibold  my-1 text-2xl">
                Free searches left
              </span>
            </span>
          </div>
        </div>
        <div className="mx-10 mb-2 flex text-white">
          <select
            style={{
              width: "502px",
              height: "50px",
              background: "transparent",
              color: "white",
              border: "2px solid #B1C6C1",
              padding: "10px",
            }}
            className="rounded-lg"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
          >
            <option value="Hackathons">Hackathons</option>
            <option value="Sports Events">Sports Events</option>
            <option value="NGO">NGO</option>
          </select>
          <div className="mx-4 mt-1">
            <Link to="/data">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="text-white leading-6 text-3xl mx-10 my-8">
          Choose from a catalog of Sponsors curated for you!
        </div>
        {/* card container */}
        <div className="flex">
          {/* card */}
          {companyData.map((company) => {
            return <Card companyData={company} key={company.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
