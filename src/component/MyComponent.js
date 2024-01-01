//class component
//function component
import React from 'react'
import UserInfor from './Userinfor';
class MyComponent extends React.Component {
    render() {

        //JSX
        return (

            <div>My first component
                <br></br>

                <UserInfor />
            </div >
        );
    }
};


export default MyComponent;