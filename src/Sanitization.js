import React from 'react';
import sanitize from 'sanitize-html';

export const Sanitization = () => {
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

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Sanitization Example</h2>
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

const containerStyle = {
  color: 'white',
  background: '#0078D6',
  padding: '20px 20px 20px 0',
}

const headingStyle = {
  marginTop: 0,
}

const tableStyle = {
  border: '1px solid white',
  fontSize: '14px',
  padding: '4px',
}
