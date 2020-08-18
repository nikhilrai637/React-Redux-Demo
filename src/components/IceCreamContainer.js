import React from 'react'
import { buyIceCream } from './Redux/iceCream/iceCreamActions'
import {connect} from 'react-redux'
function IceCreamContainer(props) {
    return (
        <div>
            <h2>ICECREAM_Count : {props.numOfIceCream}</h2>
            <button onClick = {props.buyIceCream}>ICE_CREAM_Count</button>
        </div>
    )
}
const mapStateToProps =  state => {
    console.log(state)
    return {
        numOfIceCream : state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream :  () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
