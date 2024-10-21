import { Alert } from "bootstrap";
import Navbar from "./components/Navbar";
import Searchs from "./components/Searchs";

import Alerts from "./components/Alerts";
import UserList from "./components/UserList";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      error: null,
    };
  }

  searchUsers = (keyword) => {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then((response) => response.json())
        .then((data) => this.setState({ users: data.items, loading: false }));
    }, 1000);
  };

  clearResult = () => {
    this.setState({
      users: [],
    });
  };

  displayAlert = (msg, type) => {
    this.setState({ error: { msg: msg, type: type } });

    setTimeout(() => {
      this.setState({ error: [] });
    }, 3000);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Searchs
          searchUsers={this.searchUsers}
          clearResult={this.clearResult}
          displayAlert={this.displayAlert}
          showClearButton={this.state.users.length > 0 ? true : false}
        />
        <Alerts error={this.state.error} />
        <div className="container mt-3">
          <UserList users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
