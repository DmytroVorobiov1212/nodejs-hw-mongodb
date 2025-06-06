import { SORT_ORDER } from "../constants/index.js";

const parseSortOrder = (sortOrder) => {
    const isKnowOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
    if (isKnowOrder) return sortOrder;
    return SORT_ORDER.ASC;
};

const parseSortBy = (sortBy) => {
    const keysOfContacts = [
        '_id',
        'name',
        'phoneNumber',
        'email',
        'isFavourite',
        'contactType',
    ];

    if (keysOfContacts.includes(sortBy)) {
        return sortBy;
    }
    return '_id';
};

export const parseSortParams = (query) => {
    const { sortBy, sortOrder } = query;

    const parsedSortOrder = parseSortOrder(sortOrder);
    const parsedSortBy = parseSortBy(sortBy);

    return {
        sortBy: parsedSortBy,
        sortOrder: parsedSortOrder,
    };
};