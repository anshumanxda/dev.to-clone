import { useRouter } from "next/router";

import useIndividualArticle from "reactQuery/useIndividualArticle";

import Navbar from "components/Navbar/Navbar";
import InividualArticle from "../../components/IndividualArticle/IndividualArticle";

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
