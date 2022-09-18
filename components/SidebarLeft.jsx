import React, { useId } from "react";
import Link from "next/link";

import { SIDEBAR_DATA } from "constants/sidebar";

const SidebarLeft = () => {
  const uniqueId = useId()
  return (
    <div>
      <ul>
        {SIDEBAR_DATA.slice(0, 13).map((item, index) => (
          <li key={`${uniqueId}-${index}`} className="hover:bg-violet-100 hover:underline cursor-pointer py-2 px-3 rounded-md ">
            <Link href="/">
              <div className="flex gap-2 items-center">
                {item.icon}
                <span className="text-gray-600">{item.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>


      <div className="mt-5">
        <p className="font-bold text-gray-600 ml-3 mb-2">Other</p>
        <ul>
          {SIDEBAR_DATA.slice(-3).map((item, index) => (
            <li key={`${uniqueId}-${index}`} className="hover:bg-violet-100 hover:underline cursor-pointer py-2 px-3 rounded-md ">
              <Link href="/">
                <div className="flex gap-2 items-center">
                  {item.icon}
                  <span className="text-gray-600">{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarLeft;
