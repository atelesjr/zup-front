import React from 'react'

export default props => {
    const { country } = props;
    
    return (
        <div className="card">
            <div className="card__head"> 
                <div className="flag">
                    <img src={ country.flag } alt="brazil" />
                </div>
                <div className="country">
                    <p className="country__name">{ country.name }</p>
                </div>
            </div>
            <div className="card__body">
                <p>Original name:<span>{ country.nativeName }</span></p>
                <p>Region: <span>{ country.region }</span></p>
                <p>Subregion: <span >{ country.subregion }</span></p>
                <p>
                    Currency: <span>{ country.currencies[0].code }  </span>
                    Symbol:  <span>{ country.currencies[0].symbol }</span>
                </p>
                <p>International calling code: <span>{country.callingCodes }</span></p>
                <p>Top Level Domain: <span>{ country.topLevelDomain }</span></p>
            </div>
        </div>
    )
}