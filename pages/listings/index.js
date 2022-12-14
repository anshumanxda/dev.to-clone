import React from "react";

import Top from "components/Listings/Top";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Listings/Sidebar";
import Main from "components/Listings/Main";

const Listings = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1280px] mx-3 lg:mx-auto mt-[80px]">
        <Top />
        <div className="flex lg:gap-5 mt-3">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Listings;
