// client/src/Recommendation.js

import React, { useEffect, useState } from 'react';

function Recommendation({ productId }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!productId) return;

    fetch(`http://localhost:5000/api/recommend/1`)
      .then(res => res.json())
      .then(data => setRelated(data))
      .catch(err => console.error('Error fetching recommendations:', err));
  }, [productId]);

  return (
    <div>
      <h3>You might also like:</h3>
      <ul>
        {related.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendation;