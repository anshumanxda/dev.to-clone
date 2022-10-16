import useRelevantPost from "reactQuery/useRelevantPost";

import AppHOC from "components/Home/AppHOC";
import TopCard from "components/Home/TopCard";
import Card from "components/Home/Card";

export default function Home() {
  const { data, isLoading } = useRelevantPost();
  return (
    <AppHOC>
      {!isLoading ? (
        <div>
          <TopCard data={data?.data[0]} />
          {data?.data?.slice(1)?.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      ) : (
        "Loading..."
      )}
    </AppHOC>
  );
}
