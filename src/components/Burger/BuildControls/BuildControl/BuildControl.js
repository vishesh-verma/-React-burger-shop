import React from 'react'
import classes from './BuildControl.css'
const buildcontrol=(props)=>{
return(
  <div className={classes.BuildControl}>
           <div className={classes.Label}>{props.label}</div>
           <button onClick={props.removed} className={classes.Less}>Remove</button>
           <button onClick={props.added} className={classes.More}>Add</button>
  </div>

)};


export default buildcontrol;
