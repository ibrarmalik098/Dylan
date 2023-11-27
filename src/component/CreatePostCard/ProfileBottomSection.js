import { Grid, Stack } from '@mui/material'
import React from 'react'
import { GrCompliance } from "react-icons/gr";
import Slider from '../Slider/Slider';
import ScheduledProjectCard from './ScheduledProjectCard';
import { MdLeaderboard } from 'react-icons/md';

const ProfileBottomSection = () => {
    return (
        <div>
            <Grid container >
                <Grid item md={12} lg={8} sm={12} xs={12} sx={{ borderRight: { lg: 1, md: 0, sm: 0, xs: 0 }, }} >
                    <Stack p={1}>
                        <Stack sx={{ color: '#000000', fontSize: { md: 12, lg: 12, sm: 10, xs: 8 }, }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et </Stack>
                        <Stack sx={{ color: '#000000', fontSize: { md: 12, lg: 12, sm: 10, xs: 8 }, }}>lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus, </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'} gap={0.5} mt={0.9}>
                            <Stack><MdLeaderboard color='#FB8500' /></Stack>
                            <Stack sx={{ color: '#000000', fontSize: { md: 10, lg: 10, sm: 9, xs: 7 }, fontWeight: 'bold' }}>3034 Completions</Stack>
                            <Stack><MdLeaderboard color='#FB8500' /></Stack>
                            <Stack sx={{ color: '#000000', fontSize: { md: 10, lg: 10, sm: 9, xs: 7 }, fontWeight: 'bold' }}>3034 Completions</Stack>
                            <Stack><MdLeaderboard color='#FB8500' /></Stack>
                            <Stack sx={{ color: '#000000', fontSize: { md: 10, lg: 10, sm: 9, xs: 7 }, fontWeight: 'bold' }}>3034 Completions</Stack>
                        </Stack>

                        <Stack mt={1}>
                            <Stack sx={{ color: '#000000', fontSize: { md: 25, lg: 25, sm: 20, xs: 17 }, fontWeight: 1000, mt: 1 }} >Active Gigs</Stack>
                            <Slider />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item md={12} lg={4} sm={12} xs={12} >
                    <Stack p={1}>
                        <Stack sx={{ color: '#000000', fontSize: { md: 16, lg: 16, sm: 14, xs: 11 }, fontWeight: 1000 }}>
                            SCHEDULED PROJECTS

                        </Stack>
                        <Stack className='side_scroll_handle_for_scheduled' mt={2}>
                            {new Array(5).fill(" ").map((e) => (
                                <Stack mt={1} >
                                    <ScheduledProjectCard />
                                </Stack>
                            ))}

                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileBottomSection