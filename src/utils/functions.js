const isFavored = (watchList, id) => watchList.some((item) => item.id === id);

export { isFavored };
