import React from 'react';
import Option from '../Option/Option'
import './FeatureOptions.css'

export default function FeatureOptions(props) {
    const featureHash = props.feature + '-' + props.idx;
    const options = props.features[props.feature].map(item => {
        return ( 
          <Option 
            updateFeature={props.updateFeature} 
            selected={props.selected} 
            feature={props.feature} item={item}/>
        );
    });

    return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          {options}
        </fieldset>
    )
}