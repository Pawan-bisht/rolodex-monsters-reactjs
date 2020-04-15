import React , { Component } from 'react';
import Card from '../card/card.component';
import './card-list.style.css';


class CardList extends Component{
        constructor()
        {
            super();
        }
        render()
        {
            return(
                <div className="card-list">
                   {this.props.monsters.map((monster)=>{
                   return <Card key={monster.id} monster={monster}/>
                })}
                </div>
            )
        }
}
export default CardList;