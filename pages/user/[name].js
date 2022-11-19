import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub, BsGlobe } from "react-icons/bs";

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
          <div className="bg-slate-900 min-h-screen p-2 ">
            <div className="grid place-content-center ">
              <div className="bg-indigo-700 text-white flex flex-col gap-1 rounded-lg p-3">
                <span className="text-2xl text-white capitalize mb-2  px-4 py-2 rounded-lg">
                  {data[0].user.name}
                </span>
                <div className="flex gap-3 justify-center items-center">
                  {data[0].user.twitter_username && (
                    <a
                      href={`https://twitter.com/${data[0].user.twitter_username}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <AiFillTwitterCircle size={28} color="00acee" />
                    </a>
                  )}
                  {data[0].user.github_username && (
                    <a
                      href={`https://github.com/${data[0].user.github_username}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <BsGithub size={28} color="#121212" />
                    </a>
                  )}
                  {data[0].user.website_url && (
                    <a
                      href={data[0].user.website_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <BsGlobe size={28} />{" "}
                    </a>
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
