 const shiftZeroToTheBack = (input)=>{
    for(let count = 0; count< input.length;count++){
        if(input[count] == 0){
            let  counter = input[count]
            let number = getNumber(input,count)
            if(number > count){
                input[count] = input[number]
                input[number] = counter
            }
        }        
    }
     return input
}




const getNumber = (array,count)=>{
    let result = 0;
    for(let res = count; res<array.length;res++){
        if(array[res] > 0){
            return result = res
        }
    }
    return result;
}


function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.setName = function(name){
        this.name = name;
    }
    this.getName = function(){
        return this.name;
    }
}

let person1 = new Person("tobi", 12);
person1.setName("shola");
console.log(person1.getName())


module.exports={shiftZeroToTheBack}
