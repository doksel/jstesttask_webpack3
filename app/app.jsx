import React from "react";
import ReactDOM from "react-dom";
import selectProject from "./config.js";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nameProject: "",
            nameTask: "",
            timeSpent: "",
            timeRange: "",
            btnValue: "Start",
            btnClassName: "btn btn-success"
        };
        
        this.onCreateSelect = this.onCreateSelect.bind(this);
        this.onChangeButton = this.onChangeButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onCreateSelect(){
        var select = document.querySelector("select");
        console.log(selectProject);
        for (let i=0; i<selectProject.length; i++){
            if(select.options.length <= selectProject.length){
            var option = document.createElement("option");
            option.innerHTML = selectProject[i];
            select.appendChild(option);
            }
        }
    }
    
    onChangeButton(e) {
        const val = e.target.value;
        const btnValue = (this.state.btnValue === "Start")?"Stop":"Start";
        const btnClassName = (this.state.btnClassName === "btn btn-success")?"btn btn-danger":"btn btn-success";
        this.setState({btnValue: btnValue, btnClassName: btnClassName});
    }

    handleSubmit(e) {
        e.preventDefault();
        var task = this.refs.nameTask.value;
        var project = this.refs.nameProject.value;
        this.setState({nameProject: project, nameTask: task});

        const articleDiv = document.querySelector("div.article");
        const elem = document.createElement("h3");
        let elemText = document.createTextNode(task + ' ' + project);
        elem.appendChild(elemText);
        articleDiv.appendChild(elem);
      }

    render() {
        return(
            <div className="container-fluid">
                <form className = "form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className = "form-control" type="text" defaultValue="" ref="nameTask"  placeholder="What are your working on? "/>
                    </div>
                    <div className="form-group">
                        <select className = "form-control" ref="nameProject" onClick={this.onCreateSelect}>
                            <option defaultValue>selest project</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="showTimer"></div>
                    </div>
                    <button type="submit" onClick={this.onChangeButton} className={this.state.btnClassName}>{this.state.btnValue}</button> 
                </form>
                <span className="glyphicon glyphicon-play"></span>
                <div className="article"></div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById("app"))