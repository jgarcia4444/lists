
const removeItem = itemName => {
    console.log("remove item action triggerred")
    return {
        type: "REMOVE_ITEM",
        itemName
    }
}

export default removeItem;