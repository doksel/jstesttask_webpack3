import React from "react";
import ReactDOM from "react-dom";

import propsValue from "./config.js";
import OptionsSelect from "./components/optionsSelect.jsx";
import NameTaskInput from "./components/nameTaskInput.jsx";
import Timer from "./components/timer.jsx";
import Button from "./components/button.jsx";

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
        this.myTimer = this.myTimer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeButton(e) {
        const val = e.target.value;
        const btnValue = (this.state.btnValue === "Start")?"Stop":"Start";
        const btnClassName = (this.state.btnClassName === "btn btn-success")?"btn btn-danger":"btn btn-success";
        this.setState({btnValue: btnValue, btnClassName: btnClassName});
        this.Timer.startstop();
    }

    myTimer(){
        var ss = 0, mm = 0, hh = 0;
        clearInterval(timerId);
        const screenTimer = document.querySelector("div .showTimer");
        var timerId = setInterval(() => {
            if(ss<=60){
                screenTimer.innerHTML = hh + " h " + mm + " min " + ss + " sec";
                if(mm<=2){
                }else{ss = 0; mm = 0; hh++}
            }else{ss = 0; mm++;}
            ss++;
        }, 100);
        if (this.state.btnValue === "Stop") clearInterval(timerId);
    }

    handleSubmit(e) {
        e.preventDefault();
        var task = this.refs.nameTask.state.value;
        var project = this.refs.nameProject.state.value;
        this.setState({nameProject: project, nameTask: task});

        if(this.state.btnValue === "Start"){
            const articleDiv = document.querySelector("div.article");
            const elem = document.createElement("h3");
            let elemText = document.createTextNode(task + ' ' + project);
            elem.appendChild(elemText);
            articleDiv.appendChild(elem);
            this.setState({nameProject: "", nameTask: ""});
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <form className = "form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <NameTaskInput ref="nameTask" />
                    </div>
                    <div className="form-group">
                        <OptionsSelect ref="nameProject" value="" optionsSelect={propsValue.optionsSelect}/>
                    </div>
                    <div className="form-group">
                        <div className="showTimer"></div>
                    </div>
                    <div className="form-group">
                        <Timer />
                    </div>
                    <button type="submit" onClick={this.onChangeButton} className={this.state.btnClassName}>{this.state.btnValue}</button> 
                    {/* <Button/> */}
                </form>
                <span className="glyphicon glyphicon-play"></span>
                <div className="article"></div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById("app"))