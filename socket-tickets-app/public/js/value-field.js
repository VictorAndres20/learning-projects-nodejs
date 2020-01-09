function getValue(id){
    return document.getElementById(id).value;
}

function cleanValue(id){
    document.getElementById(id).value = '';
}

function validateBlankValue(id){
    if(document.getElementById(id).value === "")
        return false;
    return true;
}