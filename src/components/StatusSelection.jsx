import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import styled from '@emotion/styled';
import CircleIcon from '@mui/icons-material/Circle';

const DivStyle = styled('div')({
    display:'flex' ,
    alignItems:'center' ,
    columnGap:'8px'
});

const TypStyle = styled('Typography')({
    fontFamily:'IRANYekanWeb'
});

export default function StatusSelection() {
  return (
    <FormControl sx={{
        // width:'calc(100% - 20px)',
        width:'100%',
        '& .MuiFormControlLabel-label':{fontFamily:'IRANYekanWeb', width:'100%'},
        '& css-dmmspl-MuiFormGroup-root':{rowGap:'8px'},
        '& .MuiFormControlLabel-root':{
            border: '1px solid #D3DED8',
            borderRadius: '12px',
            margin:'0px'  ,
            height:'40px',
            padding:'4px 12px 4px 16px',
        },
        '& .css-dmmspl-MuiFormGroup-root':{
            rowGap:'8px'
        }
        }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="متوقف شده" control={<Radio color="default" />} label={<DivStyle><CircleIcon sx={{width:'12px', color:'#D02128'}}/><TypStyle>متوقف شده</TypStyle></DivStyle>} labelPlacement="start"/>
        <FormControlLabel value="نیازمند بازبینی" control={<Radio color="default" />} label={<DivStyle><CircleIcon sx={{width:'12px', color:'#F7B408'}}/><TypStyle>نیازمند بازبینی</TypStyle></DivStyle>} labelPlacement="start"/>
        <FormControlLabel value="آماده انجام" control={<Radio color="default" />} label={<DivStyle><CircleIcon sx={{width:'12px', color:'#505F56'}}/><TypStyle>آماده انجام</TypStyle></DivStyle>} labelPlacement="start"/>
        <FormControlLabel value="در حال انجام" control={<Radio color="default" />} label={<DivStyle><CircleIcon sx={{width:'12px', color:'#0AA7D9'}}/><TypStyle>در حال انجام</TypStyle></DivStyle>} labelPlacement="start"/>
        <FormControlLabel value="انجام شده" control={<Radio color="default" />} label={<DivStyle><CircleIcon sx={{width:'12px', color:'#14B858'}}/><TypStyle>انجام شده</TypStyle></DivStyle>} labelPlacement="start"/>
      </RadioGroup>
    </FormControl>
  );
}