import React from 'react'
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {

        console.log('>>> call constructor: 1');
        super(props);
        //babel compiler
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('>>> Call me component did mount');
        setTimeout(() => {
            document.title = 'Eric and hehe'
        }, 200);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> Call me component did update', this.props, prevProps);
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('you got 5 users');
            }
        }
    }

    handleShowHide = (event) => {
        this.setState(
            {
                isShowListUser: !this.state.isShowListUser
            }
        )
    }
    render() {
        console.log('>>> call me render');
        //props => properties

        //destructuring arrayy
        const { listUsers } = this.props;
        return (
            <div className='display-infor-container'>
                Display Infor
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

                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfor