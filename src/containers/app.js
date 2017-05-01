import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Page from './page';
import styles from './app.css';

export default () => {
  return (
    <Router>
      <div>
        <ul className={styles.menu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page">Page</Link></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />
      </div>
    </Router>
  );
};
