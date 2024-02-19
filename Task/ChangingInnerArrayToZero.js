const changingArrayToZero =(array)=>{
    for(let count = 0; count< array.length; count++){
        let result = checkForZero(array[count]);
        if(result === true){
            let returns = changeAllArrayToZero(array[count]);
            array[count] = returns;
        }

    }
    return array;
}

const checkForZero =(array)=>{
    for (const key of array) {
        if(key === 0)return true;
    }
    return false;
}

const changeAllArrayToZero = (array)=>{
    for(let count = 0; count<array.length;count++){
        array[count] = 0;
    }
    return array;
}

module.exports={changingArrayToZero}