import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddData = (props) => {

  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [date, setDate] = useState({
    month : 0,
    day : 0
  });
  const [img, setImg] = useState("");

  const handleName = (event) => {
    const newField = event.target.value;
    setName(newField);
  }

  const handleRelation = (event) => {
    const newField = event.target.value;
    setRelation(newField);
  }

  const handleDate = (value, event) => {
      const date = new Date(value);
      setDate({ month : date.getMonth(), day : date.getDate()});
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      onChange={handleName}
      id="standard-basic" 
      label={"Enter name"} 
      variant="standard" 
      value={name}
      />

      <br/>

      <TextField 
      onChange={handleRelation}
      id="standard-basic" 
      label={"Enter Relation"} 
      variant="standard" 
      value={relation}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
      onChange={handleDate} 
      label={'Date of Birth'} views={['year', 'month', 'day']}
      />
      </LocalizationProvider>

      <br/>

      <Stack spacing={9} direction="row">
        <Button 
        variant="outlined"
        color="success" 
        onClick={ () => {
          props.onChecked( name, relation, date)
          setName("");
          setRelation("");
        }}>
        ADD</Button>
      </Stack>


    </Box>
  );
}

export default AddData;