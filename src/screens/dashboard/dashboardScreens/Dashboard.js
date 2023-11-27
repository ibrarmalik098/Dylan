import React from 'react'
import './main.css'
import { Container, Divider, Grid, Stack } from '@mui/material';
import ProfileCard from '../../../component/CreatePostCard/ProfileCard';
import ChatScreen from '../../../component/ChatApp/ChatScreen';
import Recent_Chat from '../../../component/ChatApp/Recent_Chat';
import { useSelector } from 'react-redux';





const Dashboard_Screen = () => {
    const selectedLeadIndex = useSelector((state) => state.authSlice);
    const select_index = selectedLeadIndex.selectedLeadIndex
    console.log(select_index);
    return (
        <div
            className="screen_position_container"
        >
            <Container maxWidth='xl'>

                <Grid container p={1} >
                    {
                        !select_index ? <Grid item md={12} lg={12} sm={12} xs={12} mt={2}>
                            <Stack p={2}>
                                <ProfileCard />

                            </Stack>
                        </Grid> : <>
                            <Grid item md={8} lg={8} sm={12} xs={12} mt={2} >
                                <Stack p={2}>
                                    <ChatScreen />
                                </Stack>
                            </Grid>
                            <Grid item md={4} lg={4} sm={12} xs={12} mt={2} >
                                <Stack p={2} mt={{md:0,sm:0,xs:5,}}>
                                    <Recent_Chat />
                                </Stack>
                            </Grid>
                        </>
                    }



                </Grid>
            </Container>
        </div>
    )
}

export default Dashboard_Screen