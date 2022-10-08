import useTopPost from "reactQuery/useTopPost";

import AppHOC from "components/Home/AppHOC";
import TopCard from "components/Home/TopCard";
import Card from "components/Home/Card";

export default function Year() {
  const { data, isLoading } = useTopPost("year");

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
