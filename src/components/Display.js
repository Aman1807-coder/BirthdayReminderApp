import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { deepOrange, deepPurple, green, pink, purple } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
}));


const Display = (props) => {

    const mapping = (item) => {

        let col = deepPurple[500];
        const n = (Math.floor(Math.random() * 10) + item.Name.length) % 5;
        console.log(n);

        if (n == 0) col = deepPurple[500];
        else if (n == 1) col = deepOrange[500];
        else if (n == 2) col = purple[500];
        else if (n == 3) col = pink[500];
        else col = green[500];

        const obj = {
            0: 'January', 1: 'February', 2: 'March', 3: 'April',
            4: 'May', 5: 'June', 6: 'July', 7: 'August',
            8: 'September', 9: 'October', 10: 'November', 11: 'December'
        }

        let check = true;
        if (props.message === 'Today') check = false;

        return (
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} >
                <Item
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                        border: 1,
                        borderColor: '#fffbe2',
                        backgroundColor: "#fffbe2",
                        fontSize: 160,
                        position: 'relative',
                        top: 10,
                        boxShadow : 8,
                        height : 80
                    }}
                >
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Avatar
                            sx={{
                                bgcolor: col,
                                width: 50,
                                height: 50,
                                fontSize: 24,
                                fontFamily: 'cursive'
                            }}

                        >{item.Name[0]}</Avatar>
                        <Typography
                            noWrap variant="h6"
                            fontWeight='bold'
                            fontFamily='cursive'
                            fontSize={25}
                            color='black'>{item.Name} 
                        </Typography>

                    </Stack>
                    <Stack spacing={2} direction="row" >
                        {check &&
                            <Typography
                                noWrap variant="h6"
                                fontFamily='monospace'
                                fontWeight='bold'
                                fontSize={21}
                                position='relative'
                                left={300}
                                bottom={7}
                                color={col}>
                                {item.Day} {obj[item.Month]}
                            </Typography>}

                        {!check &&
                            <Typography
                                noWrap variant="h6"
                                fontFamily='monospace'
                                fontWeight='bold'
                                fontSize={19}
                                position='relative'
                                left={300}
                                bottom={7}
                                color={col}>
                                🎉🥁🎊
                            </Typography>}
                    </Stack>
                    <Stack spacing={2} direction="row" >
                        <Typography
                            noWrap variant="subtitle2"
                            alignItems="right"
                            color='black'
                            fontFamily='cursive'
                            fontSize={15}
                            fontWeight='bold'
                            display='inline'
                            position='relative'
                            left={5}
                            bottom={26}
                        >{item.Relation} </Typography>
                    </Stack>
                </Item>
            </Box>
        )
    }

    return <div>
        <Typography
            noWrap variant="subtitle2"
            alignItems="right"
            color='black'
            fontFamily='cursive'
            fontSize={20}
            fontWeight='bold'
            position='relative'
            left={220}
            top={4}
        >{props.number} BirthDays on {props.message}
        </Typography>
        {props.toDisp.map(mapping)}
    </div>
}

export default Display;