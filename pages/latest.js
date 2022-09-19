import AppHOC from "components/AppHOC";
import TopCard from "components/TopCard";
import Card from "components/Card";

import useLatestPost from "reactQuery/useLatestPost";

export default function Latest() {
  const { data, isLoading } = useLatestPost();

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
