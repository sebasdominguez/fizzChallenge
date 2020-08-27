import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {fetchMenu} from '../../store/actions/Menu'

const mapStateToProps = (state) => {
  return {
  	categories: state.menuReducer.categories
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
  	menu: () => dispatch(fetchMenu())
  }
};

const HeaderContainer = ({menu, categories}) => {

  useEffect(() => {
  	menu();
  }, []);

  return (
    <Header categories={categories}/>
  )
};

export default connect(mapStateToProps,MapDispatchToProps)(HeaderContainer);
