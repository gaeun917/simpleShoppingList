import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactCss from 'react-addons-css-transition-group'

import Styles from './Styles.css'

class AnimatedShoppingList extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            items: [
                {id: 1, name: 'berries'},
                {id: 2, name: 'nut milk'},
                {id: 3, name: 'butter'},
                {id: 4, name: 'egg'},
            ]
        }
    }

    handleRemove(i) {
        let {items} = this.state;
        let newItems = items;
        newItems.splice(i, 1);
        this.setState({
            items: newItems
        })
    }

    handleChange(e) {
        let {items} = this.state;

        if(e.key === 'Enter'){
            let newItem = {
                id:Date.now(),
                name:e.target.value
            }
            let newItems = items.concat(newItem);
            this.setState({
                items:newItems
            })
            e.target.value = '';
        }
    }

    render() {
        let {items} = this.state;
        let shoppingItems = items.map((item, i) => {
            return (
                <li key={i}
                     className={item}
                     onClick={this.handleRemove.bind(this, i)}>
                    {item.name}
                </li>
                )
        });

        return (
            <div>
                <h2>Shopping List</h2>
                <ul>{shoppingItems}</ul>
                <input type="text"
                value={this.state.newItem}
                onKeyDown={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}

render(<AnimatedShoppingList/>, document.getElementById('root'));
