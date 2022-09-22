import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Tab = () => {
  const { route } = useRouter();
  return (
    <div className="flex justify-between" >
      <div className="flex gap-1 items-center">
        <Link href="/">
          <p className={`tab-style ${route === "/" ? "font-bold" : ""}`}>
            Relevant
          </p>
        </Link>
        <Link href="/latest">
          <p
            className={`tab-style ${route === "/latest" ? "font-bold" : ""}`}
          >
            Latest
          </p>
        </Link>
        <Link href="/top/week">
          <p
            className={`tab-style ${route.includes("/top") ? "font-bold" : ""
              }`}
          >
            Top
          </p>
        </Link>
      </div>
      {
        route.includes("/top") ? (
          <div>
            <div className="flex gap-1 items-center">
              <Link href="/top/week">
                <p
                  className={`tab-style ${route === "/top/week" ? "font-bold" : ""
                    }`}
                >
                  Week
                </p>
              </Link>
              <Link href="/top/month">
                <p
                  className={`tab-style ${route === "/top/month" ? "font-bold" : ""
                    }`}
                >
                  Month
                </p>
              </Link>
              <Link href="/top/year">
                <p
                  className={`tab-style ${route === "/top/year" ? "font-bold" : ""
                    }`}
                >
                  Year
                </p>
              </Link>
              <Link href="/top/infinity">
                <p
                  className={`tab-style ${route === "/top/infinity" ? "font-bold" : ""
                    }`}
                >
                  Infinity
                </p>
              </Link>
            </div>
          </div>
        ) : ""
      }
    </div>
  );
};

export default Tab;
