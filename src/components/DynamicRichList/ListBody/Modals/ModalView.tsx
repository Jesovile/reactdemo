import * as React from "react";
import "./ModalView.css";

interface ModalViewProps {
    top?: number;
    bottom?: number;
    left: number;
    height?: number;
    width?: number;
}

/*this modal panel is opened up frm parent node
* bottom is used for set start Y-coordinate for modal bottom
* height may be responsive
* WARNING! This modal is without close button. Implement it outside of this*/
export default class ModalView extends React.Component<ModalViewProps>{

    /*RENDERS*/
    render(){
        return(
            <div
                className={"modal-container"}
                style={{
                    bottom: this.props.bottom,
                    left: this.props.left,
                    height: this.props.height || "auto",
                    width: this.props.width || "auto",
                }}
            >
                {this.props.children}
            </div>
        );
    }
}