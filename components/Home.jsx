import AppHOC from "./AppHOC";
import TopCard from "./TopCard";
import Card from "./Card";

import useRelevantPost from "../reactQuery/useRelevantPost";

export default function Home () {
  const { data, isLoading } = useRelevantPost();

  return (
    <AppHOC>
      {!isLoading ? (
        <>
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