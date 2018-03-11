import React from "react";

class OptionsSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = { optionsSelect: this.props.optionsSelect, value: ""};
        this.onChange = this.onChange.bind(this);
    }
    
        onChange(e) {
            var value = e.target.value;
            this.setState({value});
        }
    
    render() {
        return(
            <select className = "form-control" value={this.state.value} onChange={this.onChange}>
                {
                    this.state.optionsSelect.map(function(option){
                    return <option key={option}>{option}</option>
                    })
                }
            </select>
        );
    }
}
export default OptionsSelect;