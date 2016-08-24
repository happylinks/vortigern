import * as React from 'react';

interface IProps {
  description?: string;
  owner?: string;
  link?: string;
}

const Gist = (props: IProps) => {
  const { description, owner, link } = props;

  if (!description || !owner || !link) {
    return null;
  }
  return (
    <div className="ui card">
      <div className="content">
        <div className="header" role="owner">{owner}</div>
        <div className="description" role="description">{description}</div>
      </div>
      <a className="ui bottom attached button" role="link" href={link} target="_blank">
        View
      </a>
    </div>
  );
};

export default Gist;
