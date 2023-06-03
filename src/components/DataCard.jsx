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
            "url(.png), linear-gradient(180deg, rgba(167, 195, 202, 0.3) 0%, rgba(171, 198, 183, 0.1) 100%)",
          backgroundBlendMode: "overlay",
        }}
        className="text-white m-10"
      >
        <iv>
          <h1>
            <span className="m-20">{`${data.name}`}</span>
          </h1>
        </iv>
      </div>
    </Link>
  );
};

export default DataCard;
