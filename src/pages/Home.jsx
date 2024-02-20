import { Fragment } from "react";
import HeroSlide from "../components/sections/homeSections/HeroSlide";
import ListSliders from "../components/sections/homeSections/ListSliders";
import { apiTypes } from "../api/movies";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <HeroSlide />
      <ListSliders
        title="Tranding Movies"
        category={apiTypes.category.movie}
        type={apiTypes.movie.popular}
        text="Explore More"
        textSize="0.9rem"
        width="11rem"
        onClick={() =>
          navigate(`/${apiTypes.category.movie}/${apiTypes.movie.popular}`)
        }
      />
      <ListSliders
        title="Top Rated Movies"
        category={apiTypes.category.movie}
        type={apiTypes.movie.top_rated}
        text="Explore More"
        textSize="0.9rem"
        width="11rem"
        onClick={() =>
          navigate(`/${apiTypes.category.movie}/${apiTypes.movie.top_rated}`)
        }
      />
      <ListSliders
        title="UpComing Movies"
        category={apiTypes.category.movie}
        type={apiTypes.movie.upcoming}
        text="Explore More"
        textSize="0.9rem"
        width="11rem"
        onClick={() =>
          navigate(`/${apiTypes.category.movie}/${apiTypes.movie.upcoming}`)
        }
      />
      <ListSliders
        title="Trending TV"
        category={apiTypes.category.tv}
        type={apiTypes.tv.popular}
        text="Explore More"
        textSize="0.9rem"
        width="11rem"
        onClick={() =>
          navigate(`/${apiTypes.category.tv}/${apiTypes.tv.popular}`)
        }
      />
      <ListSliders
        title="Top Rated TV"
        category={apiTypes.category.tv}
        type={apiTypes.tv.top_rated}
        text="Explore More"
        textSize="0.9rem"
        width="11rem"
        onClick={() =>
          navigate(`/${apiTypes.category.tv}/${apiTypes.tv.top_rated}`)
        }
      />
      <ListSliders
        title="On Air TV"
        category={apiTypes.category.tv}
        type={apiTypes.tv.on_the_air}
        text="Explore More"
        textSize="0.9rem"
        width="11rem"
        onClick={() =>
          navigate(`/${apiTypes.category.tv}/${apiTypes.tv.on_the_air}`)
        }
      />
    </Fragment>
  );
};

export default Home;
