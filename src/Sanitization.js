import React from 'react';
import sanitize from 'sanitize-html';

const example1 = `<p>Hey</p>`
const example2 = `<b>This is bold content.</b>`
const example3 = `<img src="1" onerror="alert('Gotcha!')" />`
const example4 = `<script>alert('hello world')</script>`

const allExamples = [
  example1,
  example2,
  example3,
  example4,
]

export class Sanitization extends React.Component {
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
        <h2 style={headingStyle}>Sanitization Example</h2>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <label style={labelStyle} htmlFor="searchInput">Search</label>
          <input
            name="searchInput"
            id="searchInput"
            placeholder="Enter HTML Here"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Go</button>
        </form>
        {this.state.submittedSearch && (
          <p style={searchResultsStyle}>Resulting markup is: <span dangerouslySetInnerHTML={{ __html: sanitize(this.state.submittedSearch) }} /></p>
        )}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableStyle}>Input</th>
              <th style={tableStyle}>Output</th>
              <th style={tableStyle}>Rendered As</th>
            </tr>
          </thead>
          <tbody>
            {allExamples.map(text => (
              <tr key={text}>
                <td style={tableStyle}>{text}</td>
                <td style={tableStyle}>{sanitize(text)}</td>
                <td style={tableStyle} dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
              </tr>
            ))}
          </tbody>
        </table>
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

const formStyle = {
  marginBottom: '20px',
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

const tableStyle = {
  border: '1px solid white',
  fontSize: '14px',
  padding: '4px',
}
