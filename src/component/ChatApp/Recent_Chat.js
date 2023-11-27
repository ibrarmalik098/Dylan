import { Divider, Stack } from '@mui/material'
import React from 'react'
import Get_Assistance from './Get_Assistance'
import Recent_Chat_List from './Recent_Chat_List'
import './index.css'

const Recent_Chat = () => {
    return (
        <Stack >
            <Stack>
                <Get_Assistance />
            </Stack>
            <Stack sx={{ mt: 2 }}>
                <Stack sx={{ color: '#000000', fontSize: 13, fontWeight: 1000 }}>Recent Chats</Stack>
                <Stack className='side_scroll_handle_for_scheduled ' sx={{ borderLeft: { lg: 1, md: 0, sm: 0, xs: 0 }, }} >
                    {new Array(5).fill(" ").map((e) => (
                        <Stack mt={1}>
                            <Recent_Chat_List />
                            <Divider />
                        </Stack>
                    ))}
                </Stack>

            </Stack>
        </Stack>
    )
}

export default Recent_Chat