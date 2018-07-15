import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'
const controls=[
  {label:'salad',type:'salad'},
  {label:'bacon',type:'bacon'},
  {label:'cheese',type:'cheese'},
  {label:'meat',type:'meat'}
]

const buildcontrols=(props)=>{

return(
    <div className={classes.BuildControls}>
   <p>current price : {props.totalprice} $</p>
  {controls.map(ctrl=>(
       <BuildControl key={ctrl.label} label={ctrl.label} removed={()=>props.removeingredientHandler(ctrl.type)} added={()=>props.addingredientHandler(ctrl.type)} />
  ))}

    </div>
)}

export default buildcontrols;
