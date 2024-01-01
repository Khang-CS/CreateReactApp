import React from 'react'

class UserInfor extends React.Component {
    state = {
        name: 'Harry Pham Dev',
        address: 'Hoi Dan IT',
        age: 26
    };


    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeInputAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input value={this.state.name} onChange={(event) => this.handleOnChangeInput(event)} type="text" />

                    <br></br>
                    <label>Your age:</label>
                    <input value={this.state.age} onChange={(event) => this.handleOnChangeInputAge(event)} type="text" />
                    <br></br>
                    <button>Submit</button>
                </form>
                <br></br>
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age}
            </div>
        )
    }
}

export default UserInfor;