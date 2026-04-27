import React from "react";
import { RiTwitterXFill, RiUserLocationLine } from "@remixicon/react";
import { RiTwitterFill } from "@remixicon/react";

function UserCard({ userData }) {
  if (!userData) return;
  return (
    <div className="bg-gray-50 p-6 shadow-xl rounded-3xl flex items-center gap-5 font-mono w-8/12 pt-7 mt-12 m-auto max-sm:flex max-sm:flex-col">
      <img
        className="rounded-full shadow-lg w-40 object-cover max-sm:w-30"
        src={userData.avatar_url}
        alt="avatar_img"
      />
      <div className="flex flex-col items-start gap-0.5 text-sm text-gray-800 max-sm:text-xs">
        <p className="text-xl font-bold text-gray-900 max-sm:text-sm">
          {userData.name}
        </p>
        <p className="font-bold text-gray-600">
          <RiTwitterXFill className="w-4 inline-block mr-1" />
          {userData.twitter_username}
        </p>
        <p>
          <RiUserLocationLine className="w-4 inline-block mr-1" />
          {userData.location}
        </p>
        <p className="text-xs mb-2">{userData.bio}</p>
        <div className="flex items-center gap-1 max-sm:flex max-sm:flex-col">
          <p>Followers: {userData.followers} |</p>
          <p>Following: {userData.following} |</p>
          <p>Public repos: {userData.public_repos}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
