//class component
//function component
import React from 'react'
import UserInfor from './Userinfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'Hoi Dan IT', age: '30' },
            { id: 2, name: 'Eric', age: '26' },
            { id: 3, name: 'HarryPhamDev', age: '17' }
        ]
    }
    render() {
        //DRY: don't repeat yourself

        //JSX
        return (

            <div>My first component
                <UserInfor />
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div >
        );
    }
};


export default MyComponent;