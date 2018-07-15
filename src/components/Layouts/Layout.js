import React from 'react'
import Aux from '../../HOC/Aux'
import classes from './Layout.css'

const layout = ( props )=>(
<Aux>
  <div>Toolbar,SideDrawer,Backbrop</div>
  <main className={classes.content}>
  {props.children}
  </main>
</Aux>
);

export default layout;
