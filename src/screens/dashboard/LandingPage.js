import Footer from '../../component/footer/Footer'
import Landing_second_section from '../../component/grid/landing_second_section'
import LandingPageHeader from '../../component/header/LandingPageHeader'
import HeroSection from '../../hero/HeroSection'
import { main_color } from '../../utils/color'
import './main.css'
import { Grid, Stack } from '@mui/material'
import image1 from '../../assets/Frame 59.png'
import image2 from '../../assets/Frame 60.png'
import image3 from '../../assets/Frame 61.png'
const LandingPage = () => {
    return (
        <Stack>
            <Stack bgcolor={main_color} sx={{ height: '100%', }}>
                <Stack >
                    <LandingPageHeader />
                </Stack>
                <Stack sx={{ position: 'relative' }}>

                    <Stack >
                        <HeroSection />
                    </Stack>

                    <Stack zIndex={2}>
                        <Grid container >
                            <Grid item md={4} sm={4} lg={4} xs={4}>
                                <img width={'100%'} src={image1} />
                            </Grid>
                            <Grid item md={4} sm={4} lg={4} xs={4}>
                                <img width={'100%'} src={image2} />
                            </Grid>
                            <Grid item md={4} sm={4} lg={4} xs={4}>
                                <img width={'100%'} src={image3} />
                            </Grid>
                        </Grid>
                    </Stack>

                </Stack>
            </Stack>
            <Stack sx={{ mt: { md: 15, lg: 15, sm: 12, xs: 4 } }}>
                <Landing_second_section />
            </Stack>
            <Stack sx={{ backgroundColor: main_color }}>
                <Footer />
            </Stack>

        </Stack>
    )
}

export default LandingPage