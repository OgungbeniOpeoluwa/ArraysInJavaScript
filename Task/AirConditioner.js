class AirConditioner{
    constructor(){
        this.isOn = false
        this.temperature = 16
    
    }
    toggleOn = function(){
        this.isOn = !this.isOn
    }
    getIsOn = function(){
        return this.isOn;
    }

    increaseTemperature = function(){
        if(this.temperature < 30){
            this.temperature +=1
        }
    }
    decreaseTemperature = function(){
        if(this.temperature > 16){
        this.temperature -=1;
    }
    }

    getTemperature = function(){
        return this.temperature;
    }
}

module.exports ={AirConditioner}
