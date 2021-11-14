// @flow
import React from "react";
import type { Node } from "react";

import ErrorPage from "./page/Error";

type Props = {
  children: Node,
};

type State = {
  hasError: boolean,
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  render(): Node {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorPage />;
    }

    return children;
  }
}

export default ErrorBoundary;
