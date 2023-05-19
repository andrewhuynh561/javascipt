const recipe=document.getElementById('.meal-details-content');
const btn =document.getElementById('search-btn');
const result=document.getElementById("meal");
btn.addEventListener('click',getMeals);
result.addEventListener('click',showRecipe);

function getMeals(){
    let html=``
    let get_input=document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${get_input}`)
    .then(Response => Response.json())
    .then(data => {
        if(data.meals){
            data.meals.forEach(meal => {
                html+=`
                <div class = "meal-item" data-id=${meal.idMeal}>
                    <div class = "meal-img">
                        <img src = "${meal.strMealThumb}" alt = "food">
                    </div>
                    <div class = "meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href = "#" class = "recipe-btn">Get Recipe</a>
                    </div>
                 </div> `;
                
            });
            result.classList.remove('NotFound');
        }else{
            html+=`Sorry, we didn't find any meal!`;
            result.classList.add('NotFound');
        }
        result.innerHTML=html;

    })
    .catch(error => {
        console.error('Error:', error);
      });
}

function showRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}
