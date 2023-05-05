import React from "react";
import { Link } from "react-router-dom";

const MovieComponent = (props) => {
  let { id, name, genres, language, rating } = props.data;
  const image = props.data.image
    ? props.data.image.medium
    : "https://demofree.sirv.com/nope-not-here.jpg";
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
          <Link to={"/movie/" + id} className="flex text-center mt-5 py-2.5 w-full rounded hover:bg-rose-500 shadow-lg shadow-rose-300 bg-rose-400 text-xl text-white ml-auto">
            <div className="w-3/4">
              <p
                
                className="hover-underline-animation text-white"
              >
                Learn more
              </p>
            </div>
            <div className="w-1/4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieComponent;
