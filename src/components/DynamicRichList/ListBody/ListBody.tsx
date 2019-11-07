import * as React from "react";
import {ListItem} from "../index";
import ListItemView from "./ListItemView/ListItemView";
import ModalView from "./Modals/ModalView";
import CommentView from "./ItemPartsViews/CommentView/CommentView";
import "./ListBody.css";

interface ListBodyProps {
    items: ListItem[];
}

interface ListBodyState {
    modalParentCoords: ClientRect;
    currentItem: ListItem;
    isModalOpen: boolean;
    containerRootNode: HTMLElement;
}

/*This is example of full-height container
* It's mean that this component has fixed height from his top render coordinate to the bottom of viewport
* This type of container may be used for lists, when you need scroll (as this example)*/
export default class ListBody extends React.Component<ListBodyProps, ListBodyState>{
    constructor(props){
        super(props);
        // init state
        this.state = {
            modalParentCoords: {top: 0, left: 0, right: 0, bottom: 0, height: 0, width: 0},
            isModalOpen: false,
            currentItem: null,
            containerRootNode: null
        };
        // container root reference
        this.containerRootRef = React.createRef();

    }

    /*CONSTANTS*/
    private readonly containerRootRef: React.RefObject<HTMLDivElement>;

    /*LIFECYCLE METHODS*/
    componentDidMount(){
        if(this.containerRootRef){
            this.setState({containerRootNode: this.containerRootRef.current});
        }
    }

    /*UTILS*/
    // calculate container height from top to the end of viewport
    // QUESTION: how to observe window resize event correctly for recalculating, when event is emitted
    private readonly calculateHeight = (containerTop: number) => {
        return window.innerHeight - containerTop;
    };

    /*HANDLERS*/
    private readonly handleEvent = (event: React.SyntheticEvent<HTMLElement>, itemId: string) => {
        const target = event.nativeEvent.target as HTMLElement;
        const targetCoords: ClientRect = target.getBoundingClientRect();
        event.stopPropagation();
        this.setState({
            isModalOpen: true,
            modalParentCoords: targetCoords,
            currentItem: this.props.items.find((item) => item.id === itemId),
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
                >
                    <CommentView
                        commentText={this.state.currentItem ? this.state.currentItem.comment : null}
                        description={this.state.currentItem ? this.state.currentItem.description : null}
                    />
                </ModalView>
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
                    toggleModal={(event) => this.handleEvent(event, item.id)}
                />
            ));
        } else {
             return null;
        }
    };

    render(){
        return(
            <div
                ref={this.containerRootRef}
                onClick={this.closeModal}
                className={"list-body"}
                style={{
                    height: this.state.containerRootNode ?
                        this.calculateHeight(this.state.containerRootNode.getBoundingClientRect().top)
                        :
                        "auto"
                }}
            >
                {this.renderItems(this.props.items)}
                {this.renderModal(this.state.isModalOpen)}
            </div>
        );
    }
}