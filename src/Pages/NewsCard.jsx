import React from "react";
import { FaShareAlt, FaEye, FaStar, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, rating, total_view, author, thumbnail_url, details, tags
  } = news;

  return (
    <div className="card bg-white shadow-sm border border-gray-200">
      {/* Author Info */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
            <button><FaRegBookmark className="text-gray-600 cursor-pointer"></FaRegBookmark>
        </button><button><FaShareAlt className="text-gray-600 cursor-pointer" /></button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-2">
        <h2 className="card-title text-lg">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pt-3 text-sm text-gray-700">
        <p>
          {details.length > 180 ? details.slice(0, 180) + "..." : details}
        </p>
        <Link to = {`/news-details/${id}`} className="text-orange-500 cursor-pointer font-semibold">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t mt-3">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-600 font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
