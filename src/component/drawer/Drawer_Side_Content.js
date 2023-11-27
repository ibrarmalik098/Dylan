import { Divider, Stack } from '@mui/material'
import React from 'react'
import { main_color, vendor_color } from '../../utils/color'
import { FaEdit } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import MatchingLeads from '../CreatePostCard/MatchingLeads';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedLeadIndex } from '../../store/slice/AuthSlice';
const Drawer_Side_Content = () => {
    const dispatch = useDispatch()

    const sendDataToParent = (index) => {
        dispatch(setSelectedLeadIndex(index));
    }


    return (
        <div>
            <Stack >
                <Stack height={"80px"} sx={{ backgroundColor: main_color }}>
                    <Stack p={1}>
                        <Stack sx={{ fontSize: 17, fontWeight: 1000, color: 'white' }}>
                            1,011 Matching Leads
                        </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
                            <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                                <Stack flexDirection={'row'} alignItems={'center'}>
                                    <Stack>
                                        <MdMiscellaneousServices size={13} color={vendor_color} />
                                    </Stack>
                                    <Stack sx={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>4 services</Stack>
                                </Stack>
                                <Stack flexDirection={'row'} alignItems={'center'}>
                                    <Stack>
                                        <IoLocationSharp size={13} color={vendor_color} />
                                    </Stack>
                                    <Stack sx={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>Location</Stack>
                                </Stack>

                            </Stack>
                            <Stack>
                                <Stack sx={{ backgroundColor: vendor_color, p: 0.5, borderRadius: '30px', px: 2, gap: 0.5, cursor: 'pointer' }} flexDirection={'row'} alignItems={'center'}>
                                    <Stack>
                                        <FaEdit color='white' size={13} />
                                    </Stack>
                                    <Stack sx={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>EDIT</Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack height={"35px"} sx={{ backgroundColor: "#D9D9D9" }}>
                    <Stack p={1}>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack sx={{ fontSize: 11, color: "#333333", fontWeight: 'bold' }}>Showing All 1.011 Results</Stack>
                            <Stack flexDirection={'row'} alignItems={'center'} gap={0.2}>
                                <Stack>
                                    <IoFilter />
                                </Stack>
                                <Stack sx={{ fontSize: 11, color: vendor_color, fontWeight: 'bold' }}>Filter</Stack>
                            </Stack>
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>
            {/* Matching Leads Render */}
            <Stack mt={1}  >
                {new Array(3).fill(" ").map((e, i) => (
                    <Stack key={i} >
                        <MatchingLeads onClick={() => sendDataToParent(i + 1)} />
                        <Divider sx={{ borderColor: "#333333", border: '0px, 0px, 1px, 0px' }} />
                    </Stack>
                ))}

            </Stack>
            {/* Matching Leads Render */}
        </div>
    )
}

export default Drawer_Side_Content