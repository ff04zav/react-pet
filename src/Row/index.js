import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Row extends Component {
    
    constructor(props) {
        super(props)
        this.state = {value: ""};
    }

    deleteItem = (e) => {
        this.props.removeHandler(this.props.index);
	}

    render() {
        return (<div className="row"><div className="label"> {this.props.item} </div> <button onClick={this.deleteItem}>Delete</button></div>)
    }
}

Row.propTypes = {
    item : PropTypes.string,
    index: PropTypes.number,
    removeHandler: PropTypes.func
}

export default Row;