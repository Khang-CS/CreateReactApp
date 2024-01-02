//class component
//function component
import React, { useState } from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: 'Hoi Dan IT', age: '30' },
//             { id: 2, name: 'Eric', age: '26' },
//             { id: 3, name: 'HarryPhamDev', age: '17' }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         console.log('>>log:', userObj);
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     render() {
//         //DRY: don't repeat yourself

//         //JSX
//         return (

//             <>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser} />
//                 <br></br>
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </>
//         );
//     }
// };

const MyComponent = () => {

    //state
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Hoi Dan IT', age: '30' },
        { id: 2, name: 'Eric', age: '26' },
        { id: 3, name: 'HarryPhamDev', age: '17' }
    ]);


    //New User
    const handleAddNewUser = (userObj) => {
        console.log('>>log:', userObj);
        setListUsers([userObj, ...listUsers]);
    }

    //Delete User
    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }


    return (
        <>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser} />
            <br></br>
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    );
}



export default MyComponent;