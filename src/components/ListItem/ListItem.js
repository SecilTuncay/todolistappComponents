import React from "react";
import classes from './ListItem.module.css';

const ListItem = (props) => {
    return (
        <ul>
            {
                props.list.map((listElement, index) => <li key={index} onClick={props.listClicked} className={classes.ListItem}>{listElement}{index}</li>)
            }
            {
                console.log("log ----> : ListItem -> props.list", props.list)

            }
        </ul >
    )
}

export default ListItem;
