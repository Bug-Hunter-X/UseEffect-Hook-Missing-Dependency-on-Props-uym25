# React useEffect Hook Missing Dependency

This example demonstrates a common issue with the React `useEffect` hook: forgetting to include necessary dependencies in the dependency array.  The code in `bug.js` demonstrates a scenario where the component renders correctly when the internal `count` state changes, but it doesn't re-render when a prop changes, leading to stale props. 

The solution in `bugSolution.js` demonstrates how to fix this by adding the relevant prop to the dependency array.