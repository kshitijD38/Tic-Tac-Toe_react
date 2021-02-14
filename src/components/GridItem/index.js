import { Component } from 'react';
import './style.css';

class GridItem extends Component {
    // constructor (props){
    //     super(props);
    // }
    settingID(x, y){
        if(x==0 && y==1){
            return "side1";
        }
        else if(x==2 && y==1){
            return "side2";
        }else if(x==1 && y==0){
            return "ub1"
        }else if(x==1 && y==2){
            return "ub2"
        }else if(x==1 && y==1){
            return "mid";
        }
    }
    render(){
        return (
            <div id={this.settingID(this.props.rowIndex, this.props.colIndex)} className = "grid-item" onClick={()=>
            {this.props.handlePlayerClick(this.props.rowIndex, this.props.colIndex)}}>
                {this.props.col}
            </div>
        )
    };
}
export default GridItem;