import React from "react";

class NameTaskInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        var val = e.target.value;
        this.setState({value: val});
    }

    render() {
        return(
            <input className = "form-control" type="text"  value={this.state.value} onChange={this.onChange}  placeholder="What are your working on? " />
        );
    }
}
export default NameTaskInput;