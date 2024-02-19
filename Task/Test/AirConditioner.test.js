const {AirConditioner} = require("../AirConditioner")

test("Test That i have a ac When i turn it on, it is on",()=>{
    let ac = new AirConditioner();
    expect(false).toBe(ac.getIsOn())
    ac.toggleOn()
    expect(true).toBe(ac.getIsOn());
})

test("Test That i have a ac,it is on When i turn it off, it is off",()=>{
    let ac = new AirConditioner();
    ac.toggleOn()
    expect(true).toBe(ac.getIsOn())
    ac.toggleOn()
    expect(false).toBe(ac.getIsOn())
})

test("Test that i have a ac, and it is on, the temperature is 16 when i increase by 1 temperature is 17",()=>{
    let ac = new AirConditioner();
    ac.toggleOn()
    expect(16).toBe(ac.getTemperature())
    ac.increaseTemperature();
    expect(17).toBe(ac.getTemperature());

})

test("Test that i have a ac, and it is on,the temperature is 17 when i decrease by 1 temperature is 16",()=>{
    let ac = new AirConditioner();
    ac.toggleOn()
    ac.increaseTemperature();
    expect(17).toBe(ac.getTemperature());
    ac.decreaseTemperature()
    expect(16).toBe(ac.getTemperature())

})
test("Test that i have a ac, and it is on,when i increase the temperature 30 temperture is 30",()=>{
    let ac = new AirConditioner();
    ac.toggleOn()
    for(let count = 0; count < 14; count++){
        ac.increaseTemperature()
    }
    expect(30).toBe(ac.getTemperature());
    ac.increaseTemperature()
    expect(30).toBe(ac.getTemperature())

})

test("Test that i have a ac, and it is on,when i increase the temperature 30 temperture is 30",()=>{
    let ac = new AirConditioner();
    ac.toggleOn();
    expect(16).toBe(ac.getTemperature());
    ac.decreaseTemperature()
    expect(16).toBe(ac.getTemperature())

})