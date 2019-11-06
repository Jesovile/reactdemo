import * as React from "react";
import {ListItem} from "../../index";
import "./ListItemView.css";

interface ListItemViewProps {
    item: ListItem;
    toggleModal?: (e: React.SyntheticEvent<HTMLElement>) => void;
}


export default class ListItemView extends React.Component<ListItemViewProps>{

    /*RENDERS*/
    render(){
        const item = this.props.item;
        return(
            <div className={"list-item"}>
                <div className={"list-item__name"}>{item.name}</div>
                <div>
                    <button onClick={this.props.toggleModal}>Comment</button>
                </div>
            </div>
        );
    }
}