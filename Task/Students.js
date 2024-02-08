const testScores = (array)=>{
    const result = array.filter((element)=>element >= 70)
    return result;

}

const increaseStudentsScore = (array)=>{
    const result = array.map((element) => element + 5)
    return result
}


const squareNumber = (array)=>{
    const result = array.map((element)=>Math.pow(element,2 ))
    return result;
}
const distributedBooks =(listOfMember,listOfBook) =>{
    let result = [];
    let count = 0;
    for (const name of listOfMember) {
        let book = listOfBook[count];
            result[count] = {name,book};
            count++;

    }
    return result;
}
const afternoonClassTime =(time)=>{

    const result = time.filter((element => element.endsWith("PM")));

    return result;

}

const totalCategories = (expenses)=>{
    let result = 0;
    for (const key in expenses) {
        result+=expenses[key];
        
    }
    return result;
}



module.exports ={testScores,increaseStudentsScore,squareNumber,distributedBooks,afternoonClassTime,totalCategories}