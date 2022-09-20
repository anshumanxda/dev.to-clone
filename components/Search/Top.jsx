import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Top = ({ searchedText }) => {
  const router = useRouter();
  const { q, type, sort } = router.query;
  return (
    <div className="flex justify-between mt-[80px]">
      <h2 className="font-semibold text-3xl">
        Search results for {searchedText}
      </h2>

      <div className="flex items-center gap-3">
        <Link href={`/search/?q=${q}&type=${type}`}>
          <p
            className={`tab-style ${sort === undefined ? "font-bold" : ""
              }`}
          >
            Most Relevant
          </p>
        </Link>

        <Link href={`/search/?q=${q}&type=${type}&sort=desc`}>
          <p className={`tab-style ${sort === "desc" ? "font-bold" : ""
            }`}>Newest</p>
        </Link>

        <Link href={`/search/?q=${q}&type=${type}&sort=asc`}>
          <p className={`tab-style ${sort === "asc" ? "font-bold" : ""
            }`}>Oldest</p>
        </Link>
      </div>
    </div>
  );
};

export default Top;
