import { Avatar, Divider, Stack } from '@mui/material'
import React from 'react'
import './index.css'
import { main_color } from '../../utils/color'
import problem_image from '../../assets/Frame 75.png'

const User_Details = () => {
    return (
        <Stack  className='user_details'>
            <Stack sx={{ fontSize: 23, color: main_color, p: 2, fontFamily: 'sans-serif' }}>
                Customer Details
            </Stack>
            <Divider sx={{ border: '1px solid #B22234' }} />
            <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} mt={2} gap={2}>
                <Stack>
                    <Avatar sx={{ width: 60, height: 60 }} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2BdsfTZeFHeksuXsnuaIrvzXx55kIpHLCQsW8TYi&s'} />
                </Stack>
                <Stack >
                    <Stack sx={{ fontSize: 17, fontWeight: 1000 }}>Smith</Stack>
                    <Stack sx={{ fontSize: 13, fontWeight: 1000 }}>Email:Someone@gmail.com</Stack>
                    <Stack sx={{ fontSize: 13, fontWeight: 1000 }}>Phone: 111-222-333</Stack>
                </Stack>
            </Stack>
            <Stack  px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} mt={2}>
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }}>Problem:</Stack>
                <Stack> Plumbing Maintainance</Stack>
            </Stack>
            <Stack  px={2} mt={1}>
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }}>Images:</Stack>
                <Stack flexDirection={'row'}>
                    <img src={problem_image} />
                    <img src={problem_image} />

                </Stack>
            </Stack>
            <Stack  px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1}>
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }}>Budget: </Stack>
                <Stack>25$</Stack>
            </Stack>
            <Stack   px={2} mt={1} flexDirection={'row'} alignItems={'center'}  justifyContent={'space-between'}>
                <Stack flexDirection={'row'} alignItems={'center'} gap={1}>

                    <Stack sx={{ fontSize: 17, fontWeight: 1000 }}>Vendor Offer:   </Stack>
                    <Stack>30$</Stack>
                </Stack>
                <Stack sx={{ textDecoration:'underline' ,fontSize:13,cursor:'pointer' }}>see vendor profile</Stack>
            </Stack>
            <Stack   px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1}>
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }}>Estimated Time: </Stack>
                <Stack> 2.5hrs</Stack>
            </Stack>

            <Stack sx={{
                padding:1,
                background:'#B22234',color:'white',
                textAlign:'center',
                textDecoration:'underline',
                mt:3,
                borderBottomLeftRadius:'20px',
                borderBottomRightRadius:'20px',
            }}>See All Details</Stack>
        </Stack>
    )
}

export default User_Details