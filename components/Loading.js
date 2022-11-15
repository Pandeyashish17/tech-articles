import React from "react";
import RiseLoader from "react-spinners/RiseLoader";
const Loading = () => {
  return (
    <div className="text-4xl flex justify-center items-center min-h-screen ">
      <RiseLoader color="#6366f1" size={30} />
    </div>
  );
};

export default Loading;
