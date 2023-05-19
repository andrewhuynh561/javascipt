const user_input=document.getElementById('search-input');
const btn =document.getElementById('search-btn');
const key =`www.themealdb.com/api/json/v1/1/filter.php?i=${user_input.value}`;
btn.addEventListener("click",print);
function print(){
    console.log(user_input.value);
    fetch(key.trim())
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
      });
}
