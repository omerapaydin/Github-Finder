import React, { Component } from "react";

export class Searchs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  onChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.keyword === "") {
      this.props.displayAlert("Anahtar kelime gir", "danger");
    } else {
      this.props.searchUsers(this.state.keyword);
      this.setState({ keyword: "" });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              onChange={this.onChange}
              value={this.state.value}
              type="text"
              className="form-control"
              placeholder="Anahtar Kelime"
            />
            <button className="btn btn-primary" type="submit">
              Ara
            </button>
          </div>
        </form>

        {this.props.showClearButton && (
          <button
            onClick={this.props.clearResult}
            className="btn mt-2 btn-outline-danger btn-block"
          >
            Sonuçları Temizle
          </button>
        )}
      </div>
    );
  }
}

export default Searchs;
