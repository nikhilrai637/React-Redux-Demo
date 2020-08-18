import React ,{useState} from 'react'
import { buyCake } from './Redux/cakes/cakeActions'
import {connect} from 'react-redux'
function NewCakeContainer(props) {

          const [number,setnumber] =    useState(1)
    return (
        <div>
            <h2>Cake_Count : {props.numOfCakes}</h2>
            <input type = "text" value = {number} onChange = { e => setnumber(e.target.value)} ></input>
            <button onClick = { () => props.buyCake(number)}>Cake_Count</button>
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
        buyCake :  (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
