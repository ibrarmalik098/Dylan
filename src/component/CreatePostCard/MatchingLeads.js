import { Divider, Stack } from '@mui/material'
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { vendor_color } from '../../utils/color';
import { IoLocationSharp } from 'react-icons/io5';

const MatchingLeads = ({onClick}) => {
    return (
        <div>
            <Stack  p={1} onClick={onClick} sx={{cursor:'pointer'}}>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack flexDirection={'row'} alignItems={'center'}>
                        <Stack>
                            <GoDotFill color={vendor_color} />
                        </Stack>
                        <Stack sx={{ color: '#000000', fontSize: 15, fontWeight: 1000 }}>Christopher</Stack>
                    </Stack>
                    <Stack sx={{ backgroundColor: vendor_color, borderRadius: '6px', p: 0.5, fontSize: 9, color: 'white', fontWeight: 'bold' }}>5m Ago</Stack>
                </Stack>
                <Stack ml={2}>

                    <Stack sx={{ color: '#000000', fontSize: 12, }}>Plumbing</Stack>
                    <Stack ml={-0.3} flexDirection={'row'} alignItems={'center'}>
                        <Stack>
                            <IoLocationSharp size={13} color={vendor_color} />
                        </Stack>
                        <Stack sx={{ fontSize: 10, color: '#333333', }}>Arizona Towers, Street 21</Stack>
                    </Stack>
                    <Stack ml={-0.2} flexDirection={'row'} alignItems={'center'} gap={0.5}>
                        <Stack sx={{ fontSize: 10, color: '#333333', fontWeight: 'bold' }}>
                            Additional Details 
                        </Stack>
                        <Stack sx={{ fontSize: 10, color: '#333333', }}>/ Immediate / Urgent.</Stack>
                    </Stack>
                    <Stack ml={-0.3} flexDirection={'row'} alignItems={'center'} gap={0.5}>
                        <Stack sx={{ fontSize: 10, color: '#333333', fontWeight: 'bold' }}>
                            Time Prefered :
                        </Stack>
                        <Stack sx={{ fontSize: 10, color: '#333333', }}>Afternoon</Stack>
                    </Stack>
                    <Stack ml={-0.3} flexDirection={'row'} alignItems={'center'} gap={1} mt={0.5}>
                        <Stack>

                            <a href='' style={{ fontSize: 10, color:'#002758',  }}>
                                View Details
                            </a>
                        </Stack>
                        <Stack>
                            <a href='' style={{ fontSize: 10, color:'#002758', textDecoration:'none' }}>
                            Pitch Now
                            </a>
                        </Stack>

                    </Stack>
                </Stack>
                
            </Stack>
        </div>
    )
}

export default MatchingLeads