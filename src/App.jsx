import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Theme/Layout";
import Router from "./routes/Rounter";
import "swiper/css";
import "swiper/css/bundle";
import { initDB, useIndexedDB } from "react-indexed-db-hook";
import { DBConfig } from "./db/DBConfig";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWatchList } from "./store/slice/watchList";

initDB(DBConfig);

function App() {
  const dispatch = useDispatch();
  const { getAll } = useIndexedDB("movies");

  useEffect(() => {
    const fetchFromDb = async () => {
      const allWatchList = await getAll();
      dispatch(setWatchList(allWatchList));
    };
    fetchFromDb();
  }, [getAll, dispatch]);

  return (
    <Layout>
      <Header />
      <Router />
      <Footer />
    </Layout>
  );
}

export default App;
