
const {returnCharacter} = require("../CountCharacter")
test("returns the count of character ",()=>{
    let input = "semicolon.africa";
    let result = returnCharacter(input);
    expect(result).toEqual({'s':1,'e':1,'m':1,'i':2,'c':2,'o':2,'l':1,'n':1,'.':1,'a':2,'f':1,'r':1});

})