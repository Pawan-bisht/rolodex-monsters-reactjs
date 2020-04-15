import React, { Component } from 'react';
import './card.style.css';
class Card extends Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {     
        return(
            <div className="card-container">
                <img alt="monsters" src={`https://robohash.org/${this.props.monster.id}?set=set2`}/>
            {this.props.monster.name}
            </div>
        )
    }
}
export default Card;