

const saveStagedList = stagedList => {
    return {
        type: "SAVE_STAGED_LIST",
        stagedList
    }
}

export default saveStagedList;