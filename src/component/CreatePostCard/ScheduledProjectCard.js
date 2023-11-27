import { Stack } from '@mui/material'
import React from 'react'
import { main_color, vendor_color } from '../../utils/color'
import { IoLocationSharp } from 'react-icons/io5'
import { GoClock } from "react-icons/go";
import { RiToolsFill } from "react-icons/ri";
import { MdPlumbing } from "react-icons/md";

const ScheduledProjectCard = () => {
    return (
        <div>
            <Stack sx={{ backgroundColor: main_color, p: 1, borderRadius: "10px", position: 'relative', height: 80 }}>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Stack sx={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>George Wrangler</Stack>
                    <Stack sx={{ fontSize: 10, color: 'white', textDecoration: 'underline' }}>View Details</Stack>
                </Stack>
                <Stack flexDirection={'row'} alignItems={'center'} mt={0.5}>
                    <Stack>
                        <IoLocationSharp size={14} color={vendor_color} />
                    </Stack>
                    <Stack sx={{ fontSize: 10, color: 'white', }}>Arizona Towers, Street 21, lane 3, United States</Stack>
                </Stack>
                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={0.3}>
                        <Stack>
                            <GoClock size={14} color={vendor_color} />
                        </Stack>
                        <Stack sx={{ fontSize: 10, color: 'white', }} >23:00</Stack>
                    </Stack>
                    <Stack sx={{ backgroundColor: vendor_color, p: 1, position: 'absolute', right: 0, bottom: 0, borderTopLeftRadius: 50, textAlign: 'center', alignItems: 'center' }}>
                        <MdPlumbing color='white' size={40} />
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default ScheduledProjectCard