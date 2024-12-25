```javascript
import React, { useState, useEffect } from 'react';

function MyComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // Correct logic: updates when count OR initialCount changes
    console.log('Component rendered with count:', count, 'and initialCount:', initialCount);
  }, [count, initialCount]); //initialCount is added to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```