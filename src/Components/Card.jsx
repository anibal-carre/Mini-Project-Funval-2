import { HiStar } from "react-icons/hi";
import "./Card.css";

function Card({ photo, superHost, type, beds, rating, title }) {
  return (
    <article className="flex flex-col w-96 h-72 mb-10">
      <div className="rounded-3xl overflow-hidden h-4/5 mb-3">
        <img src={photo} alt="" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="flex flex-1 items-center justify-start gap-6 mb-2">
        <button
          className={
            superHost
              ? "text-xs text-gray-10 font-bold button"
              : "text-xs text-gray-15 font-bold button-hidden"
          }
        >
          {superHost ? "SUPERHOST" : "Private Room"}
        </button>
        <p className="text-sm text-gray-15">
          {type}
          <span> . {beds} beds</span>
        </p>

        <p className="text-sm font-medium flex items-center pa">
          <HiStar className="text-base text-orange-10" /> {rating}
        </p>
      </div>

      <div>
        <p className="text-base text-gray-10 font-semibold">{title}</p>
      </div>
    </article>
  );
}

export default Card;
