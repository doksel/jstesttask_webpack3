import React from "react";

class NameTaskInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        var value = e.target.value;
        this.setState({value});
    }

    render() {
        return(
            <input className = "form-control" type="text"  value={this.state.value} onChange={this.onChange}  placeholder="What are your working on? " />
        );
    }
}
export default NameTaskInput;