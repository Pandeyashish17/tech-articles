import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";

const UserPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(data);
  useEffect(() => {
    if (!name) return;
    const getData = () => {
      setLoading(true);
      axios.get(`https://dev.to/api/articles?username=${name}`).then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      });
    };
    getData();
  }, [name]);
  return (
    <>
      {loading || !data ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="bg-slate-900 min-h-screen ">
            <div className="grid place-content-center">
              <div className="rounded-lg shadow-xl bg-gray-900 text-white w-[80vw]">
                <div className="border-b border-gray-800 px-8 ">
                  <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                  <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                  <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                </div>
                <div className="px-8 py-6">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                    <span className="text-yellow-300">{data[0]?.user.name}</span>,
                  </p>
                  {data[0].user.twitter_username && (
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;Twitter UserName:{" "}
                      <a
                        href={`https://twitter.com/${data[0].user.twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-300"
                      >
                        {data[0].user.twitter_username}
                      </a>
                    </p>
                  )}
                  {data[0].user.website_url && (
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
                      <span className="text-yellow-300">
                        <a
                          href={data[0].user.website_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-yellow-300 hover:underline focus:border-none"
                        >
                          {data[0].user.website_url}
                        </a>
                      </span>
                    </p>
                  )}
                  {data[0].user.github_username && (
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;Github:{" "}
                      <span className="text-yellow-300">
                        <a
                          href={`https://github.com/${data[0].user.github_username}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-yellow-300 hover:underline focus:border-none"
                        >
                          {data[0].user.github_username}
                        </a>
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="box-border   sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3 p-2 ">
              {data?.map((item, i) => (
                <Card key={i} data={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserPage;
