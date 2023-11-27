import * as React from 'react';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function ValueLabelComponent(props: SliderValueLabelProps) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}




export default function Price_Slider() {
    return (
        <Box sx={{ width: '100%' }}>
            <Slider
            color='success'
                valueLabelDisplay="auto"
                slots={{
                    valueLabel: ValueLabelComponent,
                }}
                aria-label="custom thumb label"
                defaultValue={20}
            />

        </Box>
    );
}