import React, { Component } from 'react';
import './searchBox.style.css';
class SearchBox extends Component{
    constructor(props)
    {
        super();
    }
    onchage = (event) => 
    {
        console.log(event.target.value);
        this.props.handleChange(event);
    }
    render()
    {
        return(
            <div className="search-box">
                <input type="search" 
                placeholder = {this.props.placeholder}
                onChange={this.onchage} />      
                {/* passing data from children to parent */}
                
            </div>
        )
    }
}
export default SearchBox;
