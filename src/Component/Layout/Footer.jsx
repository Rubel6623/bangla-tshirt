import React from 'react';

const Footer = () => {
  const pass=Math.floor(Math.random()*1000);
  return (
    <div>
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
    </div>
  );
};

export default Footer;