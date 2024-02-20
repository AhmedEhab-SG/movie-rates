import { Grid, Typography } from "@mui/material";
import MovieCard from "../../shared/MovieCard";
import { Fragment, useEffect, useState } from "react";
import { getAllList } from "../../../api/movies";
import apiConfig from "../../../api/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonStyled from "../../shared/ButtonStyled";

const ListSliders = (props) => {
  const [listItems, setListItems] = useState();

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await getAllList(props.category, props.type, 1);
        setListItems(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, [props.category, props.type]);

  return (
    <Grid sx={{ display: "flex", mb: 10, flexDirection: "column" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "600", marginInline: "3%", mb: 5 }}
      >
        {props.title}
      </Typography>
      {listItems && (
        <Fragment>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            style={{ marginInline: "3%" }}
          >
            {listItems.map((card) => {
              return (
                <SwiperSlide style={{ width: "auto" }} key={card.id}>
                  <MovieCard
                    id={card.id}
                    type={props.type}
                    category={props.category}
                    img={apiConfig.w500Image(card.poster_path)}
                    title={card.title || card.original_name}
                    overview={card.overview}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <ButtonStyled
            width={props.width}
            textSize={props.textSize}
            onClick={props.onClick}
            text={props.text}
            alignSelf={{ xs: "center", md: "flex-end" }}
            color="#fff"
            bColor="red"
            bgColor="red"
            bghColor="#fff"
            bgbhColor="#fff"
            shadow="0px 0px 7px 8px rgba(255, 0, 0, 0.3019607843)"
            hShadow="0px 0px 20px 18px rgba(255, 0, 0, 0.3019607843)"
            colorHover="red"
            sx={{ mt: "1rem", marginInline: "2rem", alginSelf: "flex-end" }}
          />
        </Fragment>
      )}
    </Grid>
  );
};

export default ListSliders;
