import React from "react";

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = { running: false, elapsed: 0, lastTick: 0};

        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.timer = this.timer.bind(this);
    }
    timer() {
        if(this.state.running) {
            let now = Date.now();
            let diff = now - this.state.lastTick;

            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            });
        }
    }

    startTimer() {
        this.setState({
            running: true,
            lastTick: Date.now()
        });
    }

    pauseTimer() {
        this.setState({ running: false })
    }

    stopTimer() {
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0
        })
    }

    render(){
        return(
            <div>
            </div>
        );
    }
}
export default Timer;











// class Timer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = { stat : 0, ms : 0};
//         this.startstop = this.startstop.bind(this);
//         this.swreset = this.swreset.bind(this);
//         this.display = this.display.bind(this);

//     }

//     startstop() {
//     if (this.state.stat == 0) {
//         this.setState({stat : 1});
//         then = new Date();
//         then.setTime(then.getTime() - this.state.ms);
//     } else {
//         this.setState({stat : 0});
//         now = new Date();
//         this.setState({ ms : now.getTime() - then.getTime()});
//         screenTimer.innerHTML = this.state.ms;
//         }
//     }
//     swreset() {
//         this.setState({stat : 1, ms:0});
//         screenTimer.innerHTML = this.state.ms;
//     }
//     display() {
//         setTimeout("display();", 50);
//     if (this.state.stat == 1)  {
//         now = new Date();
//         this.setState({ ms : now.getTime() - then.getTime()});
//         screenTimer.innerHTML = this.state.ms;
//         }
//     }

        
//     render() {
//         return(
//             <div className = "time">
//                 {/* <span className="hh"></span>:<span className="mm"></span>:<span className="ss"></span> */}
//             </div>
//         );
//     }
// }
// export default Timer;