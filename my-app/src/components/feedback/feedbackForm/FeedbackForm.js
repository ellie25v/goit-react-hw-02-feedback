import React from 'react';

const FeedbackForm = ({ func }) => {
        return ( 
        <>
            <button value="good" onClick = {func}>Good</button> 
            <button value="neutral" onClick = {func}>Neutral</button> 
            <button value="bad" onClick = {func}>Bad</button> 
        </>
        );
    }


export default FeedbackForm;