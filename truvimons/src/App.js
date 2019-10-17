import React from 'react';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './App.scss';

library.add(fab);

function App() {

  return (

      <Layout>
          <Home/>
      </Layout>

  );

}

export default App;
