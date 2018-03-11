import React from 'react';

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} {...props}></button>
    );
};

export default Button;







// import React from "react";

// class Button extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {btnValue: "Start", btnClassName: "btn btn-success"};
//         this.onChangeButton = this.onChangeButton.bind(this);
//     }

//     onChangeButton(e) {
//         const val = e.target.value;
//         const btnValue = (this.state.btnValue === "Start")?"Stop":"Start";
//         const btnClassName = (this.state.btnClassName === "btn btn-success")?"btn btn-danger":"btn btn-success";
//         this.setState({btnValue: btnValue, btnClassName: btnClassName});
//         // this.Timer.startstop();
//     }

//     render() {
//         return(
//             <button onClick={this.onChangeButton} className={this.state.btnClassName}>{this.state.btnValue}</button>
//         );
//     }
// }
// export default Button;