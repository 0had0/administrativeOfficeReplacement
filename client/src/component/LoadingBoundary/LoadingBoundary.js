import DefaultLoadingScreen from "./page/Loading";

type LoadingBoundaryProps = {
  component: Node,
  children: Node,
  isLoading?: boolean,
};

function LoadingBoundary({
  component: LoadingScreen = DefaultLoadingScreen,
  children,
  isLoading = true,
  ...props
}: LoadingBoundaryProps): Node {
  return !isLoading ? children : <LoadingScreen {...props} />;
}

LoadingBoundary.defaultProps = {
  isLoading: true,
};

export default LoadingBoundary;
