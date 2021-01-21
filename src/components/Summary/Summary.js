import React from 'react'
import PropTypes from 'prop-types';

import { SummaryContainer } from './SummaryStyles';

const Summary = ({ info }) => {
    
    let { mark, year, plan } = info;

    if(mark === '' || year === '' || plan === '') return null;
    
    if(mark === 'american') {
        mark = 'Americano';
    } else if(mark === 'european') {
        mark = 'Europeo';
    } else {
        mark = 'Asiatico'
    }

    if(plan === 'basic') {
        plan = 'Básico';
    } else {
        plan = 'Completo'
    }

    return(
        <SummaryContainer>
            <h2>Resumen de la cotización</h2>
            <ul>
                <li>Marca: {mark}</li>
                <li>Año del auto: {year}</li>
                <li>Plan: {plan}</li>
            </ul>
        </SummaryContainer>    
    );
}

Summary.propTypes = {
    info: PropTypes.object.isRequired
};

export default Summary;