import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'
const burger= (props)=>{

let transformedingredients=Object.keys(props.ingredients)
.map(ingkey=>{
  return [...Array(props.ingredients[ingkey])].map((_,i)=>{
     return   <BurgerIngredient key={ingkey + i} type={ingkey} />
  })
}).reduce((req,cur)=>{
  console.log('first -', req , 'second -' ,cur );
  return  req.concat(cur)

},[]);

if (transformedingredients.length ===0) {
  transformedingredients = <p> please start adding some ingredients </p>
}

console.log(transformedingredients)

return(

  <div className={classes.Burger}>

<BurgerIngredient type={'bread-top'} />
{transformedingredients}
<BurgerIngredient type={'bread-bottom'} />
  </div>
);
}


export default burger;
