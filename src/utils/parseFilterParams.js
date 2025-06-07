const parseContactType = (value) => {
    const isString = typeof value === 'string';
    if (!isString) return;

    const isEnum = (value) => ['work', 'home', 'personal'].includes(value);

    if (isEnum(value)) return value;
};

const parseIsFavourite = (value) => {
    if (typeof value !== 'string') return;

    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;

    return;
};

export const parseFilterParams = (query) => {
    const { isFavourite, contactType } = query;

    const parsedContactType = parseContactType(contactType);
    const parsedIsFavourite = parseIsFavourite(isFavourite);

    return {
        isFavourite: parsedIsFavourite,
        contactType: parsedContactType,
    };
};