import React from 'react'

class DisplayInfor extends React.Component {
    render() {
        //props => properties
        console.log(this.props)

        //destructuring arrayy
        const { age, name } = this.props;
        return (
            <div>Display Infor
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}

export default DisplayInfor