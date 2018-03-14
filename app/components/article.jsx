import React from "react";

class Article extends React.Component{
    render() {
        return(
            <div className="article">
                {this.props.task} 
                {this.props.project} 
                {this.props.timeSpent} 
                <span className="glyphicon glyphicon-play"></span> 
            </div>
    );
    }
}
export default Article;