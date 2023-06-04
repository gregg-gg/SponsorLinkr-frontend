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
    <div className="flex bgImg">
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
          className="text-7xl font-bold leading-normal m-auto mt-10 sponsorLinkr"
        >
          SponsorLinkr
        </h1>

        <div className="flex justify-between">
          <span
            style={{ height: "108px", width: "426px" }}
            className="text-4xl m-20 text-[#BCDEE9]"
          >
            What Sponsor are we looking for today?
          </span>
          <div className="flex mt-20 searches">
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
          <div className="search">
            <Link to="/data">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.91327 3.30553C8.1605 3.30553 6.47951 4.00179 5.24011 5.24113C4.00071 6.48047 3.30442 8.16137 3.30442 9.91406C3.30442 11.6668 4.00071 13.3477 5.24011 14.587C6.47951 15.8263 8.1605 16.5226 9.91327 16.5226C11.666 16.5226 13.347 15.8263 14.5864 14.587C15.8258 13.3477 16.5221 11.6668 16.5221 9.91406C16.5221 8.16137 15.8258 6.48047 14.5864 5.24113C13.347 4.00179 11.666 3.30553 9.91327 3.30553ZM1.87462e-07 9.91406C-0.000198909 8.35396 0.367853 6.81584 1.07422 5.42479C1.78059 4.03374 2.80533 2.82905 4.0651 1.9087C5.32486 0.988338 6.78409 0.378303 8.32409 0.128204C9.86409 -0.121894 11.4414 -0.00499356 12.9277 0.469398C14.414 0.94379 15.7673 1.76228 16.8776 2.85829C17.9879 3.95431 18.8239 5.2969 19.3174 6.77688C19.811 8.25686 19.9482 9.83244 19.718 11.3755C19.4878 12.9185 18.8967 14.3854 17.9926 15.6569L25.9513 23.6152C26.2523 23.9268 26.4188 24.3441 26.415 24.7773C26.4113 25.2105 26.2375 25.6249 25.9312 25.9312C25.6248 26.2375 25.2104 26.4113 24.7772 26.415C24.344 26.4188 23.9267 26.2523 23.6151 25.9513L15.658 17.9946C14.1749 19.0492 12.4302 19.6751 10.6149 19.8039C8.79969 19.9327 6.98402 19.5594 5.36688 18.7248C3.74974 17.8903 2.39354 16.6267 1.44688 15.0726C0.500224 13.5185 -0.000353657 11.7338 1.87462e-07 9.91406Z"
                  fill="#111928"
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
