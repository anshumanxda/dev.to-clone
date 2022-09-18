import AppHOC from "components/AppHOC";
import TopCard from "components/TopCard";
import Card from "components/Card";

import useTopPost from "reactQuery/useTopPost";

export default function Week () {
  const { data, isLoading } = useTopPost("week");

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
