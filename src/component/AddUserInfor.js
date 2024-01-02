import React, { useState } from 'react'

// class AddUserInfor extends React.Component {
//     state = {
//         name: 'Harry Pham Dev',
//         address: 'Hoi Dan IT',
//         age: 26
//     };


//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeInputAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state);
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1),
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name:</label>
//                     <input value={this.state.name} onChange={(event) => this.handleOnChangeInput(event)} type="text" />

//                     <br></br>
//                     <label>Your age:</label>
//                     <input value={this.state.age} onChange={(event) => this.handleOnChangeInputAge(event)} type="text" />
//                     <br></br>
//                     <button>Submit</button>
//                 </form>
//                 <br></br>
//                 My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age}
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {

    //     state = {
    //         name: 'Harry Pham Dev',
    //         address: 'Hoi Dan IT',
    //         age: 26
    //     };

    // state 
    const [name, setName] = useState('Harry Pham Dev');
    const [address, setAddress] = useState('Hoi Dan IT');
    const [age, setAge] = useState(26);

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    }

    const handleOnChangeInputAge = (event) => {
        setAge(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1),
            name: name,
            age: age
        });
    }

    return (
        <div>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input value={name} onChange={(event) => handleOnChangeInput(event)} type="text" />

                <br></br>
                <label>Your age:</label>
                <input value={age} onChange={(event) => handleOnChangeInputAge(event)} type="text" />
                <br></br>
                <button>Submit</button>
            </form>
            <br></br>
            My name is {name} and I'm from {address} and I'm {age}
        </div>
    )
}

export default AddUserInfor;