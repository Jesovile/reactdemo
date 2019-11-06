import * as React from "react";
import "./ListHeader.css";

interface ListHeaderProps{
    itemsCount?: number;
}

export default class ListHeader extends React.Component<ListHeaderProps>{

    /*RENDERS*/
    render(){
        return(
            <div className={"list-head"}>
                {/*header content panel*/}
                <div className={"list-head-content"}>
                    <div>
                        <h2 className={"list-head-content-header-leadtext"}>
                            Dynamic Item List
                        </h2>
                        <div className={"list-head-content-header-description"}>
                            {`There are ${this.props.itemsCount || 0} items`}
                        </div>
                    </div>
                    {/*action buttons panel*/}
                    <div className={"list-head-content-actionpanel"}>
                        <button>Refresh</button>
                    </div>
                </div>
            </div>
        );
    }
}