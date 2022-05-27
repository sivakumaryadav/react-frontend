import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className = "text-muted">All Rights are Reserved 2021 @SivaKumar</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;