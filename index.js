// Write your solution in this file!
const employee = {name: 'Sam', streetAddress: '11 main'}

beforeEach(function () {
    delete employee[key]
    const employee = {name: 'Sam'}
    return employee
  }
  );

function updateEmployeeWithKeyAndValue(obj, key, value){
   
    const newEmployee = {...obj}
    
    newEmployee[key] = value

   return newEmployee

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){

  employee[key] = value
  return employee
     
}

function deleteFromEmployeeByKey(obj, key, value){

const newEmployee = {...obj}
  delete newEmployee[key]
  return newEmployee

}
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {

delete employee[key]
return employee


}