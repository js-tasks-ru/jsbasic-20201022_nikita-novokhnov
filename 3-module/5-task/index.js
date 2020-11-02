/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let splitSpace = str.split(" ");
  let splitComma = str.split(",");
  let minComma,maxComma,minSpace,maxSpace;
  splitSpace.forEach(function(item,index,array){
    numberItem = Number(item);
    if(!isNaN(numberItem)){
      if(minSpace == undefined){
        minSpace = numberItem;
      }
      if(maxSpace == undefined){
        maxSpace = numberItem;
      }

      if(numberItem > maxSpace){
        maxSpace = numberItem;
      }
      if(numberItem < minSpace){
        minSpace = numberItem;  
      }
    }

  });
  splitComma.forEach(function(item,index,array){
  numberItem = Number(item);
  if(!isNaN(numberItem)){
    if(minComma == undefined){
      minComma = numberItem;
    }
    if(maxComma == undefined){
      maxComma = numberItem;
    }

    if(numberItem > maxComma){
      maxComma = numberItem;
    }
    if(numberItem < minComma){
      minComma = numberItem;  
    }
  }
});

let result = {};
if(minComma < minSpace){
  result.min = minComma;
}else{
  result.min = minSpace;
}

if(maxComma > maxSpace){
  result.max = maxComma;
}else{
  result.max = maxSpace;
}

return result;
}