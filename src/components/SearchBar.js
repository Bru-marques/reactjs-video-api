import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div
        className="search-bar ui raised  padded segment"
        style={{ margin: "30px 0" }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>
              <h3>Video Search</h3>
            </label>
            <div class="ui large icon input">
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <i class="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
