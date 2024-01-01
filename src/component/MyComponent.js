//class component
//function component
import React from 'react'
class MyComponent extends React.Component {
    state = {
        name: 'Harry Pham Dev',
        address: 'Hoi Dan IT',
        age: 26
    };

    handleClick = (event) => {
        console.log('>> click me button');
        console.log('My name is ', this.state.name);
        this.setState({
            name: 'Eric'
        });
    }

    handleOnMouseOver = (event) => {
        this.setState({
            age: this.state.age + 1
        })
    }


    render() {

        //JSX
        return (

            <div>My first component
                <br></br>
                <button onClick={this.handleClick}>click me</button>
                <br></br>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <br></br>
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age}
            </div >
        );
    }
};


export default MyComponent;