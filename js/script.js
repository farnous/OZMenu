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
    {url : "", title : "0", image : ""},
    {url : "", title : "1", image : ""},
    {url : "", title : "2", image : ""},
    {url : "", title : "3", image : ""},
    {url : "", title : "4", image : ""}
];

const dishes = [
    {title : "", price : "", image : "", description : ""},
    {title : "", price : "", image : "", description : ""},
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



//show category
function showCategory(){
    categories.forEach(cat => {
        let category = document.createElement('li');
        document.querySelector('#category ul').appendChild(category);
        console.log(cat);
    });
    let sp = document.createElement('div');
    sp.classList.add("sp");
    document.querySelector('#category ul').appendChild(sp);
}

function openCategory(index){
    //create an image element with class and set the src attr
    console.log(categories[index]);
}

//show category
function showDishes(){
    dishes.forEach(cat => {
        console.log(cat);
    });
}

function openDish(index) {
    console.log(dishes[index]);
}
//index.html
showCategory();

//category.html?cat=3
//openCategory(getQueryVariable('cat'));


//open dish ,, dish.html?d=1


