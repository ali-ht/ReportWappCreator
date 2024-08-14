import EastIcon from '@mui/icons-material/EastRounded';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';

export default function TopBar() {
    return (
        <div style = {{
        width: '100%',
        height: '56px',
        backgroundColor: '#F1F5F3',
        display: 'flex',
        borderBottom: '1px solid #D3DED8',
        alignItems:'center',
        position:'fixed',
        top:'0',
        zIndex:'100',
        }}>
            <IconButton sx={{width: '40px', height: '40px', margin: '7px 7px'}}>
                <EastIcon sx={{
                    width: '24px',
                    height: '24px',
                    padding: '4px',
                    gap: '4px',
                    color: 'black',
                }} />
            </IconButton>
            <Typography sx={{fontFamily: 'IRANYekanWeb', fontWeight: 'bold', color: 'black'}}>
                ثبت گزارش عملکرد
            </Typography>
        </div>
    )
}
