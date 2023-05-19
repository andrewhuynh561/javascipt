
const btn =document.getElementById('search-btn');
const result=document.getAnimations("meal");
btn.addEventListener('click',print);

function print(){
    let get_input=document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${get_input}`)
    .then(Response => Response.json())
    .then(data => {
        if(data.meals){
            data.meals.forEach(meal => {
                html=`
                <div class = "meal-item" data-id=${meal.idMeal}>
                    <div class = "meal-img">
                        <img src = "${meal.strMealThumb}" alt = "food">
                    </div>
                    <div class = "meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href = "#" class = "recipe-btn">Get Recipe</a>
                    </div>
                 </div> `
                
            });
        }
        result.innerHTML=html;

    })
    .catch(error => {
        console.error('Error:', error);
      });
}
