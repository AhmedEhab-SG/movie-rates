import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ButtonStyled = (props) => {
  const btnsRef = useRef(null);
  const isInViewBtns = useInView(btnsRef, { once: true });

  return (
    <Box
      sx={{
        opacity: isInViewBtns ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        alignSelf: props.alignSelf,
      }}
    >
      <Button
        onClick={props.onClick}
        ref={btnsRef}
        variant={props.border ? "contained" : "outlined"}
        sx={{
          width: props.width || "auto",
          fontWeight: "500",
          fontSize: props.textSize || "1.3rem",
          paddingInline: props.paddingInline || "2rem",
          borderRadius: props.borderRadius || "5rem",
          color: props.color,
          borderColor: props.bColor,
          backgroundColor: props.bgColor,
          borderWidth: "3px",
          boxShadow: props.shadow,
          ...props.sx,
          "&:hover": {
            borderWidth: "3px",
            borderColor: props.bgbhColor,
            backgroundColor: props.bghColor,
            boxShadow: props.hShadow,
            color: props.colorHover,
          },
        }}
      >
        {props.text}
      </Button>
    </Box>
  );
};

export default ButtonStyled;
