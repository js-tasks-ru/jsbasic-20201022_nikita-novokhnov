/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  result = [];
  arr.forEach(function(item,index,array){
    if(item >= a && item <= b){
      result.push(item);
    }
  });
  return result;
}
