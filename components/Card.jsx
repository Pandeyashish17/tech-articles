import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  const {
    title,
    description,
    readable_publish_date,
    url,
    comments_count,
    cover_image,
    reading_time_minutes,
    tag_list,
    user,
    social_image,
    positive_reactions_count,
  } = data;
  return (
    <>
      <article className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="#">
              <img
                className="rounded-full max-w-none w-12 h-12"
                src={user?.profile_image}
              />
            </a>
            <div className="flex flex-col">
              <div>
                <a
                  className="inline-block text-lg font-bold dark:text-white"
                  href="#"
                >
                  {user?.name}
                </a>
              </div>
              <div className="text-slate-500 dark:text-slate-300 ">
                {readable_publish_date}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 m-1 ">
          {tag_list?.slice(0, 3).map((tag,i) => (
            <span className="bg-indigo-500 text-white px-2 py-1 rounded-lg" key={i}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-3xl font-extrabold dark:text-white hover:text-blue-500 cursor-pointer"
        >
          {title}
        </a>
        <div className="py-4">
          <div className="flex justify-between gap-1 mb-1">
            <img
              src={cover_image || social_image}
              className="max-w-full"
              alt=""
            />
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="dark:text-slate-200 hover:text-blue-500 cursor-pointer"
        >
          {description}
        </a>
        <div className="py-4 flex justify-between ">
          <span className="inline-flex items-center">
            <span className="mr-2">
              <svg
                className="fill-rose-600 dark:fill-rose-400"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </span>
            <span className="text-lg font-bold">
              {positive_reactions_count}
            </span>
          </span>
          <span className="inline-flex items-center">
            <span className="mr-2">💬</span>
            <span className="text-lg font-bold">{comments_count}</span>
          </span>
          <span className="inline-flex items-center">
            <span className="mr-2">⏳</span>
            <span className="text-lg font-bold">
              {reading_time_minutes} mins
            </span>
          </span>
        </div>
      </article>
    </>
  );
};

export default Card;
