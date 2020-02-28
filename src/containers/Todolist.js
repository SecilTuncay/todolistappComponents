import React, { Component } from 'react';
import Button from './../components/UI/Button/Button';
import Auxiliary from './/../hoc/Auxiliary/Auxiliary';
import ListItem from '../components/ListItem/ListItem.js';

class Todolist extends Component {

    state = {
        userInput: '',
        list: []
    }

    deleteFromList = (e) => {
        console.log("deleteList : " + e.currentTarget.children[0]);
        /* let listArray = [...this.state.list];
        listArray.splice(listIndex, 1);
        this.setState({ list: listArray }) */
    }

    changeUserInput = (event) => {
        event.preventDefault();
        this.setState({ userInput: event.target.value }, () => console.log("userInput : " + this.state.userInput));
    }

    addToList = (event) => {
        event.preventDefault();
        if (this.state.userInput !== '') {
            let listArray = [...this.state.list, this.state.userInput];
            this.setState({
                list: listArray,
                userInput: ''
            })
        }
    }

    render() {
        return (
            <Auxiliary>
                <input
                    value={this.state.userInput}
                    type="text"
                    onChange={this.changeUserInput} />
                <Button buttonClicked={this.addToList}>ADD</Button>
                <ListItem list={this.state.list} listClicked={(e) => this.deleteFromList(e)}></ListItem>

            </Auxiliary >
        )
    }
}

export default Todolist;