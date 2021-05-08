import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../Components/collection-item/collection-item.component';


const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: state.collections[ownProps.match.params.collectionId]
});

export default connect(mapStateToProps)(CollectionPage);