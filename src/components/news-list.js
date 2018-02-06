import React from 'react';
import _ from 'lodash';

const NewsList = props => {
  //const { news } = props;
  return (
    <div className="col-md-4">
      {_.map(props.news, n => (
        <h2 key={n.id} onClick={() => props.onNewsSelect(n)}>
          {' '}
          {n.category}
        </h2>
      ))}
    </div>
  );
};

export default NewsList;
