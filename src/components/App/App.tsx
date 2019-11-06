import * as React from "react";
import DynamicListContainer from "../DynamicRichList/DynamicListContainer";

export default class App extends React.Component<{}>{

    /*RENDERS*/
    render(){
        return (
            <div>
                <div>
                    <h1>Demo App</h1>
                </div>
                <div>
                    <DynamicListContainer
                        items={[
                            {id: "1", name: "Name 1", comment: "Comment 1"},
                            {id: "2", name: "Name 2", comment: "Comment 2"},
                            {id: "3", name: "Name 3", comment: "Comment 3"},
                            {id: "4", name: "Name 4", comment: "Comment 4"},
                            {id: "5", name: "Name 5", comment: "Comment 5"},
                            {id: "6", name: "Name 6", comment: "Comment 6"}
                        ]}
                    />
                </div>
            </div>
        );
    }
}