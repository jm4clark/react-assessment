import React, { Component } from 'react';
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import { Table } from 'reactstrap';

export default class AllUsers extends Component {
    
    componentDidMount = () => {
        this.props.passedFunction();
    }

    render() {
        return (
            <div>
                <h1>All Users</h1>
                < Table >
                    <tbody>
                        {_.reverse(this.props.data).map((user) => (
                            <tr key={user._id}><td>
                                <h3>{user.username}</h3>
                            </td></tr>
                        ))}
                    </tbody>
                </Table >
            </div >
        )
    }
}