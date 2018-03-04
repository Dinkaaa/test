import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import './App.scss';
import Customers from './Customers';
import SingleCustomer from './SingleCustomer';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Customers getCustomers={this.props.onGetCustomers}
              list={this.props.CustomerList}></Customers>
          </Route>
          <Route path='/:id' component={SingleCustomer}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(
  (state) => ({
    CustomerList: state.CustomersReduser
  }),
  dispatch => ({
    onGetCustomers: (data) => {
      const asylcGetCustomers = (data) => {
        return dispatch => {
          dispatch({ type: 'FETCH_CUSTOMERS_SUCCESS', payload: data });
        }
      }
      dispatch(asylcGetCustomers(data));
    }
  })
)(App);
