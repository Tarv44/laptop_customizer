import React from 'react';
import SummaryItem from '../SummaryItem/SummaryItem'

export default function SummaryItemsList(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        return (
            <SummaryItem 
                idx={idx} 
                featureName={feature} 
                feature={props.selected[feature]}/>
        )   
    });
    return summary
}