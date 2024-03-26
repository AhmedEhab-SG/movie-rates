export const DBConfig = {
  name: "watchListDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "movies",
      storeConfig: { keyPath: "watchList", autoIncrement: true },
      storeSchema: [
        { name: "id", keypath: "id", options: { unique: true } },
        { name: "type", keypath: "type", options: { unique: false } },
        { name: "category", keypath: "category", options: { unique: false } },
      ],
    },
  ],
};
