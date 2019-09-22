import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.scss';

const Button = props => {
    const { children, color, outline, type, unstyled } = props;
    return (
        <button
            className={classnames(
                `btn btn-${outline ? 'outline-' : ''}${color}`,
                {
                    unstyled,
                }
            )}
            type={type}
        >
            {console.log('unstyled = ' + unstyled)}
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
    ]),
    outline: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    unstyled: PropTypes.bool,
};

Button.defaultProps = {
    children: null,
    color: 'primary',
    outline: false,
    type: 'button',
    unstyled: false,
};

export default Button;
