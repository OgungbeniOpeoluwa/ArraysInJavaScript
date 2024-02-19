const isSafe = (password)=>{
    //if(password.length >= 6){
        let pattern = /([A-Z]+)([a-z]+)([0-9]+)([\W]+)/
        return pattern.test(password)
    //}

}

module.exports ={isSafe}

