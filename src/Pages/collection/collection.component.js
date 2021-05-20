import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import CollectionItem from '../../Components/collection-item/collection-item.component';
import './collection-page.css'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='coll-page'>
      <Link className='title'>{title.toUpperCase()}</Link>
      <div className='coll-items'>
        {items.map(item => (
          <div className="coll-item">
          <CollectionItem key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {

return  {collection: state.shop.collections[ownProps.match.params.collectionId]}

}

export default connect(mapStateToProps)(CollectionPage);
