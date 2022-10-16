import Main from "components/IndividualArticle/Main";
import Reactions from "components/IndividualArticle/Reactions";
import UserInfo from "components/IndividualArticle/UserInfo";

const IndividualArticle = ({ data, isLoading }) => {

  if (isLoading) {
    return "Loading..";
  }
  return (
    <div className="flex gap-5 mt-[75px] max-w-[1280px] mx-auto relative">
      <div className="flex flex-col lg:flex-row  gap-5">
        <div className="hidden lg:block">
          <Reactions data={data?.data} />
        </div>
        <Main data={data?.data} />
        <div className="lg:max-w-[365px] lg:min-w-[365px] mx-2 lg:mx-0">
          <UserInfo id={data?.data?.user?.user_id} />
          {/* <MoreArticle /> */}
        </div>
      </div>

    </div>
  );
};

export default IndividualArticle;
