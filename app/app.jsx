import React from "react";
import ReactDOM from "react-dom";

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
        
        this.onChangeButton = this.onChangeButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeButton(e) {
        var val = e.target.value;
        let btnValue = (this.state.btnValue === "Start")?"Stop":"Start";
        let btnClassName = (this.state.btnClassName === "btn btn-success")?"btn btn-danger":"btn btn-success";
        this.setState({btnValue: btnValue, btnClassName: btnClassName});
    }

    handleSubmit(e) {
        e.preventDefault();
        var task = this.refs.nameTask.value;
        var project = this.refs.nameProject.value;
        this.setState({nameProject: project, nameTask: task});
        // alert("Имя: " + task + ' ' + project);

        var articleDiv = document.querySelector("div.article");
        var elem = document.createElement("h3");
        var elemText = document.createTextNode(task + ' ' + project);
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
                        <select className = "form-control" ref="nameProject">
                            <option defaultValue>selest project</option>
                            <option value = "timer">timer</option>
                            <option value = "calculator">calculator</option>
                            <option value = "game">game</option>
                            <option value = "application">application</option>
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