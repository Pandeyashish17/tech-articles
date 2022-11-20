import { useEffect, useState, Suspense } from "react";
import Card from "../components/Card";
import axios from "axios";
import Loading from "../components/Loading";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
export default function Page() {
  const [data, setData] = useState(null);
  const router = useRouter();
  let page = parseInt(router.query.page);
  if (!page) {
    page = 1;
  }
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = () => {
      setLoading(true);
      axios.get(`https://dev.to/api/articles?page=${page}`).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    };
    getData();
  }, [page]);

  return (
    <>
      {loading || !data ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="text-black dark:text-slate-100 bg-slate-200 dark:bg-slate-900">
            <div className="box-border   sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3 p-2 ">
              {data?.map((item, i) => (
                <Card key={i} data={item} />
              ))}
            </div>
            <div className="flex items-center justify-center p-3  gap-2">
              {page != 1 && (
                <button
                  className="px-2 py-4 bg-indigo-500 text-white rounded-md"
                  onClick={() =>router.push(`/?page=${page - 1}`)}
                >
                  Previous Page
                </button>
              )}
              <button
                className="px-2 py-4 bg-indigo-500 text-white rounded-md"
                onClick={() => router.push(`/?page=${page + 1}`)}
              >
                Next Page
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
