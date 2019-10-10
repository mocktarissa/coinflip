import React from 'react';
import Coin from './Coin';
class Flip extends React.Component{
constructor(props){
    super(props);
    this.state={
        num:0,
        head:0,
        tail:0
        
        }
    this.flap=this.flap.bind(this);
}
flap(e){
    this.setState(
        {
            num: this.state.num? 0:1 
        }
    )
}
    render(){
    return <div>
        <Coin number={this.state.num}></Coin>
        <button onClick={this.flap}>Flip</button>
        </div>
}
}
export default Flip;