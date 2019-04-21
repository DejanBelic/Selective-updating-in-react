import React, {Component} from 'react';

const PageHeaderPureComponent = ({ headerText }) => {

    console.log('page header rendering');
    return (
        <header>
            <h1>{headerText}</h1>
        </header>
    );
};

export default PageHeaderPureComponent;