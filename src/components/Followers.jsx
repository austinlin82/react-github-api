import React from 'react';
import { Link } from 'react-router';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });

                console.log(this.state)
            }
        );
    }
    

    render() {
        return (
            <div>
                <div className="followers-page">
                    <h3>Followers of {this.state.user}</h3>
                </div>
            </div>
        );
    }

};

export default Followers;
