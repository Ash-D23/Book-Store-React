import {toggleSearchbarHidden, Searchterm} from "../../redux/search/search.action"
import React from 'react';
import './Searchbar.css'
import { connect } from 'react-redux';

const Searchbar = ({toggleSearchHidden, Searchterm, term }) => (
    <div className="search-input">
      <input onFocus={toggleSearchHidden} type= 'text' value = {term} onChange = {(e) => {Searchterm(e.target.value)}} onBlur={toggleSearchHidden} placeholder = 'Search'/>
    </div>
)

const mapDispatchToProps = dispatch => ({
  toggleSearchHidden: () => dispatch(toggleSearchbarHidden()),
  Searchterm: (e) => dispatch(Searchterm(e))
});

const mapStateToProps = state => {
  console.log(state);
  return {
  term: state.searchterm
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
