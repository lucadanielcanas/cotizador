import React from 'react'
import PropTypes from 'prop-types';

import { HeaderContainer, HeaderText } from './HeaderStyles';

const Header = ({ title }) => {
    return(
        <HeaderContainer>
            <HeaderText>{title}</HeaderText>
        </HeaderContainer>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;