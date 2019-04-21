import React, {Component} from 'react';

class ItemList extends React.PureComponent {
    render() {
        console.log('item list rendering');
        return (
            <div>
                <ul>{this.props.items.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
        );
    }
}

export default ItemList;