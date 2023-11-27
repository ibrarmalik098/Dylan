import { Container, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { user_color } from '../../../utils/color';
import '../auth.css'
import Btn from '../../../component/button/Button';
import Vender_Select from '../../../component/select/Vender_Select ';
import TimePicker from '../../../component/DateTimePicker/DateTimePicker';
import Price_Slider from '../../../component/Slider/Price_Slider';
import { useNavigate } from 'react-router-dom';

const SecondSection = ({onSecondClick}) => {
    const navigation = useNavigate()

    return (
        <div>

            <Grid container >
                <Grid item md={2} lg={2} xs={1} sm={1}  >
                    <Stack sx={{ backgroundColor: 'blue' }}></Stack>
                </Grid>
                <Grid item md={10} lg={10} xs={11} sm={11}  >
                    <Stack sx={{ p: 1 }}>


                        <Stack sx={{ color: 'black', fontSize: { md: 20, lg: 20, sm: 15, xs: 13 }, fontWeight: 1000, mt: 1,fontFamily:'system-ui' }}>Select The Essentials</Stack>
                        <Stack sx={{ color: 'black', fontSize: { md: 13, lg: 13, sm: 8, xs: 6 }, mt: 1 }}>Add more details to get faster and more accurate quotes</Stack>

                        <Stack>
                            <Stack sx={{
                                borderRadius: "10px",
                                border: "1px solid #000",
                                px: 2,
                                mt: 2,
                                py: 4
                            }} >

                                <Grid container >
                                    <Grid item md={6} lg={6} xs={12} sm={12}  >
                                        <Vender_Select option_First={'Vendor Type'} />
                                    </Grid>
                                    <Grid item md={6} lg={6} xs={12} sm={12}  >
                                        <Vender_Select option_First={'Vendor Level'} />
                                    </Grid>
                                    <Grid item md={12} lg={12} xs={12} sm={12}  >
                                        <TimePicker />
                                    </Grid>
                                    <Grid item md={12} lg={12} xs={12} sm={12} mt={2}  >
                                        <Stack sx={{ fontSize: 13, color: 'black', fontWeight: 'bold' }} textAlign={'center'}>Select Budget</Stack>
                                        <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                                            <Stack sx={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>$1110</Stack>
                                            <Price_Slider />
                                            <Stack sx={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>$1110</Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Stack>

                        <Stack mt={2} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                            <Btn onClick={onSecondClick} label='Update Request' style={{ backgroundColor: user_color, border: 'none', outline: 'none', padding: "10px", borderRadius: '10px', color: 'white', cursor: "pointer" }} />
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default SecondSection