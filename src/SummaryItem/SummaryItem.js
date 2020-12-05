import React from 'react';
import Currency from '../Currency/Currency';
import SummarySection from '../SummarySection/SummarySection';
import './SummaryItem.css'

function SummaryItem(props) {
    const featureHash = props.featureName + '-' + props.idx;
    const feature = props.feature;
        
    return (
        <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{props.featureName} </div>
            <div className="summary__option__value">{feature.name}</div>
            <div className="summary__option__cost">
                <Currency value={feature.cost} />
            </div>
        </div>
    );
}

export default SummaryItem;