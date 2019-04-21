import React, {Component} from 'react';

class PageHeaderPureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log('page header constructor')
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('Calling should component update');
    //
    //     return nextProps.headerText !== this.props.headerText;
    // }

    render() {
        console.log('page header rendering');
        return (
            <header>
                <h1>{this.props.headerText}</h1>
            </header>
        );
    }
}

export default PageHeaderPureComponent;