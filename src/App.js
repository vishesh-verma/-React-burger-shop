import React, { Component } from 'react';

import Layout from './components/Layouts/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import BuildControls from './components/Burger/BuildControls/BuildControls'

class App extends Component {
  render() {
    return (
      <div>
<Layout>
<BurgerBuilder />

</Layout>
      </div>
    );
  }
}

export default App;
