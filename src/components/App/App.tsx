import * as React from "react";
import DynamicListContainer from "../DynamicRichList/DynamicListContainer";
import "./App.css";

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
                        items={generateItems(20)}
                    />
                </div>
            </div>
        );
    }
}

// todo stub for testing
function generateItems(count) {
    const result = [];
    for( let i=0; i<count; i++){
        result[i] = {
            id: `${i}`,
            name: `Name ${i}`,
            comment: `Comment ${i}`,
            description: i % 2 === 0 ? `Description about comment ${i}` : ""
        };
    }
    return result;
}