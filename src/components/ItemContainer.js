import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from './Redux/cakes/cakeActions'
import { buyIceCream } from './Redux/iceCream/iceCreamActions'
function ItemContainer(props) {
    return (
        <div>
            <h1> Item : {props.item} </h1>
            <button onClick = {props.buyItem}>BuyItem</button>
        </div>
    )
}
const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes 
    :state.iceCream.numOfIceCream

    return {
        item : itemState
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
const dispatchFunction = ownProps.cake 
   ? () => dispatch(buyCake())
   :() =>dispatch(buyIceCream())

   return{
       buyItem : dispatchFunction
   }
}




 
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
