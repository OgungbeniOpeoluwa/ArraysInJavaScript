const {shiftZeroToTheBack} = require("../ZeroToTheBack")
test("Shift the zero the back",()=>{
    let input = [0,4,2,0,5, 0];
    let task = shiftZeroToTheBack(input);
    expect(task).toEqual([4,2,5,0,0, 0])
})

test("Shift the zero the back",()=>{
    let input = [4,0,0,5,7];
    let task = shiftZeroToTheBack(input);
    expect(task).toEqual([4,5,7,0,0])
})