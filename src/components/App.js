import React, { useState } from 'react';
import AddList from './AddList';
import Display from './Display';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const App = () => {

    const [check, setCheck] = useState(false);
    const [disp, setDisp] = useState([]);
    const [list, setList] = useState([{
        Name: "",
        Month: -1,
        Day: -1,
        Relation: ""
    }]);

    const [num, setNum] = useState(0);
    const [msg, setMsg] = useState("");

    const handleSearch = (finalList) => {
        setList(prevValue => [...prevValue, finalList]);
    }

    const handleToday = () => {

        const date = new Date();
        const month = date.getMonth();
        const today = date.getDate();

        const arr = list.filter(item => item.Month === month && item.Day === today);

        setDisp(arr);
        setNum(arr.length);
        setMsg("Today");
        setCheck(true);
    }

    const handleTomorrow = () => {

        const date = new Date();
        let month = date.getMonth();
        let tom = date.getDate() + 1;

        if (tom === 32 || (tom === 31 && (month === 3 ||
            month === 5 || month === 8 || month === 10))) {
            month = month + 1;
            tom = 1;
        }

        const arr = list.filter(item => item.Month === month && item.Day === tom);

        setDisp(arr);
        setNum(arr.length);
        setMsg("Tomorrow");
        setCheck(true);
    }

    const handleWeek = () => {

        const date = new Date();
        let month = date.getMonth();
        let day = date.getDay();
        let week = 6 - day + date.getDate();
        let arr = [];

        for (let i = 0; i <= 6; ++i) {

            week = week + 1;

            if (week === 32 || (week === 31 && (month === 3 ||
                month === 5 || month === 8 || month === 10))) {
                month = month + 1;
                week = 1;
            }

            for (let j = 0; j < list.length; ++j) {

                if (list[j].Month === month && list[j].Day === week)
                    arr.push(list[j]);
            }

        }

        setDisp(arr);
        setNum(arr.length);
        setMsg("Next Week");
        setCheck(true);
    }

    const handleMonth = () => {

        const date = new Date();
        const month = date.getMonth() + 1;

        const arr = list.filter(item => item.Month === month);

        setDisp(arr);
        setNum(arr.length);
        setMsg("Next Month");
        setCheck(true);
    }

    const boxSX = {
        "&:hover": {
          border : '3px solid black',
          boxShadow : 18
        },
      };

    return <div className='container'>
        <div> <AddList onCheck={handleSearch} /> </div>
            <div>
            <Stack spacing={2} direction="row" className='buttons'>
                <Button sx={boxSX} variant="contained" color="error" onClick={handleToday}>TODAY</Button>
                <Button sx={boxSX} variant="contained" color="info" onClick={handleTomorrow}>TOMORROW</Button>
                <Button sx={boxSX} variant="contained" color="success" onClick={handleWeek}>NEXT WEEK</Button>
                <Button sx={boxSX} variant="contained" color="secondary" onClick={handleMonth}>NEXT MONTH</Button>
            </Stack>
            <div className='card'>{check && <Display toDisp={disp} number={num}
                message={msg}
            />}</div>
            </div>
    </div>
}

export default App;