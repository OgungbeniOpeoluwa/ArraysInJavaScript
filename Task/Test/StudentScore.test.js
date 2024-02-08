const {testScores,increaseStudentsScore,squareNumber,distributedBooks,afternoonClassTime,totalCategories} = require("../Students")
test("filter score greater and equal to 70",()=>{
    let testScore = [45,65,78,60,80,95,43,12,89,100];
    let result = testScores(testScore);
    expect(result).toEqual([78,80,95,89,100]);
})

test("increase the score of the student with 5 points",()=>{
    let studentScore = [85,92,78,88,95];
    let result = increaseStudentsScore(studentScore);
    expect(result).toEqual([90,97,83,93,100]);
}
)
test("Find the square of the array",()=>{
    let score = [2,4,6,8,10];
    let result = squareNumber(score);
    expect(result).toEqual([4,16,36,64,100]);
})

test("distribute list of books to members",()=>{
    let listOfMembers = ["Emily","Jack","Sophia","Daniel"];
    let listOfBooks = ["my love story","heartBreak","Shallow","Programming"];
    let result = distributedBooks(listOfMembers,listOfBooks);
    expect(result).toEqual([{name :"Emily",book:"my love story"},{name:"Jack",book:"heartBreak"},{name:"Sophia",book:"Shallow"},{name:"Daniel", book:"Programming"}])
})

test("Find list of time classes offer in the afternoon",()=>{
    let time = ["9:00AM","11:00AM","1:00PM","3:00PM","5:00PM"];
    let result = afternoonClassTime(time);
    expect(result).toEqual(["1:00PM","3:00PM","5:00PM"])
})

test("calculate the amount spent on all Categories",()=>{
    let expensesList = {groceries:150,diningOut:100,transportation:50,entertainment:80}
    let result = totalCategories(expensesList);
    expect(result).toBe(380);

})