
export const saveToLocalStorageHelper = (key, value)=>{
    let data = JSON.parse(localStorage.getItem(key));

    if(Array.isArray(data))
        data.push(value);
    else
        data=[value];
    
    localStorage.setItem(key, JSON.stringify(data));
}

export const saveAllToLocalStorageHelper = (key, array)=>{    
    localStorage.setItem(key, JSON.stringify(array));
}