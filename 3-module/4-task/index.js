/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let result = '';
  users.forEach(function(item,index,array){
    if(item.age <= age){
      if(index == 0){
        result += item.name + ", " + item.balance;
      }else{
        result += "\n"+item.name + ", " + item.balance;
      }
    }
  });
  return result;
}
