import React from 'react'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function Currency(props) {
    const currency = USCurrencyFormat.format(props.value)
    return currency
}

export default Currency;