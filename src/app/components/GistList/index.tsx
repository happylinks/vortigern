import * as React from 'react';

import Gist from '../Gist';

interface IProps {
  gists?: any;
}

const GistList = (props: IProps) => {
  if (!props.gists) {
    return null;
  }
  return (
    <div className="ui centered cards">
    {props.gists.map((gist) =>
      <Gist
        key={gist.id}
        description={gist.description}
        owner={gist.owner.login}
        link={gist.html_url}
      />
    )}
    </div>
  );
};

export default GistList;
