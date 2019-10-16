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
      category : "soup", price : "",
      image : "1.png",
      description : "Butternut Squash with Pumpkin Seed and Sage, Caramelized Ginger"
    },
    {
      title : "Wild Mushroom Cappuccino",
      category : "soup", price : "",
      image : "2.png",
      description : "Mix of Wild Mushroom Toped with White Truffle Foam"
    },
    {
      title : "Grand Mama",
      category : "soup", price : "",
      image : "3.png",
      description : "Homemade Chicken Soup Recipe"
    },
    {
      title : "Tom Yum",
      category : "soup", price : "",
      image : "4.png",
      description : "Thai Hot & Sour, Sea Bass, Prawns, Vermicelli, Mushroom Wine Tomato"
    },
    {
      title : "Gyoza",
      category : "starter", price : "",
      image : "5.png",
      description : "Lightly Pan Fried or Steamed Chicken Dumplings with Shanghai Sauce"
    },
    {
      title : "Wasabi Shrimps",
      category : "starter", price : "",
      image : "6.png",
      description : "Butter Fried Crispy Shrimps Dipped in Wasabi Mayo & Mango Salsa"
    },
    {
      title : "Chicken Quesadilla",
      category : "starter", price : "",
      image : "7.png",
      description : "Soft Tortilla Bread Filled with Grilled Chicken, Monetary Jack Cheese & Tomato Salsa and Guacamole"
    },
    {
      title : "Beetroot Dumpling",
      category : "starter", price : "",
      image : "8.png",
      description : "Dumpling with Diced Chicken, Gruyere Crema, shallots and Baby Spinach"
    },
    {
      title : "Baby Calamari Fritti",
      category : "starter", price : "",
      image : "9.png",
      description : "Deep Fried calamari with Garlic Aioli, Yuzu Lime"
    },
    {
      title : "Rock Shrimps Tempura",
      category : "starter", price : "",
      image : "10.png",
      description : "Dynamite shrimp, Spicy Mayo, Green Onion, Ponzu Pepper"
    },
    {
      title : "Pato Taco",
      category : "starter", price : "",
      image : "11.png",
      description : "Crispy Duck Strip, Pineapple Chutney, Avocado, Tamarind Sauce with Black Garlic "
    },
    {
      title : "La Polpette",
      category : "starter", price : "",
      image : "12.png",
      description : "Stuffed meat balls with Three Cheese, Spaghetti Al Pomodoro"
    },
    {
      title : "Wizard of Oz",
      category : "starter", price : "",
      image : "13.png",
      description : "Prawns, Crab, Avocado Orange Zest Marmalade with Truffle Mayo Sauce, 22   Carat Gold Leaf 98"
    },
    {
      title : "Gem Caesar Salad",
      category : "leaf", price : "",
      image : "14.png",
      description : "Chicken or Plain, Crisp Greens, Crispy Veal Bacon, Croutons, Parmigiano, Creamy Caesar Dressing"
    },
    {
      title : "Beetroot Salad",
      category : "leaf", price : "",
      image : "15.png",
      description : "Heritage Beetroot, Green Lentil Onion, Parsley, Tomato, Walnut, Greek Feta, Lemon Walnut Oil"
    },
    {
      title : "Royal Burrata",
      category : "leaf", price : "",
      image : "16.png",
      description : "Burrata, Heirloom Tomato, Blood Orange, Aged Balsamic Truffle Glaze and Rosemary Bread"
    },
    {
      title : "Gandara Quinoa",
      category : "leaf", price : "",
      image : "17.png",
      description : "Organic Wild Rice and Quinoa, Baby Spinach, Cranberry, Pomelo, Grapefruit, Orange Segments, Pecan Nuts, Orange Blossom Citrus"
    },
    {
      title : "Steak Salad",
      category : "leaf", price : "",
      image : "18.png",
      description : "Black Angus Prime Cut Grilled, Black Beans, Fire-Roasted Sweet Corn, Avocado, Toasted White Onion, Lime & Mint Mojito"
    },
    {
      title : "Shrimps & Papaya",
      category : "leaf", price : "",
      image : "19.png",
      description : "Shrimps, papaya, Shredded Carrot, Cilantro, Pomegranate, Toasted Green Onion, and Chilly Cashew Nut Toasted with Tangy Lime Dressing, Parmigiano Crackers"
    },
    {
      title : "Mamezushi",
      category : "sushi", price : "",
      image : "20.png",
      description : "Fresh Salmon, Cucumber, Apple, Avocado, Cream Cheese, Scallions, Sesame Seed with Japanese Pepper"
    },
    {
      title : "Crispy California",
      category : "sushi", price : "",
      image : "21.png",
      description : "Crab Stick, Avocado, Apple, Orange Tobiko, Crab Salsa, QP Mayo, Tempura Crisp, Togarashi Shredded"
    },
    {
      title : "Volcano Lava Roll",
      category : "sushi", price : "",
      image : "22.png",
      description : "Crispy Beef, Fried Onion, Avocado, Scallions, Sesame Wasabi, Eggplant Pickle & Lava House Sauce"
    },
    {
      title : "Dynamite",
      category : "sushi", price : "",
      image : "23.png",
      description : "Shrimp Tempura & Pimiento, Cucumber, Black Tobiko, Turmeric, Chili Mayo with Sushi sauce Reduction"
    },
    {
      title : "Tokyo Dragon",
      category : "sushi", price : "",
      image : "24.png",
      description : "Prawn, BBQ Unagi, Avocado, Red Tobiko, Lettuce with Ponzu Mayo & Lime Sesame"
    },
    {
      title : "Imperial",
      category : "sushi", price : "",
      image : "25.png",
      description : "Lobster, shrimps, Crab, Coconut Butter, Rice Pepper, Mango, Coconut Mayo, Jalapeno"
    },
    {
      title : "Dragon",
      category : "sushi", price : "",
      image : "26.png",
      description : "Breaded shrimps, Avocado, Sweet Relish Sushi Sauce, Spicy Mayo, Wasabi Tobiko"
    },
    {
      title : "Sea Food Roll",
      category : "sushi", price : "",
      image : "27.png",
      description : "Breaded Crab & Shrimp, Avocado, Cucumber, Spicy QP Mayo, Backed Seafood Salad "
    },
    {
      title : "Alfredo Fettuccine",
      category : "pasta", price : "",
      image : "28.png",
      description : "Roasted Chicken, Sautéed Wild Mushroom, White Creamy Sauce"
    },
    {
      title : "Bresaola Pizza",
      category : "pizza", price : "",
      image : "29.png",
      description : "Tomato Sauce, Parmigiano Cheese, Baby Rocca "
    },
    {
      title : "Pink Chicken Risotto",
      category : "risotto", price : "",
      image : "30.png",
      description : "With Parmigiano and Cajun chicken"
    },
    {
      title : "Risotto Fruitti De Mare",
      category : "risotto", price : "",
      image : "31.png",
      description : "Calamari, Prawns, Salmon, Tangy Saffron Sauce"
    },
    {
      title : "Wagyu Surf & Turf",
      category : "burger", price : "",
      image : "32.png",
      description : "A fresh wagyu Patty, Served with Crispy Prawn and Dynamite Sauce, Cheddar, Lettuce, Fried Carrot, Onion, Brioche Bun"
    },
    {
      title : "Pina Colada Burger",
      category : "burger", price : "",
      image : "33.png",
      description : "A fresh wagyu Patty, Tangy Teriyaki sauce, Gouda cheese, Crispy Turkey, white Onion, Pineapple, Lettuce, Pumpkin seeds brioche bun"
    },
    {
      title : "Vegas Mac ‘n’ Cheese",
      category : "burger", price : "",
      image : "34.png",
      description : "Black Angus patty, Mac & Cheese, Jumbo Patty, Smoked Beef Bacon, Capsicum, Brioche Bun"
    },
    {
      title : "The Nashville",
      category : "sliders", price : "",
      image : "35.png",
      description : "Fried Chicken Breast, Rich Gouda, Fried Jalapeno, Onion Ring, Chipotle Ranch and Arugula with Saffron Brioche Bun"
    },
    {
      title : "The Tango",
      category : "sliders", price : "",
      image : "36.png",
      description : "Black Angus Beef Patty, & Age Cheese, Lettuce, Tomato, Avocado Tomato Chutney"
    },
    {
      title : "Steak Brie",
      category : "sliders", price : "",
      image : "37.png",
      description : "Philly steak, Melted Brie Cheese, Red Onion, Wild Mushroom Sauté, Arugula, Roma Tomato, Garlic Aioli"
    },
    {
      title : "Lobster Shrimps Bao",
      category : "sliders", price : "",
      image : "38.png",
      description : "Crispy Fried Lobster & Shrimps, Tangy Texas sauce, Lettuce, served with Japanese Bun"
    },
    {
      title : "Luxurious Black Angus",
      category : "signature", price : "",
      image : "39.png",
      description : "Tenderloin, Sautéed Wild Mushroom, Celeriac Puree, Asparagus, Confit Perl Onion with Truffle jus"
    },
    {
      title : "Pan Seared Salmon",
      category : "signature", price : "",
      image : "40.png",
      description : "Salmon filet, Crushed Basil Crust Purple Potato, Baby Spinach and Artichoke Barigoule Sauce"
    },
    {
      title : "Satay House",
      category : "signature", price : "",
      image : "41.png",
      description : "Seasoned Skewered of Beef, Prawns & Lemongrass Chicken Spicy Peanut Chili Sauce, Cucumber, Shallots, Rice"
    },
    {
      title : "Thai Red Curry",
      category : "signature", price : "",
      image : "42.png",
      description : "Prawns or Chicken, Eggplant and Long Beans Cooked in a Spicy Thai Curry Sauce, With Jasmine Rice"
    },
    {
      title : "Roasted Baby Chicken",
      category : "signature", price : "",
      image : "43.png",
      description : "Parsnips, Carrots, Baby Potato, Tomato with Cilantro Sauce"
    },
    {
      title : "Cordon Bleu",
      category : "signature", price : "",
      image : "44.png",
      description : "Milk fed Veal Scaloppini, Swiss Gruyére, Turkey with Rocco Cherry tomato Salad and Parmigiano Dijon Cream Sauce"
    },
    {
      title : "Wagyu Brisket",
      category : "signature", price : "",
      image : "45.png",
      description : "Slow cooked Wagyu Brisket with Roast Potato and Gravy"
    },
    {
      title : "Grilled Lamb Chops",
      category : "signature", price : "",
      image : "46.png",
      description : "Australian Lamb chops “English cut”, Ratatouille, Potato Gnocchi, Tapenade and Crispy Shallots"
    },
    {
      title : "Lobster Thermidor or Grilled",
      category : "signature", price : "",
      image : "47.png",
      description : "A creamy mixture of cooked Lobster, Gruyere cheese stuffed into a Lobster shell, Seasonal Salad, Mushed Potato"
    },
    {
      title : "Rib- Eye Steak “300 gm’’",
      category : "steak-seafood", price : "",
      image : "48.png",
      description : "Tender Cut of Black Angus Well Seasoned, Coconut Bread and Sweet Potatoes Fries"
    },
    {
      title : "Centre-Cut Sirloin Steak “250 gm’’",
      category : "steak-seafood", price : "",
      image : "49.png",
      description : "Tender Peace of Black Angus well- Seasoned, Cajun Spices with Crispy Fries and Yorkshire pudding"
    },
    {
      title : "Grilled Tiger Prawns",
      category : "steak-seafood", price : "",
      image : "50.png",
      description : "Topped with Citrus Coconut Butter, Coconut Yellow Rice and Pineapple Chutney"
    },
    {
      title : "Chocolate Fondant",
      category : "dessert", price : "",
      image : "51.png",
      description : "Vanilla Ice Cream, Caramel Feuilletine"
    },
    {
      title : "Sticky Dates Pudding",
      category : "dessert", price : "",
      image : "52.png",
      description : "Served with Vanilla Ice Cream and Poached Pear"
    },
    {
      title : "Pineapple Brulee",
      category : "dessert", price : "",
      image : "53.png",
      description : "Diced Baby Pineapple with a Pudding Base of Cream Topped by a Delicate Layer of Caramelize Sugar"
    },
    {
      title : "Chocolate Panna Cotta",
      category : "dessert", price : "",
      image : "54.png",
      description : "Mango Sorbet, Wild Berries"
    },

]
