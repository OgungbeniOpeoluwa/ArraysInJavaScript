const returnCharacter = (input)=>{
    let obj = {};
    for(let count = 0; count < input.length; count++){
        let value = input.charAt(count);
        let result = countCharacter(value,input);
        obj[value]=result
    }
    return obj
}

function countCharacter(char, input){
    let result = 0;
    for(let count = 0; count <input.length;count++){
        if(input.charAt(count) === char){
            result++;
        }

    }
    return result;
}
module.exports = {returnCharacter};