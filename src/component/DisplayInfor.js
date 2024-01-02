import React from 'react'

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = (event) => {
        this.setState(
            {
                isShowListUser: !this.state.isShowListUser
            }
        )
    }
    render() {
        //props => properties

        //destructuring arrayy
        const { listUsers } = this.props;
        return (
            <div>Display Infor
                <hr></hr>
                <div>
                    <span onClick={(event) => { this.handleShowHide(event) }}>
                        {this.state.isShowListUser === true ? "Hide list" : "Show list"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={
                                    +user.age > 18 ? "green" : "red"
                                }>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr />
                                </div>
                            )

                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor