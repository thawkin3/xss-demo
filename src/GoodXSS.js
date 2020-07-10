import React from 'react';

export class GoodXSS extends React.Component {
  state = {
    searchTerm: '',
    submittedSearch: '',
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({ submittedSearch: this.state.searchTerm })
  }

  render() {
    return (
      <div style={containerStyle}>
        <h2 style={headingStyle}>Good Example</h2>
        <form onSubmit={this.handleSubmit}>
          <label style={labelStyle} htmlFor="searchInput">Search</label>
          <input
            name="searchInput"
            id="searchInput"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Go</button>
        </form>
       {this.state.submittedSearch && (
         <p style={searchResultsStyle}>You searched for: <b>{this.state.submittedSearch}</b></p>
       )}
      </div>
    )
  }
}

const containerStyle = {
  color: 'white',
  background: '#0078D6',
  padding: '20px 20px 20px 0',
}

const headingStyle = {
  marginTop: 0,
}

const labelStyle = {
  position: 'absolute',
  left: '-10000px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
}

const inputStyle = {
  marginRight: '10px',
  padding: '4px',
}

const buttonStyle = {
  padding: '4px',
}

const searchResultsStyle = {
  marginBottom: 0,
}