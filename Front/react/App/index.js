import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import GlobalStyle from './global-styles';
import Header from '../Header/HeaderContainer';
import Body from '../Body/BodyContainer';
import NotFound from '../NotFound/notFoundPage';

export default () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={`/`} component={Body} />
        <Route exact path={`/categories/:id`} component={NotFound} /> {/*Ruta no incluida para el challenge, pero queda preparada*/}
        <Route path={`*`} component={NotFound} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}