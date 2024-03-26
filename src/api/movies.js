import axiosInstance from "./axiosInstance";

const apiTypes = {
  category: {
    movie: "movie",
    tv: "tv",
  },

  movie: {
    popular: "popular",
    top_rated: "top_rated",
    upcoming: "upcoming",
  },

  tv: {
    popular: "popular",
    top_rated: "top_rated",
    on_the_air: "on_the_air",
  },
};

const getAllList = (category, type, page) => {
  const url = `${apiTypes.category[category]}/${
    apiTypes.movie[type] || apiTypes.tv[type]
  }`;
  return axiosInstance.get(url, {
    params: {
      page,
    },
  });
};

const getVideosById = (type, id) => {
  const url = `${apiTypes.category[type]}/${id}/videos`;
  return axiosInstance.get(url);
};

const getDetailsById = (type, id) => {
  const url = `${apiTypes.category[type]}/${id}`;
  return axiosInstance.get(url);
};

const getCreditsById = (type, id) => {
  const url = `${apiTypes.category[type]}/${id}/credits`;
  return axiosInstance.get(url);
};

const getSimilar = (type, id) => {
  const url = `${apiTypes.category[type]}/${id}/similar`;
  return axiosInstance.get(url);
};

const search = (type, query) => {
  const url = `${apiTypes.category[type]}`;
  return axiosInstance.post(url, query);
};

export {
  apiTypes,
  getAllList,
  getVideosById,
  getDetailsById,
  getCreditsById,
  getSimilar,
  search,
};
