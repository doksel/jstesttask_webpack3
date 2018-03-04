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
           
        this.onChangeNameProject = this.onChangeNameProject.bind(this);
        this.onChangeNameTask = this.onChangeNameTask.bind(this);
        this.onChangeButton = this.onChangeButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeNameTask(e) {
        var val = e.target.value;
        this.setState({nameTask: val});
    }
    
    onChangeNameProject(e) {
        var val = e.target.value;
        this.setState({nameProject: val});
    }

    onChangeButton(e) {
        var val = e.target.value;
        let btnValue = (this.state.btnValue === "Start")?"Stop":"Start";
        let btnClassName = (this.state.btnClassName === "btn btn-success")?"btn btn-danger":"btn btn-success";
        this.setState({btnValue: btnValue, btnClassName: btnClassName});
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Имя: " + this.state.nameTask  + ' ' + this.state.nameProject);
      }

    render() {
        return(
            <div className="container-fluid">
                <form className = "form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className = "form-control" type="text" value={this.state.nameTask}  placeholder="What are your working on? "/>
                    </div>
                    <div className="form-group">
                        <select className = "form-control" value={this.state.nameProject} >
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
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById("app"))