import React from "react";
import ReactDOM from "react-dom";

import propsValue from "./config.js";
import OptionsSelect from "./components/optionsSelect.jsx";
import NameTaskInput from "./components/nameTaskInput.jsx";
import Button from "./components/button.jsx";
import Article from "./components/article.jsx";

import {connect} from "react-redux";
import setTimeSpentAction from "./actions/action";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            nameProject: "",
            nameTask: "",
            timeSpent: "",
            timeRange: "",

            btnValue: "Start",
            btnClassName: "btn btn-success",
            valueTimer: "",

            running: false,
            elapsed: 0,
            lastTick: 0,
            startTick: 0,
            endTick: 0
        };

        this.onChangeButton = this.onChangeButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.tick = this.tick.bind(this);
    }

    onChangeButton(e) {
        const val = e.target.value;
        const btnValue = (this.state.btnValue === "Start")?"Stop":"Start";
        const btnClassName = (this.state.btnClassName === "btn btn-success")?"btn btn-danger":"btn btn-success";
        this.setState({btnValue: btnValue, btnClassName: btnClassName});
        (this.state.btnValue === "Start")?this.handleStart():this.handleStop();
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        if(this.state.running) {
            let now = Date.now();
            let diff = now - this.state.lastTick;
            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now,
            });
        }
    }

    handleStart() {
        this.setState({
            title: new Date().toLocaleString("en-US", {month: 'short',day: 'numeric', weekday: 'short'}),
            running: true,
            lastTick: Date.now(),
            startTick: new Date().getHours()+'.'+new Date().getMinutes()
        });
    }

    handlePause() {
        this.setState({ running: false })
    }

    handleStop() {
        const screenTimer = document.querySelector("div .showTimer");
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0,
            valueTimer: screenTimer.innerHTML,
            endTick: new Date().getHours()+'.'+new Date().getMinutes()

        })
    }

    format(msec) {
        let sec = (Math.floor(msec / 1000)) % 60;
        let min = Math.floor((msec / 1000) / 60);
        let hour = Math.floor(min / 60);

        return `${hour > 9 ? hour : '0' + hour} h ${min > 9 ? min : '0' + min} min ${sec > 9 ? sec : '0' + sec} sec`;
    }

    handleSubmit(e) {
        e.preventDefault();
        var task = this.refs.nameTask.state.value;
        var project = this.refs.nameProject.state.value;
        this.setState({nameProject: project, nameTask: task});

        if(this.state.btnValue === "Start"){
            let elemsForMap={
                title:  this.state.title,
                nameTask: this.state.nameTask,
                nameProject: this.state.nameProject,
                timeSpent: this.state.timeSpent,
                valueTimer: this.state.valueTimer,
                diffTick: this.state.startTick+'-'+this.state.endTick,
            }; 
            this.props.setTimeSpentFunction(this.state.valueTimer)
            const articleDiv = document.querySelector("div.article");
            const title = document.createElement("h3");
            const elemPlay = document.createElement("span");
            const elemBr = document.createElement("br");
            for (let key in elemsForMap) {
                const arcticleDiv = document.createElement("div");
                const elem = document.createElement("span");
                let elemText = document.createTextNode(elemsForMap[key]);
                elem.appendChild(elemText);
                elem.className = "spanElem";
                articleDiv.appendChild(elem);
            };
            elemPlay.className="glyphicon glyphicon-play spanElem";
            articleDiv.appendChild(elemPlay);
            articleDiv.appendChild(elemBr);
        }
    }

    

    render() {
        let time = this.format(this.state.elapsed);

        return(
            <div className="container-fluid">
                <form className = "form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <NameTaskInput ref="nameTask" />
                    </div>
                    <div className="form-group">
                        <OptionsSelect ref="nameProject" optionsSelect={propsValue.optionsSelect}/>
                    </div>
                    <div className="form-group">
                        <div className="showTimer">{time}</div>
                    </div>
                    <Button type="submit" onClick={this.onChangeButton} className={this.state.btnClassName}>{this.state.btnValue}</Button> 
                </form>
                <hr/>
                <div className="article"></div>
                <Article 
                    task={this.props.task} 
                    project={this.props.project} 
                    timeSpent={this.props.timeSpent} 
                    setTimeSpent={this.props.setTimeSpentFunction}
                />
            </div>);
    }
}

function mapStateToProps(state){
    return {
        task: state.userInfo.task,
        project: state.userInfo.project,
        timeSpent: state.userInfo.timeSpent,
    }
}

function mapDispatchToProps(dispatch){
    return{
        setTimeSpentFunction: timeSpent => {
            dispatch(setTimeSpentAction(timeSpent))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
// ReactDOM.render(<App />, document.getElementById("app"))