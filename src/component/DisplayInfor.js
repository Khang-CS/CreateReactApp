import React, { useEffect, useState } from 'react'
import './DisplayInfor.scss';
import logo from './../logo.svg';


const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    //Destructuring assignment

    // this.state= {
    //     isShowHideListUser: true
    // }

    console.log('call me render');

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You deleted all the users');
            }
            console.log('call me use EFFECT');
        }, [listUsers]
    );

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    return (
        <div className='display-infor-container'>
            Display Infor
            <hr></hr>
            <div>
                <span onClick={() => handleShowHideListUser()}>{isShowHideListUser === true ? "hide list user" : "show list user"}</span>
            </div>

            {isShowHideListUser &&
                <div>
                    {listUsers.map((user) => {

                        return (
                            <div key={user.id} className={
                                +user.age > 18 ? "green" : "red"
                            }>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>

                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )

                    })}
                </div>
            }
        </div>
    )
}
export default DisplayInfor