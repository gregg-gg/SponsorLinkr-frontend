import { Link } from "react-router-dom";

const Card = ({ companyData }) => {
  return (
    <Link>
      <div
        style={{
          width: "250.74px",
          height: "200.76px",
          background:
            "url(.png), linear-gradient(180deg, rgba(167, 195, 202, 0.3) 0%, rgba(171, 198, 183, 0.1) 100%)",
          backgroundBlendMode: "overlay",
        }}
        className="text-white m-10"
      >
        <div className="h-40 w-40 flex justify-center">
          <img
            src={`../../${companyData.imageName}.svg`}
            alt="amantya"
          ></img>
        </div>
        <h1 className="flex justify-center text-3xl">{`${companyData.title}`}</h1>
      </div>
    </Link>
  );
};

export default Card;
