import React from "react";
import { useRouter } from "next/router";
import Top from "components/Search/Top";
import Navbar from "components/Navbar";
import Sidebar from "components/Search/Sidebar";
import Card from "components/Card";

import useSearch from "reactQuery/useSearch";

const Search = () => {
  const router = useRouter();
  const { q, type, sort } = router.query;
  const { data, isLoading } = useSearch(q, sort, type);
  return (
    <div>
      <Navbar />
      <div className="max-w-[1000px] mx-auto">
        <Top searchedText={q} sort={sort} />
        <div className="flex gap-5">
          <Sidebar type={type} />
          {!isLoading ? (
            <div className="flex-1">
              {data?.data?.result?.map((item, index) => (
                <Card key={index} data={item} search />
              ))}
            </div>
          ) : (
            "Loading...."
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
