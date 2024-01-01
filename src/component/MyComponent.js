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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }


    render() {

        //JSX
        return (

            <div>My first component
                <br></br>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input onChange={(event) => this.handleOnChangeInput(event)} type="text" />
                    <button>Submit</button>
                </form>
                <br></br>
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age}
            </div >
        );
    }
};


export default MyComponent;