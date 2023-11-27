import { Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './hero.css'
import { useDispatch, useSelector } from 'react-redux'
import { setIndexValue } from '../store/slice/AuthSlice'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { selectedIndexValue } = useSelector((state) => state.authSlice)



    const btn_data = [
        {
            name: 'Vendor',
            lavel: 1,
            value: 'Vendor'
        },
        {
            name: 'Customer',
            lavel: 2,
            value: 'Customer'
        },
    ]

    const Popular_data = [
        {
            name: 'Plumber',

        },
        {
            name: 'Gardener',

        },
        {
            name: 'Carpenter',

        },
    ]
    const images = [
        "https://res.cloudinary.com/dcixxwgst/image/upload/v1700755075/wepik-export-20231116144050K5kt_1_1_xgyyyn.png",
        "https://res.cloudinary.com/dcixxwgst/image/upload/v1700755075/wepik-export-20231116144050K5kt_1_1_xgyyyn.png",
        "https://res.cloudinary.com/dcixxwgst/image/upload/v1700755075/wepik-export-20231116144050K5kt_1_1_xgyyyn.png",
        // Add more image URLs as needed
    ];

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [setIndex, setSetIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {

        if (setIndex === null) {
            setSetIndex(0);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change the duration as needed (in milliseconds)

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);
    

    const selectBtnHandle = (e, i) => {
        const { value } = e
        setSetIndex(i);
        dispatch(setIndexValue(value));
    };

    const NavigateHandle = () => {
        navigate('/mainsection')
    }

    // console.log("selectedIndexValue", selectedIndexValue);

    

   

    const heroStyle = {
        position: "absolute",
        top: 0,
        right: 0,
        // inset: 0,
        backgroundSize: "cover",
        backgroundPosition: "top !important",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        transitionDuration: "0.4s",
        background: innerWidth < 900 ? 'none' : `url(${images[currentIndex]}) top/cover no-repeat`,
        height: '100vh',
        width: '100%'

    };

    return (

        <Stack sx={{ height: { md: "100vh", lg: '100vh', sm: '100vh', xs: '80vh' } }} >
            <Grid container zIndex={2} >
                <Grid item md={8} sm={12} lg={8} xs={12}>
                    <Stack p={4} mt={2}>
                        <Stack className='heading_landing_page'>
                            Find the perfect <br />
                            professional for you
                        </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={3}>
                            <Stack className='Vender_Customer' >Are You Vendor Or Customer?</Stack>
                            <Stack className='toggle_btn_container' flexDirection={'row'} alignItems={'center'}>
                                {
                                    btn_data.map((e, i) => (
                                        <Stack
                                            key={i}
                                            onClick={() => selectBtnHandle(e, i)}
                                            sx={{
                                                background: i === setIndex ? "#B22234" : 'transparent',
                                                borderTopRightRadius: setIndex === 1 ? '17px' : null,
                                                borderTopLeftRadius: setIndex === 0 ? '17px' : null,
                                            }}
                                            className='toggle_btn'
                                        >
                                            {e.name}
                                        </Stack>
                                    ))
                                }
                            </Stack>
                        </Stack>
                        <Stack className='hero_input'>
                            <input type='text' placeholder='What Are Your Queries?' className='hero_input_input' />
                            <button className='hero_button' onClick={NavigateHandle}>Next</button>
                        </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'} gap={2} mt={0.4}>
                            <Stack className='hero_popular_para'>
                                Popular:
                            </Stack>
                            <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                                {Popular_data.map((e, i) => {
                                    return <Stack className='hero_popular_button'>
                                        {e.name}
                                    </Stack>
                                })}
                            </Stack>

                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Stack style={{
                background: innerWidth < 900 ? 'none' : `url(${images[currentIndex]}) top/cover no-repeat`,
                position: 'absolute',
                top: '0px',
                right: "10px",
                height: '100%',
                maxHeight: '100vh',
                width: '100%',
                maxWidth: '30%',
                zIndex: 1

            }}>

            </Stack>

        </Stack>

    )
}

export default HeroSection