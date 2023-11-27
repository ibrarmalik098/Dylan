import React from "react";
import "./createpost.css";
import { Stack } from "@mui/material";
import useTheme from "../../hooks/theme";
import CommunityButton from "../button/CommunityBtn";
import { AiFillEye } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import CreateCommunityModal from "../Community/CommunityModal";

const CreateCommunityCard = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.card_bg_color,
        height: { md: 100, lg: 100, sm: 100, lg: 10 },
        padding: "25px",
        textAlign: "start",
      }}
    >
      <Stack sx={{ fontSize: 22, color: theme.text_color, fontWeight: "bold" }}>
        {" "}
        Welcome to Community
      </Stack>
      <Stack sx={{ fontSize: 13, color: theme.text_color }}>
        Follow Community to explore your interests on Appquaintance.
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={2} mt={2}>
        <Stack>
          <CreateCommunityModal />
        </Stack>
        {/* <Stack>
          <CommunityButton
            borderColor={theme.text_color}
            color={theme.text_color}
            sx={{
              borderColor: theme.text_color,
              textTransform: "capitalize",
            }}
            startIcon={<AiFillEye size={22} color={theme.text_color} />}
            title="Discover Community"
          />
        </Stack> */}
      </Stack>
    </div>
  );
};

export default CreateCommunityCard;
