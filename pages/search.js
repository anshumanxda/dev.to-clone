import React from "react";
import { useRouter } from "next/router";

import useSearch from "reactQuery/useSearch";

import Top from "components/Search/Top";
import Navbar from "components/Navbar";
import Sidebar from "components/Search/Sidebar";
import Main from "../components/Search/Main";

const Search = () => {
  const router = useRouter();
  const { q, type, sort } = router.query;
  const { data, isLoading } = useSearch(q, sort, type);
  return (
    <div>
      <Navbar />
      <div className="max-w-[1000px] mx-auto mt-[80px]">
        <Top searchedText={q} sort={sort} />
        <div className="flex gap-5 mt-3">
          <Sidebar type={type} />
          <Main data={data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Search;
