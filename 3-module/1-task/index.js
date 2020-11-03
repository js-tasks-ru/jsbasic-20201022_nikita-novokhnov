/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let result = [];
  users.forEach(function(item, index, array){
    result.push(item.name);
  });
  return result;
}
