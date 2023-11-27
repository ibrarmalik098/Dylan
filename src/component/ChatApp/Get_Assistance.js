import { Stack } from '@mui/material'
import React from 'react'
import mic from '../../assets/ep_mic.png'
import { main_color } from '../../utils/color'
const Get_Assistance = () => {
    return (
        <div>
            <Stack sx={{ backgroundColor: main_color,borderRadius:4,position:'relative' }}>
                <Stack p={2}>
                    <Stack sx={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>Get Assistance</Stack>
                    <Stack sx={{ fontSize: 10,  color: "white",mt:0.8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem</Stack>
                    <Stack sx={{fontSize:8,backgroundColor:'#2EB222',p:0.7,borderRadius:1,color:'white',width:"70px",mt:0.5,cursor:'pointer'}}>Talk To An Expert</Stack>
                </Stack>
                <Stack sx={{position:'absolute',bottom:0,right:-6}} >
                    <img width={100} height={100} src={mic} />
                </Stack>
            </Stack>
        </div>
    )
}

export default Get_Assistance