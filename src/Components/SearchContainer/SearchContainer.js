import React from 'react';
import './SearchContainer.css'
import { connect } from 'react-redux';

const SearchbarContainer = ({searchitems}) => (
    <div className="search-container">
      <div className="search-items">
        {searchitems.map(item => <li>{item}</li>)}
      </div>
    </div>
)
const mapStateToProps = state => {
  const term = state.search.searchterm
  console.log(state)
  const items = state.search.searchitems

  return {
    searchitems: items.filter(name => name.toLowerCase().includes(term))
  }
};

export default connect(mapStateToProps)(SearchbarContainer);
