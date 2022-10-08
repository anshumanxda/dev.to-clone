import AppHOC from "components/Home/AppHOC";
import TopCard from "components/Home/TopCard";
import Card from "components/Home/Card";

import useTopPost from "reactQuery/useTopPost";

export default function Month() {
  const { data, isLoading } = useTopPost("month");

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
