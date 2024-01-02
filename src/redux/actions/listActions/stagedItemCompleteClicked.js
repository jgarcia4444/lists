
const stagedItemCompleteClicked = itemId=> {
    return {
        type: "ITEM_COMPLETE_CLICKED",
        itemId
    }
}

export default stagedItemCompleteClicked;