/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let trs = table.getElementsByTagName('tr');
    let countTrs = 0;
    let statusPos = 0;
    let genderPos = 0;
    let agePos = 0;
    for (let tr of trs) {
        let tds = tr.getElementsByTagName('td');
        if(countTrs == 0){          
            let findStatus = false;
            let findGender = false;
            let findAge = false;

            let count = 0;
            for(let td of tds){
                if(!findStatus){
                    if(td.textContent == "Status"){
                        statusPos = count; 
                        findStatus = true;
                    }
                }
                if(!findGender){
                    if(td.textContent == "Gender"){
                        genderPos = count;
                        findGender = true; 
                    }
                }
                if(!findAge){
                    if(td.textContent == "Age"){
                        agePos = count;
                        findAge = true;
                    }
                }
                count ++;
            }
        }else{
            if(tds[statusPos].getAttribute('data-available') == "true" || tds[statusPos].getAttribute('data-available') == "false"){
                if(tds[statusPos].getAttribute('data-available') == "true"){
                    tr.classList.add("available");
                }
                if(tds[statusPos].getAttribute('data-available') == "false"){
                    tr.classList.add("unavailable");
                }
            }else{
                tr.hidden = true;
            }
    
            if(tds[genderPos].textContent == "m"){
                tr.classList.add("male");
            }
            if(tds[genderPos].textContent == "f"){
                tr.classList.add("female");
            }
    
            if(tds[agePos].textContent < 18){
                tr.style = "text-decoration: line-through";
            }
    
        }
        countTrs ++;
    }
}
