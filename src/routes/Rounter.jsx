import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../pages/Loading";
const Details = lazy(() => import("../pages/Details"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Movies = lazy(() => import("../pages/Movies"));
const Home = lazy(() => import("../pages/Home"));
const Tvs = lazy(() => import("../pages/Tvs"));
const WatchList = lazy(() => import("../pages/WatchList"));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:category/:id" element={<Details />} />

        <Route path="/movie/:type" element={<Movies />} />

        <Route path="/tv/:type" element={<Tvs />} />

        <Route path="/watchlist" element={<WatchList />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
