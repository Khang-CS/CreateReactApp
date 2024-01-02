//class component
//function component
import React from 'react'
import UserInfor from './Userinfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    render() {


        const myAge = 50;


        //JSX
        return (

            <div>My first component
                <UserInfor />
                <br></br>
                <DisplayInfor name="Hoi Dan IT" age={myAge} />
            </div >
        );
    }
};


export default MyComponent;