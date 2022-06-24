const isObject = (payload) => {
    return typeof payload == 'object';
};

const getLabel = (payload) => {
    return isObject(payload) ? payload['label'] : payload;
};

export {
    isObject,
    getLabel,
}