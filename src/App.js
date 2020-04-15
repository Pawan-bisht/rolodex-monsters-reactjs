import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchBox.component';
import './App.css';

import axios from 'axios';

class App extends Component {

    constructor(props)
    {
        super();
        this.state = {
            monsters:[],
            searchField:""
        }
    }

    componentDidMount()
    { 
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(result=>{
            console.log(result.data)
            this.setState({monsters : result.data})   
        })
        .catch(err=>{console.log(err)})  
    }

    onInputChange = (event) =>{
        this.setState({
            searchField:event.target.value
        });
        
    }

    render(){
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster)=>{
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        });
        console.log("this is monsters",monsters);
        return(
            <div className="App">
                
                <h1> Monster Rolodex</h1>
                <SearchBox 
                placeholder = "Search the monster"
                handleChange = {this.onInputChange}
                />
                <CardList monsters={ filteredMonsters } />
            </div>
        )
    }
}

export default App;