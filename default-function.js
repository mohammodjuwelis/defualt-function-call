function defaultFun (numberOne=0, numberTwo=0)  {
    return numberOne + numberTwo;
}
const result = defaultFun();
console.log(result);

const nameFun = (firstName = '', secondName='') => firstName + secondName;
console.log(nameFun('mohammod')); 