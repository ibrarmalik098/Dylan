import { Divider, Grid } from '@mui/material'
import React from 'react'
import { Stack } from 'react-bootstrap'
import './index.css'
import CustomInput from '../input/IconInput'


const Footer = () => {
    return (
        <Stack>
            <Grid container p={5} >
                <Grid item md={3} sm={6} xs={12} lg={3}>
                    <Stack style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Stack className='footer_heading'>
                            For Professionals
                        </Stack>
                        <Stack style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Stack className='footer-link'>How it Work</Stack>
                            <Stack className='footer-link'>Pricing</Stack>
                            <Stack className='footer-link'>Join as a Professional</Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item md={3} sm={6} xs={12} lg={3}>

                    <Stack style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Stack className='footer_heading'>
                            For Customer
                        </Stack>
                        <Stack style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Stack className='footer-link'>Find a Professional</Stack>
                            <Stack className='footer-link'>How it Workt</Stack>
                            <Stack className='footer-link'>Login</Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item md={3} sm={6} xs={12} lg={3}>

                    <Stack style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Stack className='footer_heading'>
                            Terms & Conditions
                        </Stack>
                        <Stack style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Stack className='footer-link'>Privacy Policy</Stack>
                            <Stack className='footer-link'>Lorem ispum</Stack>
                            <Stack className='footer-link'>Privacy Policy</Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item md={3} sm={6} xs={12} lg={3}>

                    <Stack style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Stack className='footer_heading'>
                            Subscribe
                        </Stack>
                        <Stack>
                            <CustomInput />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                    <hr style={{border:'1px solid white'}} />
                </Grid>

            </Grid>

        </Stack>
    )
}

export default Footer