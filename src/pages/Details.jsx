import { Fragment, useEffect, useState } from "react";
import { getCreditsById, getDetailsById, getVideosById } from "../api/movies";
import { useParams } from "react-router-dom";
import HeroDetails from "../components/sections/detailsSections/HeroDetails";
import TrailerDetails from "../components/sections/detailsSections/trailerDetails";

const Details = () => {
  const [details, setDetails] = useState();
  const [credits, setCredits] = useState();
  const [videos, setVideos] = useState();
  const { category, id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await getDetailsById(category, id);
        const creditRes = await getCreditsById(category, id);
        const videoRes = await getVideosById(category, id);
        setCredits(creditRes.data);
        setDetails(res.data);
        setVideos(videoRes.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getDetails();
  }, [category, id]);

  return (
    <Fragment>
      {details && (
        <HeroDetails details={details} credits={credits} category={category} />
      )}
      {videos && <TrailerDetails videos={videos} />}
    </Fragment>
  );
};

export default Details;
