import React from 'react'
import PropTypes from 'prop-types';

import { Message } from './ResultStyles';

const Result = ({ quotation }) => {
    
    if(quotation === 0) return null;

    return(
        (quotation === 0) 
            ? null 
            : 
                (
                    <Message>El total a pagar es: $ {quotation}</Message>
                )
    );
}

Result.propTypes = {
    quotation: PropTypes.number.isRequired
};

export default Result;