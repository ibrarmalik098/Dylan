import React from 'react'
import { useSelector } from 'react-redux';
import ChatScreen from '../../../../component/ChatApp/ChatScreen';
import Recent_Chat from '../../../../component/ChatApp/Recent_Chat';
import '../../dashboardScreens/main.css'
import { Avatar, Container, Grid, Stack } from '@mui/material';
import back_image from '../../../../assets/back_profile.png'
import User_Details from '../../../../component/ChatApp/User_Details';
const Admin_body = () => {



    return (
        <div
            className="screen_position_container"
        >
            <Container maxWidth='xl'>

                <Grid container p={1} >


                    <Grid item md={12} lg={12} sm={12} xs={12} mt={2} >
                        <Stack sx={{ position: 'relative' }}>
                            <img src={back_image} style={{ width: '100%', height: 100 }} />
                            <Stack flexDirection={'row'} gap={2} alignItems={'center'} sx={{ position: 'absolute', top: { lg: 10, sm: 10, xs: 10, md: 10 }, left: 20 }}>
                                <Avatar

                                    alt="Remy Sharp"
                                    sx={{ width: { md: 80, lg: 80, sm: 80, xs: 70 }, height: { md: 80, lg: 80, sm: 80, xs: 70 } }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZOOwgZCtafWlGHkSlYjG278BQU7PEAQVvI1011y9&s"
                                />
                                <Stack color='white' fontSize={30} fontWeight={1000}>Sara</Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={8} lg={8} sm={12} xs={12} mt={2} >
                        <Stack px={2}>
                            <ChatScreen />
                        </Stack>
                    </Grid>
                    <Grid item md={4} lg={4} sm={12} xs={12} mt={2} >
                        <Stack px={2} mt={{ md: 0, sm: 5, xs: 8, }}>
                            <User_Details />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Admin_body