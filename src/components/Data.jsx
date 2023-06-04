import { useEffect, useState } from "react";
import DataCard from "./DataCard";
import Sidebar from "./Sidebar";

const Data = () => {
  const [pocs,setPocs] = useState([])

  const getData = async () => {
    const url = "http://localhost:8000/api/core/events/1/pocs/"
    try{
      console.log("hello")
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token ' + "0af5ce179882f527cab7ae50799253eaafaae02a",
        },
        })
      const data = await response.json()
      setPocs(data)
      console.log(data)
    } catch(error){
      console.log(error)
    }
  }
  getData()
   // useEffect(()=>{
  //   getData()
  // }

  return (
    <div className="flex parent">
      <div className="parent1">
        <Sidebar />
      </div>
      <div style={{ zIndex: 10, marginLeft: "5vw" }}>
        <h1
          style={{
            background:
              "linear-gradient(90deg, #BDDDE9 0%, #97AAB1 25.38%, #B1C6C1 52.7%, #AFCFC2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            BackgroundClip: "text",
            TextFillColor: "transparent",
          }}
          className="text-7xl font-bold mx-80 leading-normal sponsorLinkr"
        >
          SponsorLinkr
        </h1>

        <h2 className="subHeading">
          Oh hey! We found a few <span>Sponsors</span> for your Hackathon! Good
          Luck!
        </h2>

        <div className="flex flex-wrap profiles">
          {pocs.map((data) => {
            if ((data.name === "") || (data.name === "LinkedIn Member")) {
              return
            }
            let name = data.name.split("\n")
            console.log(name)
            data.name = name[0]
            return <DataCard data={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Data;
