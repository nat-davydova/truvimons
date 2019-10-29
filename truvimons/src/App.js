import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';

import './App.scss';

library.add(fab);

const App = () => {

  return (

      <Layout>
          <Home/>
      </Layout>

  );

};

export default App;
