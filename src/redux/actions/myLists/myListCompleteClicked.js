
const myListCompleteClicked = listInfo => {
    console.log("Action Triggered!")
    return {
        type: "MY_LIST_COMPLETE_CLICKED",
        listInfo,
    }
}

export default myListCompleteClicked;