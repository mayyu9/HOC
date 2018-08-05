import React from 'react';
import withGists from './withGists';
import Gist from './Gist';

/* https://hackernoon.com/higher-order-components-hocs-for-beginners-25cdcf1f1713*/

const Gists = ({gists}) => {
  //console.log('Gists:'+ JSON.stringify(gists));
  return(
    <div>
    <h1>GISTS</h1>
    <div>
    {gists.map(gist =>
      <div key={gist.id}>
        <Gist {...gist} />
      </div>
    )}
    </div>
    </div>
  );
}

const GistLists = withGists(Gists);

export default GistLists;
