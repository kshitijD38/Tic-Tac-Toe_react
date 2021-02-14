import { Component } from 'react';
import './style.css';

class FooterButton extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
        <div id="button">
            <button onClick={this.props.reload}>Restart</button>
        </div>
        )
    }
}
export default FooterButton;