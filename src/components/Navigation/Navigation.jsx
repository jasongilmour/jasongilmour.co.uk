import React, { Component } from 'react';
import classnames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';
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
                    <Link smooth to="/#about" onClick={this.toggle}>
                        About
                    </Link>
                    <Link smooth to="/#services" onClick={this.toggle}>
                        Services
                    </Link>
                    <Link smooth to="/#projects" onClick={this.toggle}>
                        Projects
                    </Link>
                    <Link smooth to="/#contact" onClick={this.toggle}>
                        Contact
                    </Link>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navigation;
