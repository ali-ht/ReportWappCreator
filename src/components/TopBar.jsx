import React from 'react';
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';

export default function TopBar() {
    return (
        <div style = {{
        width: '100%',
        height: '56px',
        backgroundColor: '#F1F5F3',
        display: 'flex',
        }}>
            <IconButton sx={{width: '40px', height: '40px', margin: '7px 17px'}}>
                <EastIcon sx={{
                    width: '40px',
                    height: '40px',
                    padding: '4px',
                    gap: '4px',
                    color: 'black',
                }} />
            </IconButton>
            <Typography sx={{fontFamily: 'IRANYekanWeb', fontWeight: 'bold', color: 'black', marginTop: '15px'}}>
                ثبت گزارش عملکرد
            </Typography>
        </div>
    )
}
