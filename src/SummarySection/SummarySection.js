import React from 'react';
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import SummaryItemsList from '../SummaryItemsList/SummaryItemsList'
import './SummarySection.css'



function SummarySection(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryItemsList selected={props.selected} />
            <SummaryTotal selected={props.selected}/>
        </section>
    )
}

export default SummarySection;