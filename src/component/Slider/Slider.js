

import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid, Stack } from '@mui/material';
import { MdLeaderboard, MdPlumbing } from 'react-icons/md';
import sildeImage from '../../assets/carousel.png'
import { main_color, vendor_color } from '../../utils/color';
import './slider.css'

const slider_data = (
  <Stack mt={2}>
    <Grid container p={2} sx={{ backgroundColor: main_color, borderRadius: 4 }} >
      <Grid item md={8} lg={8} sm={12} xs={12}>
        <Stack>
          <Stack sx={{ fontSize: { md: 25, lg: 25, sm: 20, xs: 17 }, color: 'white', fontWeight: 1000, textAlign: 'start' }}>Plumbing Maintainance</Stack>
          <Stack mt={1} mb={1} sx={{ fontSize: { md: 12, lg: 12, sm: 10, xs: 8, color: 'white', textAlign: 'start' } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus,</Stack>
          <Stack flexDirection={'row'} alignItems={'center'} gap={0.5} mt={0.9}>
            <Stack ><MdPlumbing color={vendor_color} /></Stack>
            <Stack sx={{ color: "white", fontSize: { md: 15, lg: 12, sm: 12, xs: 10 }, fontWeight: 'bold' }}>Plumbing</Stack>
            <Stack ml={1}><MdPlumbing color={vendor_color} /></Stack>
            <Stack sx={{ color: "white", fontSize: { md: 15, lg: 12, sm: 12, xs: 10 }, fontWeight: 'bold' }}>Plumbing</Stack>
            <Stack ml={1}><MdPlumbing color={vendor_color} /></Stack>
            <Stack sx={{ color: "white", fontSize: { md: 15, lg: 12, sm: 12, xs: 10 }, fontWeight: 'bold' }}>Plumbing</Stack>
          </Stack>
          <Stack flexDirection={'row'} alignItems={'center'} gap={0.5} mt={0.9} mb={{md:1,sm:1}}>
            <Stack><MdLeaderboard color={'#FB8500'} /></Stack>
            <Stack sx={{ color: "white", fontSize: { md: 10, lg: 10, sm: 12, xs: 7 }, fontWeight: 'bold' }}>3034 Incoming Leads</Stack>
            <Stack ml={2}><MdLeaderboard color={'#FB8500'} /></Stack>
            <Stack sx={{ color: "white", fontSize: { md: 10, lg: 10, sm: 12, xs: 7 }, fontWeight: 'bold' }}>3034 Incoming Leads</Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={12} lg={4} sm={12} xs={12}>
        <img className='img_control' src={sildeImage} alt="carousel image" />
      </Grid>
    </Grid>
  </Stack>
)

const Slider = () => {
  return (
    <Carousel
      dynamicHeight={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      stopOnHover={true}
      autoPlay={true}
      useKeyboardArrows={true}
      swipeable={true}
      showStatus={false}
    // infiniteLoop={true}
    >
      <div>

        {slider_data}
      </div>
      <div>

        {slider_data}
      </div>

    </Carousel>
  );
};
export default Slider

// ReactDOM.render(<Slider />, document.querySelector('.demo-carousel'));
