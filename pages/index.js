import { useEffect } from "react";

import useRelevantPost from "reactQuery/useRelevantPost";

import AppHOC from "components/Home/AppHOC";
import TopCard from "components/Home/TopCard";
import Card from "components/Home/Card";

export default function Home() {
  const { data, isLoading } = useRelevantPost();

  useEffect(() => {
    window.open("https://google.com", "_system");
  }, []);

  return (
    <AppHOC>
      {!isLoading ? (
        <>
          <p
            onClick={() => {
              window.open("https://google.com", "_system");
            }}
          >
            broo
          </p>
          <TopCard data={data?.data[0]} />
          {data?.data?.slice(1)?.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </>
      ) : (
        "Loading..."
      )}
    </AppHOC>
  );
}
