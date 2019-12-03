import React from 'react';
//棋子
class Chess extends React.Component{ 
    constructor(){
        super();
        this.state = {
            value:null
        }
    }
    render(){
        return(
            <button className="chess" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

 export default Chess;