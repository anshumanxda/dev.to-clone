import axios from "axios";

const URL = "https://dev.to/";

export const fetchRelevantApi = () => {
  return axios.get(`${URL}stories/feed/?page=1`);
};

export const fetchLatestApi = () => {
  return axios.get(`${URL}stories/feed/latest?page=1`);
};

export const fetchTopApi = (duration = "week") => {
  return axios.get(`${URL}stories/feed/${duration}?page=1`);
};

export const fetchIndividualArticle = async (user, slug) => {
  return await axios.get(`${URL}api/articles/${user}/${slug}`);
};

export const fetchUserInfo = (id) => {
  return axios.get(`${URL}api/users/${id}`);
};

export const fetchUserAllArticles = (username) => {
  return axios.get(`${URL}api/articles?username=${username}`);
};

export const fetchArticleReactions = (id) => {
  return axios.get(`${URL}reactions?article_id=${id}`);
};

export const search = (keyword, sort = " ", type = "Article") => {
  let _keyword = "";
  for (var i = 0; i < keyword.length; i++) {
    if (keyword[i] === " ") {
      _keyword += "+";
    } else {
      _keyword += keyword[i];
    }
  }
  return axios.get(
    `${URL}search/feed_content?per_page=60&page=0&class_name=${type}&search_fields=${_keyword}&sort_direction=${sort}`
  );
};
