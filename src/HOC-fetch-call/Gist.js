import React from 'react';

const Gist = ({id, html_url, files}) => {
  console.log('gist: '+JSON.stringify(files));
  return(
    <div>
    <a href={html_url}>{id}</a>
    </div>
  );
};

export default Gist;
