import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimatedShoppingList extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            items: [
                {id: 1, name: 'Milk'},
                {id: 2, name: 'Yogurt'},
                {id: 3, name: 'Orange Juice'},
            ]
        }
    }

    handleChange(evt) {
        let {items} = this.state;

        if (evt.key === 'Enter') {
            let newItem = {
                id: Date.now(),
                name: evt.target.value
            }
            let newItems = items.concat(newItem);
            this.setState({
                items: newItems});
            evt.target.value = '';
        }
    }

    handleRemove(i) {
        var newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }


    render() {
        let {items} = this.state;

        console.log('this.state.items', items);

        let shoppingItems = items.map((item, i) => (
            <div key={item.id}
                 className="item"
                 onClick={this.handleRemove.bind(this, i)}>
                {item.name}
            </div>));
        console.log('shopping', shoppingItems);
        return (
            <div>
                <ReactCSSTransitionGroup transitionName="shoppingList"
                                         transitionAppear={true}
                                         transitionAppearTimeout={500}
                                         transitionEnterTimeout={1000}
                                         transitionLeaveTimeout={1000}>
                    {shoppingItems}
                </ReactCSSTransitionGroup>
                <input type="text"
                       value={this.state.newItem}
                       onKeyDown={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

render(<AnimatedShoppingList/>, document.getElementById('root'));
