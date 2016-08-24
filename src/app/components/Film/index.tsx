import * as React from 'react';

interface IProps {
  title?: string;
  created?: string;
  releaseDate?: string;
  openingCrawl?: string;
}

const Film = (props: IProps) => {
  const { title, openingCrawl } = props;

  if (!title || !openingCrawl) {
    return null;
  }
  return (
    <div className="ui card">
      <div className="content">
        <div className="header" role="title">{title}</div>
        <div className="description" role="openingCrawl">{openingCrawl}</div>
      </div>
    </div>
  );
};

export default Film;
