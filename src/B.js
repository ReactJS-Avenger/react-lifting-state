import React from 'react';

class B extends React.Component{
    textChange=(event)=>{
        this.props.textChange(event.target.value)
    }
    render(){    
        return(
            <input type="text" onChange={this.textChange}></input>
        )
    }
}
export default B;