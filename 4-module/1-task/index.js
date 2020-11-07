/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ulElement = document.createElement('ul');
  friends.forEach(function(item,index,arr){
    ulElement.innerHTML += `<li>${item.firstName} ${item.lastName}/li>`;
  });
  return ulElement;
}
