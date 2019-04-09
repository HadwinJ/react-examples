import React, { Component } from 'react';

class UserClass extends Component {
    render() {
        const { message } = this.props;
        return <div>{message}</div>
    }
}

export default UserClass;