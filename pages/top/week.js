import useTopPost from "reactQuery/useTopPost";

import AppHOC from "components/Home/AppHOC";
import TopCard from "components/Home/TopCard";
import Card from "components/Home/Card";

export default function Week() {
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
