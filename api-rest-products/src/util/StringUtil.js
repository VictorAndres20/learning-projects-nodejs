const isBlank = (text) => {
    if(text == null || text === "")
        return true;
    
    return false;
}

module.exports = {
    isBlank
}