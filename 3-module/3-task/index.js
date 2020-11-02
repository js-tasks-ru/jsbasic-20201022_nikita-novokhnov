/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let parts = str.split("-");
  let newString = "";
  parts.forEach(function(item,index,array){
    if(index == 0){
      newString += item;
    }else{
      newString += item[0].toUpperCase() + item.slice(1);
    }
  });
  return newString;
}
