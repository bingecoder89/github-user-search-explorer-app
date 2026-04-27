import React from "react";
import { ClipLoader } from "react-spinners";

function Loading({ loading }) {
  return <div className="flex justify-center">{loading && <ClipLoader />}</div>;
}

export default Loading;
