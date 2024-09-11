// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight,height){
    return weight/(height*height)

}
console.log(calculateBMI(58,1.75))
 
const mohamedMBI=calculateBMI(68,1.76)
const aliMBI=calculateBMI(68,1.76)
if(mohamedMBI>aliMBI){
    console.log("Mohamed's BMI is higher than Ali's.")
}else if (mohamedMBI === aliMBI){
    console.log("Mohamed and Ali have same BMI.")
}else{
    console.log("Ali's BMI is higher than mohamed.")
}