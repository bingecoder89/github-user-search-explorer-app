import React from "react";
import { RiGithubFill } from "@remixicon/react";

function HeaderTitle() {
  return (
    <div className="flex items-center font-mono text-white max-sm:w-1/2 max-sm:ml-2.5">
      <RiGithubFill />
      <div className="flex flex-col ml-2">
        <h3 className="font-bold text-sm">Github User Search</h3>
        <p className="text-xs">Peek into anyone's GitHub profile...</p>
      </div>
    </div>
  );
}

export default HeaderTitle;
