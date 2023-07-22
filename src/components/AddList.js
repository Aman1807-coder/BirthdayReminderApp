import React, { useState } from 'react';
import AddData from './AddData';

const AddList = (props) => {

    const handleClick = (name, relation, date) => {

        const list = {
            Name : name,
            Month : date.month,
            Day : date.day,
            Relation : relation
        }

        props.onCheck(list);
    }

    return (
        <div>
            <AddData onChecked={handleClick}/>
        </div>
    );

}

export default AddList