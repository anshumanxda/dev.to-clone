import { useRouter } from "next/router";
import Navbar from "components/Navbar";
import InividualArticle from "../../components/IndividualArticle/IndividualArticle";

import useIndividualArticle from "reactQuery/useIndividualArticle";

import style from "../../styles/Article.module.css";

const IndividualPost = () => {
  const router = useRouter();
  const { user, slug } = router.query;
  const { data, isLoading } = useIndividualArticle(user, slug);
  return (
    <div className={style.container}>
      <Navbar />
      <InividualArticle data={data} isLoading={isLoading} />
    </div>
  );
};

export default IndividualPost;
