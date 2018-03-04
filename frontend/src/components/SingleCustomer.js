import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

const GetUser = gql`
  query GetUser($id: String!) {
    getUser(id:$id) {
        name
        projects{
            id
            name
      }
    }
  }
`;

class SingleCustomer extends Component {
    render() {
        let { data } = this.props
        if (data.loading) {
            return <div>Loading...</div>
        }

        return (

            <div className="UserInfo">
                <div className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1"><Link className="btn btn-primary" to={`/`} >Back</Link> {data.getUser.name}</span>
                </div>
                <p className="text-left">Projects of {data.getUser.name}</p>
                <ul className="list-group">
                    {data.getUser.projects.map((item) => {
                        return <li className="list-group-item" key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}


const queryOptions = {
    options: props => ({
        variables: {
            id: props.match.params.id,
        },
    }),
}

SingleCustomer = graphql(GetUser, queryOptions)(SingleCustomer);

export default SingleCustomer;
