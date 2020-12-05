import React from 'react';
import FeatureOptions from '../FeatureOptions/FeatureOptions';
import './FeaturesForm.css'

export default function FeaturesForm(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        return (
          <FeatureOptions
            features={props.features} 
            feature={feature} 
            idx={idx} 
            selected={props.selected}
            updateFeature={props.updateFeature}/>
        );
    });

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}