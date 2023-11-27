import React from "react";
import { Button, Stack } from "@mui/material";
import "./button.css";
import useTheme from "../../hooks/theme";

function CommunityButton(props) {
  const {
    onClick,
    className,
    title,
    startIcon,
    sx,
    icons,
    color,
    borderColor,
  } = props;
  const theme = useTheme();

  return (
    <Stack
      onClick={onClick}
      sx={{
        border: `1px solid ${borderColor}`,
        p: 1,
        borderRadius: "5px",
        cursor: "pointer",
      }}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <Stack>{startIcon}</Stack>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          color: color,
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        {title}
      </button>
    </Stack>
  );
}

export default CommunityButton;
