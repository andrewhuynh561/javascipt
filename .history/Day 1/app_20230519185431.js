
const btn =document.getElementById('search-btn');
btn.addEventListener('click',print);
function print(){
    let get_input=document.getElementById('search-input').value.trim();
    fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${get_input}`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
      });
}
