const{changingArrayToZero} = require("../ChangingInnerArrayToZero")
test("changing all inner array that have atleast one zero to zero",()=>{
    let array = [[0,5],[2,0]];
    let result = changingArrayToZero(array);
    expect([[0,0],[0,0]]).toEqual(result);
})

test("changing all inner array that have atleast one zero to zero",()=>{
    let array = [[2,5],[1,0],[5,3]];
    let result = changingArrayToZero(array);
    expect([[2,5],[0,0],[5,3]]).toEqual(result);
})