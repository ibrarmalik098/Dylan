import React from "react";
import "./createpost.css";
import { Avatar, Divider, Stack } from "@mui/material";
import useTheme from "../../hooks/theme";
import back_image from '../../assets/back_profile.png'
import { vendor_color } from "../../utils/color";
import ProfileBottomSection from "./ProfileBottomSection";


const ProfileCard = () => {
  const theme = useTheme();
  return (
    <>
      <Stack  >
        <Stack sx={{ position: 'relative' }}>
          <img src={back_image} style={{ width: '100%', height: 100 }} />
          <Stack sx={{ flexDirection: { md: 'row', lg: 'row', sm: 'column', xs: 'row' }, alignItems: { md: 'center', lg: 'center', sm: 'end', xs: 'center' } }} justifyContent={'flex-end'} textAlign={'end'} gap={1} mt={.4}>
            <Stack sx={{ fontSize: { md: 9, lg: 13, sm: 8, xs: 5 }, fontWeight: 'bold', }}>Profile Type: Vendor</Stack>
            <Stack sx={{ fontSize: { md: 9, lg: 13, sm: 8, xs: 5 }, fontWeight: 'bold', }}>Profession: Plumber</Stack>
            <Stack sx={{ fontSize: { md: 9, lg: 13, sm: 8, xs: 5 }, fontWeight: 'bold', }}>Completion rate: 98%</Stack>
          </Stack>
          <Stack sx={{ position: 'absolute', bottom: { lg: -35, sm: 0, xs: -18, md: -20 }, left: 20 }}>

            <Avatar

              alt="Remy Sharp"
              sx={{ width: { md: 100, lg: 100, sm: 100, xs: 70 }, height: { md: 100, lg: 100, sm: 100, xs: 70 } }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZOOwgZCtafWlGHkSlYjG278BQU7PEAQVvI1011y9&s"
            />
          </Stack>
        </Stack>
        <Stack sx={{ mt: { lg: 4, md: 4, sm: 2, xs: 2 } }} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack sx={{ fontSize: { lg: 30, md: 30, sm: 17, xs: 17 }, fontWeight: 800, ml:{md:4,lg:4,sm:4,xs:5}  }}>Sara</Stack>
          <Stack flexDirection={'row'} alignItems={'center'} >
            <Stack sx={{ fontSize: { lg: 30, md: 30, sm: 17, xs: 17 }, fontWeight: 800 }}>

              Over-all Rating:
            </Stack>
            <Stack
              sx={{ fontSize: { lg: 50, md: 50, sm: 20, xs: 20 }, fontWeight: 1000, mt: -3 }}
            >4.5</Stack>
          </Stack>
        </Stack>
        <Divider sx={{ borderWidth: 1, borderColor: vendor_color, mt: 0.5 }} />
        {/* Bottom Profile Section */}
        <ProfileBottomSection />
        {/* Bottom Profile Section */}
      </Stack>

    </>

  );
};

export default ProfileCard;
