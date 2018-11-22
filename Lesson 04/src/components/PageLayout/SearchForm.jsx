import React, { Component } from "react";
import './SearchForm.scss';


class Filters extends Component {
    constructor(props) {
        super(props);
    }

    handleFilterChange(e) {
        this.props.updateFilter(e.target.value);
    }
    render() {
        return <input type="text" ref="filterInput" onChange={this.handleFilterChange.bind(this)} placeholder="Enter usa city name" className="form-control" />;
    }
};

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: ['Chicago', 'New York', 'Tokyo', 'London', 'San Francisco', 'Amsterdam', 'Hong Kong', 'Moscow', 'Rostov-on-Don'],
            filterValue: ''
        };       
    }

    handleFilterUpdate(filterValue) {
        this.setState({
            filterValue: filterValue
        })
    }

    render() {
        let displayedItems = this.state.listItems.filter(function (item) {
            let match = item.toLowerCase().indexOf(this.state.filterValue.toLowerCase());
            if (match > 0) {
                return true
            }
        }.bind(this));// - почему без bind не работает? как это вообще можно было узнать?
 
        var content;
        if (displayedItems.length > 0) {
            var items = displayedItems.map((item, itemIndex) => {
                return <li key={`searck-item-${itemIndex}`}>{item}</li>
            });
            content = <ul>{items}</ul>
        } else {
            content = <p>Нет совпадений</p>;            
        }

        const style = {
            display: this.state.filterValue.length === 0 ? "none" : "block"
          };   

        return (
            <div id="search-form">
                <Filters updateFilter={this.handleFilterUpdate.bind(this)} />                
                <div id="search-form-result" style={style}>{content}</div>
            </div>
        )
    }
}


export default SearchForm;