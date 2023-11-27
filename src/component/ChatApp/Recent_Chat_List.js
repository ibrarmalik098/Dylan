import { Stack } from '@mui/material'
import React from 'react'
import Get_Assistance from './Get_Assistance'
import { GoDotFill } from 'react-icons/go'
import { vendor_color } from '../../utils/color'

const Recent_Chat_List = () => {
    return (
        <Stack p={1}>
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

                <Stack sx={{ color: '#000000', fontSize: 12, }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem</Stack>

            </Stack>

        </Stack>
    )
}

export default Recent_Chat_List