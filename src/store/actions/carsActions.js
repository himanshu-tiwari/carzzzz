export const setFilter = (data) => {
    return {
        type: 'FILTER_CARS',
        data
    };
};

export const changeLimit = (data) => {
    return {
        type: 'CHANGE_LIMIT_OF_CARS',
        data
    };
};

export const setSortOrder = (data) => {
    return {
        type: 'SORT_CARS',
        data
    };
};

export const toggleSelect = (data) => {
    return {
        type: 'TOGGLE_SELECT',
        data
    };
};