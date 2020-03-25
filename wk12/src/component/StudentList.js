import axios from 'axios';
import React from 'react';

class UserList extends React.Component {
    state = { 
        users: []
    };
    
    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users`).then(res => {
            const users = res.data;
            this.setState ({users})
        });
    };

    render() { 
        return ( 
            <ul>
                {this.state.users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
         );
    }
}
 
export default UserList;