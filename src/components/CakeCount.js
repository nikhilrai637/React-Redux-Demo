import React from 'react'
import { buyCake } from './Redux/cakes/cakeActions'
import {connect} from 'react-redux'
function cakeCount(props) {
    return (
        <div>
            <h2>Cake_Count : {props.numOfCakes}</h2>
            <button onClick = {props.buyCake}>Cake_Count</button>
        </div>
    )
}
const mapStateToProps =  state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake :  () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(cakeCount)
