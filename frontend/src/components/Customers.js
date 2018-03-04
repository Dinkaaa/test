import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

const query = gql`{
    users{
          id
          name
      }
  }`

class Customers extends Component {
    render() {
        let { data } = this.props
        if (data.loading) {
            return <div>Loading...</div>
        }
        this.props.getCustomers(data.users);
        return (
            <div className="wrapp">
            <div className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">All Customers</span>
            </div>
            <ul  className="list-group">
                {this.props.list.map((item => {
                    return <li className="list-group-item" key={item.id}> 
                        <Link className="customer-item" to={`/${item.id}`} >{item.name}</Link> 
                    </li>
                }))}
            </ul>
            </div>
        )
    }
}

Customers = graphql(query)(Customers)

export default Customers
