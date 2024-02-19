const {isSafe} = require("../PasswordValidator")

test("validate if the password meet criteria",()=>{
    let password = "Opeolu1@";
    let result = isSafe(password);
    expect(true).toBe(result)
})

test("validate if the password meet criteria",()=>{
    let password = "Opeol15";
    let result = isSafe(password);
    expect(false).toBe(result)
})