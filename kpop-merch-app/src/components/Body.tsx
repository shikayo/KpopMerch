import React from 'react';
import './Body.css'

export const Body: React.FC<{contentsource: string}> = ({
    contentsource
}) => (
  <section className="app-body">
    <section className="body-content">
        <img src='{contentsource}'></img>
    </section>
  </section>
);

export default Body;