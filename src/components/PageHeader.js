import React, {Component} from 'react';

class PageHeader extends Component {
    constructor(props) {
        super(props);
        console.log('page header constructor')
    }
    render() {
        console.log('page header rendering');
        return (
            <header>
                <h1>{this.props.headerText}</h1>
            </header>
        );
    }
}

export default PageHeader;