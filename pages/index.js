import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";
import Loading from "../components/Loading";
import { useRouter } from "next/router";

export default function Page() {
  const [data, setData] = useState(null);
  const router = useRouter();
  let { page } = router.query;
  let pageNumber = parseInt(page);
  if (!pageNumber) {
    pageNumber = 1;
  }
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = () => {
      setLoading(true);
      axios
        .get(`https://dev.to/api/articles?page=${pageNumber}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    };
    getData();
  }, [pageNumber]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="text-black dark:text-slate-100 bg-slate-200 dark:bg-slate-900">
            <Navbar />
            <div className="box-border   sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
              {data?.map((item, i) => (
                <Card key={i} data={item} />
              ))}
            </div>
            <div className="flex items-center justify-center p-3  gap-2">
              {pageNumber != 1 && (
                <button
                  className="px-2 py-4 bg-indigo-500 text-white rounded-md"
                  onClick={() => router.back()}
                >
                  Previous Page
                </button>
              )}
              <button
                className="px-2 py-4 bg-indigo-500 text-white rounded-md"
                onClick={() => router.push(`/?page=${pageNumber + 1}`)}
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
