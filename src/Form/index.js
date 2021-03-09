
import React, {Component} from 'react'

class Form extends Component {
    
    constructor(props) {
        super(props)
        this.state = {value: ""};
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log("");
        this.props.onChange(this.state.value);
        this.setState({value: ""});
    }
    
    onChange = (e) => {
        const {value} = e.target;
        this.setState({value: value});
    }


    render() {

        return (<form onSubmit={this.onSubmit}>
            <input onChange={this.onChange} 
                name="name"
                value={this.state.value} 
                placeholder="Name"/>
            <button>Add</button>
        </form>
        );
    }
}

export default Form;