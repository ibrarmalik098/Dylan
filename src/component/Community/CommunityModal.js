import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CommunityButton from "../button/CommunityBtn";
import useTheme from "../../hooks/theme";
import { Grid, Stack, Typography } from "@mui/material";
import "./premium.css";
import { IoMdAdd } from "react-icons/io";
import PublicPrivateSelect from "../select/PublicPrivateSelect";
import { Upload_image_component } from "../uploadImage/uploadImage";
import Input from "../input/Input";
import Select_dropdown from "../select/Select";
import Btn from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  create_community_async,
  get_all_topics_async,
} from "../../services/communityService";
import axios from "axios";
import { asyncStatus } from "../../utils/async_status";
import { baseURL } from "../../config/apiHandle/apiHandle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

export default function CreateCommunityModal() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [communityData, setCommunityData] = useState({});
  const selectedImageHandle = async (e) => {
    const { id, files } = e.target;
    try {
      const formData = new FormData();
      formData.append("upload_file", files[0]);

      const response = await axios.post(`${baseURL}/upload-image`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle the response from the backend
      setSelectedImage(response?.data?.url);
      setCommunityData((prev) => ({
        ...prev,
        community_image_url: response?.data?.url,
      }));
      // console.log("Response from the backend:", response.data);
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
    }
  };
  const {
    create_community_status,
    create_community_data,
    create_community_error,
  } = useSelector((state) => state.community);
  const dispatch = useDispatch();
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setCommunityData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (open) {
      dispatch(get_all_topics_async());
    }
    if (create_community_status === asyncStatus.SUCCEEDED) {
      handleClose();
    }
  }, [, create_community_status, open]);
  // console.log("data", selectedImage);
  return (
    <div>
      <CommunityButton
        onClick={handleOpen}
        borderColor={theme.text_color}
        color={theme.text_color}
        sx={{
          borderColor: theme.text_color,
          textTransform: "capitalize",
        }}
        startIcon={<IoMdAdd size={22} color={theme.text_color} />}
        title="Create Community"
      />
      <Modal
        disableScrollLock
        open={open}
        className="scroll-remove"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
            height: { md: "70%", lg: "70%", sm: "80%", xs: "70%" },
            // height: { md: "70%", lg: "70%", sm: "50%", xs: "auto" },
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              sx={{
                fontSize: { md: 30, lg: 30, sm: 30, xs: 15 },
                color: "black",
                fontWeight: "bold",
              }}
            >
              {" "}
              Create Community
            </Stack>
            <Stack>
              <PublicPrivateSelect handleChange={inputHandle} />
            </Stack>
          </Stack>
          <Stack
            sx={{
              fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
              color: "#646464",
            }}
          >
            Share your interests, curate content, host discussions, and more.
          </Stack>
          <Stack>
            <Grid container alignItems={"center"}>
              <Grid md={1} lg={1} sm={12} xs={12}></Grid>
              <Grid md={3} lg={3} sm={12} xs={12}>
                <Upload_image_component
                  selectedImage={selectedImage}
                  selectedImageHandle={selectedImageHandle}
                />
              </Grid>
              <Grid md={8} lg={8} sm={12} xs={12} mt={3}>
                <Input
                  name="title"
                  onChange={inputHandle}
                  style={{
                    padding: "10px 10px",
                    borderBottomLeftRadius: "7px",
                    borderTopLeftRadius: "7px",
                    backgroundColor: "#EDEDED",
                    border: "none",
                    outline: "none",
                  }}
                  label="Name*"
                  placeholder="John Doe’s Community"
                />
              </Grid>
              {/* ----------- */}
              <Grid md={4} lg={4} sm={12} xs={12}></Grid>
              <Grid md={8} lg={8} sm={12} xs={12}>
                <Input
                  name="description"
                  onChange={inputHandle}
                  style={{
                    padding: "10px 10px",
                    borderBottomLeftRadius: "7px",
                    borderTopLeftRadius: "7px",
                    backgroundColor: "#EDEDED",
                    border: "none",
                    outline: "none",
                  }}
                  label="Brief Description"
                />
              </Grid>
              {/* ----------- */}
              <Grid md={4} lg={4} sm={12} xs={12}></Grid>
              <Grid md={8} lg={8} sm={12} xs={12} mt={3}>
                <Select_dropdown
                  handleClick={inputHandle}
                  style={{
                    padding: "10px 10px",
                    borderBottomLeftRadius: "7px",
                    borderTopLeftRadius: "7px",
                    backgroundColor: "#EDEDED",
                    border: "none",
                    outline: "none",
                  }}
                  label="Topic"
                />
                <Typography style={{ color: "red", fontSize: 14 }}>
                  {create_community_error}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid md={12} lg={12} sm={12} xs={12} mt={7}>
                <Btn
                  onClick={() =>
                    dispatch(create_community_async(communityData))
                  }
                  loading={create_community_status === asyncStatus.LOADING}
                  fullWidth={true}
                  sx={{
                    backgroundColor: "#FE9316",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: 2,

                    "&:hover": {
                      backgroundColor: "#FE9316",
                      color: "white",
                    },
                  }}
                  label="Create"
                />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
