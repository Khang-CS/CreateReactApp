//class component
//function component
import React from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'Hoi Dan IT', age: '30' },
            { id: 2, name: 'Eric', age: '26' },
            { id: 3, name: 'HarryPhamDev', age: '17' }
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log('>>log:', userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    render() {
        //DRY: don't repeat yourself

        //JSX
        return (

            <div>My first component
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser} />
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div >
        );
    }
};


export default MyComponent;