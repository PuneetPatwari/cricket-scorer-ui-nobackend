const updateOverDetails = (runs) => {
    return {
        type: 'UPDATE_OVER_DETAILS',
        runs: runs
    }
}

const updateScoreDetails = (runs) => {
    return {
        type: 'UPDATE_SCORE_DETAILS',
        runs: runs
    }
}

const swapBatsman = (runs) => {
    return {
        type: 'SWAP_BATSMAN',
        runs: runs
    }
}

const updateOverStatus = (runs) => {
    return {
        type: 'UPDATE_OVER_STATUS',
        runs: runs
    }
}

export { updateOverDetails, updateScoreDetails, swapBatsman, updateOverStatus };
