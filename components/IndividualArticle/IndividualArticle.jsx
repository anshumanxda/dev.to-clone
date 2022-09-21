import Main from "components/IndividualArticle/Main";
import Reactions from "components/IndividualArticle/Reactions";
import UserInfo from "components/IndividualArticle/UserInfo";

const IndividualArticle = ({ data, isLoading }) => {

  if (isLoading) {
    return "Loading..";
  }
  return (
    <div className="flex gap-5 mt-[75px] max-w-[1280px] mx-auto relative">
      <div className="flex gap-5">
        <div>
          <Reactions data={data?.data} />
        </div>
        <Main data={data?.data} />
      </div>
      <div className="max-w-[365px] min-w-[365px]">
        <UserInfo id={data?.data?.user?.user_id} />
        {/* <MoreArticle /> */}
      </div>
    </div>
  );
};

export default IndividualArticle;
