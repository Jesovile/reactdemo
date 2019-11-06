import * as React from "react";
import "./CommentView.css";

interface CommentViewProps {
    commentText?: string;
    description?: string;
}

export default class CommentView extends React.Component<CommentViewProps>{

    /*RENDERS*/
    render(){
        return(
            <div className={"comment-view"}>
                <p className={"comment-view__comment"}>{this.props.commentText || "-"}</p>
                <span className={"comment-view__description"}>{this.props.description}</span>
            </div>
        );
    }
}