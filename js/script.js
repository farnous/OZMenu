/*
اقسام
-- اطباق
---- تفاصيل الطبق


       images
    /category
    /dishes
*/
//Data:
const categories = [
    {url : "soup", title : "Soup", image : "images/category/soup.png"},
    {url : "starter", title : "Starters", image : "images/category/starters.png"},
    {url : "leaf", title : "LEAF LOVERS", image : "images/category/leaf.png"},
    {url : "sushi", title : "FROM THE SUSHI CORNER", image : "images/category/sushi.png"},
    {url : "pasta", title : "PASTAS", image : "images/category/pasta.png"},
    {url : "pizza", title : "PIZZA", image : "images/category/pizza.png"},
    {url : "risotto", title : "RISOTTO", image : "images/category/risotto.png"},
    {url : "burger", title : "SANDWICHES & BURGERS", image : "images/category/burger.png"},
    {url : "sliders", title : "SLIDER'S", image : "images/category/sliders.png"},
    {url : "signature", title : "OUR SIGNATURE", image : "images/category/signature.png"},
    {url : "steak-seafood", title : "Fire-Grilled Steaks & Sea Food", image : "images/category/steak.png"},
    {url : "dessert", title : "FELZY DESSERT", image : "images/category/dessert.png"},
];

const dishes = [
    {
      title : "Ginger Pumpkin Bisque",
      category : "soup", price : "", image : "",
      description : "Butternut Squash with Pumpkin Seed and Sage, Caramelized Ginger "
    },
    {title : "Wild Mushroom Cappuccino", category : "soup", price : "", image : "", description : "Mix of Wild Mushroom Toped with White Truffle Foam "},
    {title : "Grand Mama", category : "soup", price : "", image : "", description : "Homemade Chicken Soup Recipe "},
    {title : "Tom Yum", category : "soup", price : "", image : "", description : "Thai Hot & Sour, Sea Bass, Prawns, Vermicelli, Mushroom Wine Tomato"},
    {title : "Gyoza ", category : "", price : "", image : "", description : "Lightly Pan Fried or Steamed Chicken Dumplings with Shanghai Sauce"},
]



//functions :
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

//create box
function createBox(content, css = false) {
  let box = document.createElement('li');
  document.querySelector('#category ul').appendChild(box);
  box.innerHTML = content;
  if(css){
    box.setAttribute('style', css);
  }
}
//add space after boxes
function addSpace() {
  let sp = document.createElement('div');
  sp.classList.add("sp");
  document.querySelector('#category ul').appendChild(sp);
}

//show category
function showCategory(){
    categories.forEach(cat => {
        createBox(`<a href="category.html?m=${cat.url}"><h2>${cat.title}</h2></a>`, `background: url(${cat.image}) 50% 50% no-repeat; background-size: cover`);
    });
    addSpace()
}

// function openCategory(index){
//     //create an image element with class and set the src attr
//     console.log(categories[index]);
// }

//show category
function showDishes(cat){
    let cdished = dishes.filter ( dish => dish.category === cat)
    cdished.forEach(dish => {
        createBox(`${dish.title}`)
        console.log(dish);
    });
    addSpace();
}

function openDish(index) {
    console.log(dishes[index]);
}
//index.html
// showCategory();

//category.html?cat=3
//openCategory(getQueryVariable('cat'));


//open dish ,, dish.html?d=1


