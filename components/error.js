import React, { Component } from 'react';
import Axios from 'axios';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    console.log("caught error");
    return { hasError: true}
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
    const body = { "operation":  "build-failed", "error": error.message, "errorinfo": error.stack};
    Axios.post('https://i7hnvmj69b.execute-api.us-east-1.amazonaws.com/dev/build-failed', body, )
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
