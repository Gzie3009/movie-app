import React from "react";
import { Link } from "react-router-dom";

const MovieComponent = (props) => {
  let { id, name, genres, language, rating } = props.data;
  const image = props.data.image ? props.data.image.medium : "https://demofree.sirv.com/nope-not-here.jpg";
  return (
    <>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-rose-50 p-6 rounded-lg shadow-xl shadow-rose-300">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={image}
            alt="content"
          />
          <h3 className="tracking-widest text-rose-600 text-xs font-medium title-font">
            {genres.map((genre, index) => {
              return (
                <span key={index} className="pr-2">
                  {genre}
                </span>
              );
            })}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font">
            {name}
          </h2>
          <p className="leading-relaxed text-base w-full text-yellow-500">
            &#9733; Rating :{" "}
            {rating.average ? <>{rating.average}</> : <>Not Available</>}
          </p>
          <p className="leading-relaxed text-base w-full">{language}</p>
          <div className="mt-5 py-2.5 w-full rounded hover:bg-rose-500 shadow-lg shadow-rose-300 bg-rose-400 text-xl text-white ml-auto grid place-items-center">
            <Link
              to={"/movie/" + id}
              className="hover-underline-animation text-white"
            >
              Get Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieComponent;
