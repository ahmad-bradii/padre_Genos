import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught some error ", error, errorInfo);
  }

  //   componentDidMount() {}
  //   componentDidUpdate() {}
  //   componentWillUnmount() {}

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh Oh!</h2>
          <p>
            There was an error. Please try refreshing the page.{" "}
            <Link to="/">Click Here</Link> to go back to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
