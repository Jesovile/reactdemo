import * as React from "react";
import {ListItem} from "./index";
import ListHeader from "./ListHeader/ListHeader";
import ListBody from "./ListBody/ListBody";

interface DynamicListContainerProps {
    items: ListItem[];
}

export default class DynamicListContainer extends React.Component<DynamicListContainerProps>{

    /*RENDERS*/
    render(){
        return(
            <div>
                <ListHeader/>
                <ListBody items={this.props.items}/>
            </div>
        );
    }
}

