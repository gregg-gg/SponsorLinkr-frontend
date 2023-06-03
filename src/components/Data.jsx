import DataCard from "./DataCard";
import Sidebar from "./Sidebar";

const Data = () => {
  const mainData = [
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
    {
      id: 1,
      name: "Harshal",
      company: "Alphabet.INC",
      linkedInAddress: "uiagduyg",
      designation: "Sr Developer",
    },
      {
        id: 1,
        name: "Harshal",
        company: "Alphabet.INC",
        linkedInAddress: "uiagduyg",
        designation: "Sr Developer",
      },
  ];
  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar />
      </div>
      <div style={{ zIndex: 10, marginLeft: "3.5vw" }}>
        <h1
          style={{
            background:
              "linear-gradient(90deg, #BDDDE9 0%, #97AAB1 25.38%, #B1C6C1 52.7%, #AFCFC2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            BackgroundClip: "text",
            TextFillColor: "transparent",
          }}
          className="text-7xl font-bold leading-10 h-[66px] w-[467px] m-20 mx-80"
        >
          SponsorLinkr
        </h1>
        <div className="flex flex-wrap">
          {mainData.map((data) => {
            return <DataCard data={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Data;
