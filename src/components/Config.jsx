import React from 'react';
import { Link } from 'react-router-dom';

const Config = () => (
  <div>
    <h1>CONFIG</h1>
    <Link id="new-edition-link" to="/config/new-edition/">
      <button>Create new edition</button>
    </Link>
  </div>
);

export default Config;
