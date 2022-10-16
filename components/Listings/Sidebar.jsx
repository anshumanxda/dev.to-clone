import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { LISTING_SIDEBAR } from "constants/listingSidebar";

const Sidebar = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className="max-w-[240px] hidden md:block">
      <input
        type="text"
        className="input-box max-w-[100%] mb-3"
        placeholder="Search..."
      />
      <div>
        {LISTING_SIDEBAR.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <p
                className={`listing-sidebar-items ${asPath === item.link ? "bg-white font-semibold" : ""
                  } `}
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
