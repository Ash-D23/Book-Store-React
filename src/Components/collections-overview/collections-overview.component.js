import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collections-preview/collection-preview';
import './collections-overview.css'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    collections: state.shop.collections
  }
}

export default connect(mapStateToProps)(CollectionsOverview);
