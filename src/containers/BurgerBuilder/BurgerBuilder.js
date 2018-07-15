import React,{Component} from 'react'
import Aux from '../../HOC/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const PRICING={
   salad:1,
   bacon:1.5,
   cheese:2,
   meat:3
 }

class BurgerBuilder extends Component{
constructor(props){
 super(props)

 this.state ={
   ingredients :{
   salad:0,
   bacon:0,
   cheese:0,
   meat:0
 },
   totalprice:4,


   }
}


addingredientHandler =(type)=>{
//console.log(this.state.ingredients[type]);





const oldcount=this.state.ingredients[type];

const updatedcount=oldcount + 1;
const copyingredients= {
  ...this.state.ingredients
}
copyingredients[type] = updatedcount
const ingredientprice=PRICING[type];
const oldprice=this.state.totalprice;
const newprice=ingredientprice + oldprice;
console.log(newprice);
this.setState({ingredients:copyingredients,totalprice:newprice})

//const updatedcount=oldcount + 1;
//const updatedingredients={
  //...this.state.ingredients
//}
 //updatedingredients[type]=updatedcount;
//this.setState({ingredients:updatedingredients})



}


removeingredientHandler=(type)=>{

const oldcount=this.state.ingredients[type]
const updatedcount=oldcount -1;
const copyingredients={
  ...this.state.ingredients
}


copyingredients[type]=updatedcount;

const ingredientprice=PRICING[type];
const oldprice=this.state.totalprice;
const newprice=oldprice-ingredientprice;
console.log(newprice);


if(copyingredients[type]>=0){
this.setState({ingredients:copyingredients,totalprice:newprice})
}}


  render(){
    return(
      <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls  addingredientHandler={this.addingredientHandler} removeingredientHandler={this.removeingredientHandler} totalprice={this.state.totalprice}/>
      </Aux>
    )
  };
}

export default BurgerBuilder;
