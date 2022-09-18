import Navbar from "components/Navbar";
import InividualArticle from "../../components/IndividualArticle/IndividualArticle";

import style from "../../styles/Article.module.css";

const slug = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <InividualArticle />
    </div>
  );
};

export default slug;
