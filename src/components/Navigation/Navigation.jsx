import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Navigation.module.scss';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { open: false };
    }

    toggle() {
        this.setState(state => ({ open: !state.open }));
        document.activeElement.blur();
    }

    render() {
        const { open } = this.state;
        const { children } = this.props;

        return (
            <React.Fragment>
                <button
                    type="button"
                    onClick={this.toggle}
                    className={classnames(styles.hamburger, {
                        [styles.btnOpen]: open,
                    })}
                >
                    <div className={`${styles.line}`} role="presentation" />
                    <span className="sr-only">Menu</span>
                </button>
                <nav
                    className={classnames(`${styles.globalNav}`, {
                        [`${styles.navOpen}`]: open,
                    })}
                >
                    {children}
                </nav>
            </React.Fragment>
        );
    }
}

Navigation.propTypes = {
    children: PropTypes.node,
};

Navigation.defaultProps = {
    children: null,
};

export default Navigation;
