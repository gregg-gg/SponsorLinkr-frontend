import "./Data.css";
import { Link } from "react-router-dom";

const DataCard = ({ data }) => {
  console.log(data);
  return (
    <Link>
      <div
        style={{
          width: "25vw",
          height: "32vh",
          background:
            "url(.png), linearGradient(180deg, rgba(167, 195, 202, 0.21) 0%, rgba(171, 198, 183, 0.08) 100%)",
          backgroundBlendMode: "overlay",
        }}
        className="text-white m-10 box"
      >
        <div className="name">
          <h1>
            <span>{`${data.name}`}</span>
            <span className="text-3xl font-bold">&#8594;</span>
          </h1>

          <div className="contentP">
            <div className="content">
              <h3>Company:</h3>
              <h2>{`${data.company}`}</h2>
            </div>

            <div className="content">
              <h3>Designation:</h3>
              <h2>
                {`${data.designation}`} <img src="../../manIcon.svg" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DataCard;
