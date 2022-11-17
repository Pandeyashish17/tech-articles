import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(data);

  useEffect(() => {
    if (!tag) return;
    const getData = () => {
      setLoading(true);
      axios.get(`https://dev.to/api/articles?tag=${tag}`).then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      });
    };
    getData();
  }, [tag]);
  return (
    <>
      {loading || !data ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="bg-slate-900 min-h-screen p-2 ">
            <div className="grid place-content-center">
              <span className="text-2xl text-white capitalize mb-2 bg-indigo-700 px-4 py-2 rounded-lg">
                {tag}
              </span>
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

export default Tag;
