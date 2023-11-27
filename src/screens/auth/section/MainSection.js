import React, { useState } from 'react'
import '../auth.css'
import { Container, Stack } from '@mui/material'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection '
import { useSelector } from 'react-redux'

const MainSection = () => {

    const { selectedIndexValue } = useSelector((state) => state.authSlice)

    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(false)


    const onFirstClick = () => {
        setfirst(false)
        setsecond(true)
    }
    const onSecondClick = () => {
        setsecond(false)

        console.log(second);
    }

    return (
        <Stack
            className="main_container"
            height={'120vh'}
        >
            <Container maxWidth={"md"} sx={{ p: { md: 5, lg: 5, sm: 3, xs: 3 } }}>
                <Stack
                    sx={{
                        borderRadius: "20px",
                        height: '100vh'
                    }}
                    className="blur-container"
                >
                    {/* sm flex-direction: column;
    left: -99px;
    top: 214px;
    font-size: 100px; */}
                    {/* xs left: -78px;
    top: 207px;
    font-size: 82px; */}

                    {/* md lg left: -130,
                    top: 214 */}
                    {/* ============================================= */}

                    {/*  customer */}

                    {/*  lg left: -211px;
    top: 214px; */}

                    {/* md left: -186px;
    top: 187px;
    font-size: 117px; */}



                    {/* sm left: -159px;
    top: 187px;
    font-size: 100px; */}



                    {/* xs left: -126px;
    top: 187px; 
    font-size: 80px; */}
                    {/*  customer */}

                    <Stack className="set_role_class" sx={{
                        left: selectedIndexValue === "Vendor" ? { lg: -130, md: -130, sm: -99, xs: -82 } : selectedIndexValue === "Customer" ? { lg: -211, md: -186, sm: -159, xs: -126 } : null,
                        top: selectedIndexValue === "Vendor" ? { lg: 214, md: 214, sm: 214, xs: 207 } : selectedIndexValue === "Customer" ? { lg: 214, md: 187, sm: 187, xs: 187 } : null,
                        fontSize: selectedIndexValue === "Vendor" ? { lg: '133px', md: '133px', sm: '100px', xs: '82px' } : selectedIndexValue === "Customer" ? { lg: '133px', md: '117px', sm: '100px', xs: '80px' } : null
                        // backgroundColor:  selectedIndexValue === "Vendor" ? "green" :'red'

                    }} >{selectedIndexValue}</Stack>
                    <Stack p={4} textAlign={'center'}>
                        {
                            first ? <FirstSection onFirstClick={onFirstClick} /> : second ? <SecondSection onSecondClick={onSecondClick} /> : second === false ? <ThirdSection /> : null
                        }
                    </Stack>

                </Stack>
            </Container>
        </Stack>
    )
}

export default MainSection