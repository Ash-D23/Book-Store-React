import { Link } from "react-router-dom";
import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.css'

const CollectionPreview = ({ id,title, items}) => (
<div className='collection-preview'>
  <Link to={`/shop/${id-1}`} className='title'>{title.toUpperCase()}</Link>
  <div className='preview'>
    {items
      .filter((item, idx) => idx < 4)
      .map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
  </div>
</div>
);

export default CollectionPreview;
