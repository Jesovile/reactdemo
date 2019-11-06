import * as React from "react";
import {ListItem} from "../index";
import ListItemView from "./ListItemView/ListItemView";
import ModalView from "./Modals/ModalView";

interface ListBodyProps {
    items: ListItem[];
}

interface ListBodyState {
    modalParentCoords: ClientRect;
    isModalOpen: boolean;
}

export default class ListBody extends React.Component<ListBodyProps, ListBodyState>{
    constructor(props){
        super(props);
        // init state
        this.state = {modalParentCoords: {top: 0, left: 0, right: 0, bottom: 0, height: 0, width: 0}, isModalOpen: false}
    }

    /*HANDLERS*/
    private readonly handleEvent = (event: React.SyntheticEvent<HTMLElement>) => {
        const target = event.nativeEvent.target as HTMLElement;
        const targetCoords: ClientRect = target.getBoundingClientRect();
        event.stopPropagation();
        this.setState({
            isModalOpen: true,
            modalParentCoords: targetCoords
        });
    };

    private readonly closeModal = () => {
        this.setState({isModalOpen: false});
    };

    /*RENDERS*/
    // use window.innerHeight for calculating css-bottom from ClientRect.bottom
    // css-bottom and ClientRect.bottom are very different values
    private readonly renderModal = (isRender: boolean) => {
        if (isRender) {
            return (
                <ModalView
                    left={this.state.modalParentCoords.left}
                    bottom={window.innerHeight - this.state.modalParentCoords.bottom + this.state.modalParentCoords.height + 5}
                />
            );
        } else {
            return null;
        }
    };

    private readonly renderItems = (items: ListItem[]) => {
        if(items){
            return items.map((item, index) => (
                <ListItemView
                    key={`LIV${index}`}
                    item={item}
                    toggleModal={this.handleEvent}
                />
            ));
        } else {
             return null;
        }
    };

    render(){
        return(
            <div
                onClick={this.closeModal}
            >
                {this.renderItems(this.props.items)}
                {this.renderModal(this.state.isModalOpen)}
            </div>
        );
    }
}