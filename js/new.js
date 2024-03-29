const dishes = [
    {title : "Ginger Pumpkin Bisque", price : "", image : "", description : "Butternut Squash with Pumpkin Seed and Sage, Caramelized Ginger "},
    {title : "Wild Mushroom Cappuccino", price : "", image : "", description : "Mix of Wild Mushroom Toped with White Truffle Foam "},
    {title : "Grand Mama", price : "", image : "", description : "Homemade Chicken Soup Recipe "},
    {title : "Tom Yum", price : "", image : "", description : "Thai Hot & Sour, Sea Bass, Prawns, Vermicelli, Mushroom Wine Tomato"},
    {title : "Gyoza ", price : "", image : "", description : "Lightly Pan Fried or Steamed Chicken Dumplings with Shanghai Sauce"},
    {title : "Wasabi Shrimps", price : "", image : "", description : "Butter Fried Crispy Shrimps Dipped in Wasabi Mayo & Mango Salsa"},
    {title : "Chicken Quesadilla  ", price : "", image : "", description : "Soft Tortilla Bread Filled with Grilled Chicken, Monetary Jack Cheese & Tomato Salsa and Guacamole"},
    {title : "Beetroot Dumpling", price : "", image : "", description : "Dumpling with Diced Chicken, Gruyere Crema, shallots and Baby Spinach "},
    {title : "Baby Calamari Fritti ", price : "", image : "", description : "Deep Fried calamari with Garlic Aioli, Yuzu Lime "},
    {title : "Rock Shrimps Tempura", price : "", image : "", description : "Dynamite shrimp, Spicy Mayo, Green Onion, Ponzu Pepper "},
    {title : "Pato Taco", price : "", image : "", description : "Crispy Duck Strip, Pineapple Chutney, Avocado, Tamarind Sauce with Black Garlic "},
    {title : "La Polpette ", price : "", image : "", description : "Stuffed meat balls with Three Cheese, Spaghetti Al Pomodoro"},
    {title : "Edamame", price : "", image : "", description : "Chilled Soya Bean with Chili & Lime Garlic or Sea Salt "},
    {title : "Gem Caesar Salad", price : "", image : "", description : "Chicken or Plain, Crisp Greens, Crispy Veal Bacon, Croutons, Parmigiano, Creamy Caesar Dressing "},
    {title : "", price : "", image : "", description : ""},
    {title : "Royal Burrata", price : "", image : "", description : "Burrata, Heirloom Tomato, Blood Orange, Aged Balsamic Truffle Glaze and Rosemary Bread "},
    {title : "Gandara Quinoa", price : "", image : "", description : "Organic Wild Rice and Quinoa, Baby Spinach, Cranberry, Pomelo, Grapefruit, Orange Segments, Pecan Nuts, Orange Blossom Citrus "},
    {title : "Steak Salad", price : "", image : "", description : "Black Angus Prime Cut Grilled, Black Beans, Fire-Roasted Sweet Corn, Avocado, Toasted White Onion, Lime & Mint Mojito"},
    {title : "Shrimps & Papaya", price : "", image : "", description : "Shrimps, papaya, Shredded Carrot, Cilantro, Pomegranate, Toasted Green Onion, and Chilly Cashew Nut Toasted with Tangy Lime Dressing, Parmigiano Crackers"},
    {title : "Mamezushi  ", price : "", image : "", description : "Fresh Salmon, Cucumber, Apple, Avocado, Cream Cheese, Scallions, Sesame Seed with Japanese Pepper "},
    {title : "Volcano Lava Roll", price : "", image : "", description : "Crispy Beef, Fried Onion, Avocado, Scallions, Sesame Wasabi, Eggplant Pickle & Lava House Sauce "},
    {title : "Tokyo Dragon     ", price : "", image : "", description : "Prawn, BBQ Unagi, Avocado, Red Tobiko, Lettuce with Ponzu Mayo & Lime Sesame"},
    {title : "Imperial", price : "", image : "", description : "Lobster, shrimps, Crab, Coconut Butter, Rice Pepper, Mango, Coconut Mayo, Jalapeno "},
    {title : "Dragon", price : "", image : "", description : "Breaded shrimps, Avocado, Sweet Relish Sushi Sauce, Spicy Mayo, Wasabi Tobiko "},
    {title : "Tuna Roll", price : "", image : "", description : "Tuna Tartar, Avocado Dry Jalapeno, Coriander, Tomato Confit Shallot, Spicy Chili Mayo with Rainbow Sesame"},
    {title : "Sea Food Roll", price : "", image : "", description : "Breaded Crab & Shrimp, Avocado, Cucumber, Spicy QP Mayo, Backed Seafood Salad"},
    {title : "Teriyaki Chicken", price : "", image : "", description : "Teriyaki Chicken Breast, Seaweed, Avocado, Sesame Seeds, Baby Jam, Fried Onion "},
    {title : "Sushi Lovers 12 Pieces  ", price : "", image : "", description : "4 Pieces Mamezushi, 4 Pieces Dragon, 4 Pieces Crispy California"},
    {title : "Royale Sushi Platter 16 Pieces", price : "", image : "", description : "4 Pieces Mamezushi, 4 Pieces Dragon, 4 Pieces Crispy California, 4 Pieces Volcano Lava Roll"},
    {title : "Penne Al Pomodoro", price : "", image : "", description : "Santos Tomatoes, Garlic & Fresh Basil in a Rich Tomato Sauce, Parmigiano Cheese, E.V.O.O "},
    {title : "Alfredo Fettuccine", price : "", image : "", description : "Roasted Chicken, Sautéed Wild Mushroom, White Creamy Sauce"},
    {title : "Fettuccine Pasta Al Grana Padano", price : "", image : "", description : "Live cooking pasta inside Grana Padano cheese wheel "},
    {title : "Ricotta Pumking Ravioli", price : "", image : "", description : "Chestnut, sage with creamy and sundried Tomato Sauce, Rocket & Parmigiano "},
    {title : "Margherita", price : "", image : "", description : "House Blended Pizza Sauce, Fresh Buffalo Mozzarella, Basil, Parmigiano Reggiano & Oregano, E.V.O.O "},
    {title : "Roman Style", price : "", image : "", description : "Basil Pesto, Feta Cheese, Ricotta, Sundried Tomato, Roasted Eggplant, Kalamata Olives, White Onion"},
    {title : "Tartufo", price : "", image : "", description : "Wild Mushrooms, Mozzarella & Basil, Truffle "},
    {title : "Bresaola Pizza", price : "", image : "", description : "Tomato Sauce, Parmigiano Cheese, Baby Rocca "},
    {title : "Pink Chicken Risotto", price : "", image : "", description : "With Parmigiano and Cajun chicken "},
    {title : "Risotto Fruitti De Mare", price : "", image : "", description : "Calamari, Prawns, Salmon, Tangy Saffron Sauce "},
    {title : "Wild Mushroom Risotto", price : "", image : "", description : "Asparagus, Parmigiano, Mascarpone, and White Truffle foam "},
    {title : "The Original Burger", price : "", image : "", description : "Freshly Chicken Tender, Lettuce, Tomato, Onion and Pickles with BBQ Spicy Pink Sauce Brioche Bun "},
    {title : "Wagyu Surf & Turf", price : "", image : "", description : "A fresh wagyu Patty, Served with Crispy Prawn and Dynamite Sauce, Cheddar, Lettuce, Fried Carrot, Onion, Brioche Bun "},
    {title : "Pina Colada Burger", price : "", image : "", description : "A fresh wagyu Patty, Tangy Teriyaki sauce, Gouda cheese, Crispy Turkey, white Onion, Pineapple, Lettuce, Pumpkin seeds brioche bun"},
    {title : "Vegas Mac ‘n’ Cheese", price : "", image : "", description : "Black Angus patty, Mac & Cheese, Jumbo Patty, Smoked Beef Bacon, Capsicum, Brioche Bun "},
    {title : "Toasted Club House", price : "", image : "", description : "Avocado, Grilled Chicken Breast, Smoked Turkey, Lettuce, Vine Ripened Tomato, Egg, Sundried Tomato Pesto and Gouda Cheese, French Fries "},
    {title : "The Nashville", price : "", image : "", description : "Fried Chicken Breast, Rich Gouda, Fried Jalapeno, Onion Ring, Chipotle Ranch and Arugula with Saffron Brioche Bun"},
    {title : "The Tango", price : "", image : "", description : "Black Angus Beef Patty, & Age Cheese, Lettuce, Tomato, Avocado Tomato Chutney "},
    {title : "Steak Brie", price : "", image : "", description : "Philly steak, Melted Brie Cheese, Red Onion, Wild Mushroom Sauté, Arugula, Roma Tomato, Garlic Aioli "},
    {title : "Lobster Shrimps Bao", price : "", image : "", description : "Crispy Fried Lobster & Shrimps, Tangy Texas sauce, Lettuce, served with Japanese Bun "},
    {title : "Luxurious Black Angus", price : "", image : "", description : "Tenderloin, Sautéed Wild Mushroom, Celeriac Puree, Asparagus, Confit Perl Onion with Truffle jus "},
    {title : "Pan Seared Salmon", price : "", image : "", description : "Salmon filet, Crushed Basil Crust Purple Potato, Baby Spinach and Artichoke Barigoule Sauce"},
    {title : "Satay House", price : "", image : "", description : "Seasoned Skewered of Beef, Prawns & Lemongrass Chicken Spicy Peanut Chili Sauce, Cucumber, Shallots, Rice"},
    {title : "Thai Red Curry", price : "", image : "", description : "Prawns or Chicken, Eggplant and Long Beans Cooked in a Spicy Thai Curry Sauce, With Jasmine Rice"},
    {title : "Roasted Baby Chicken", price : "", image : "", description : "Parsnips, Carrots, Baby Potato, Tomato with Cilantro Sauce "},
    {title : "Oriental Hamour", price : "", image : "", description : "Grill Fish Fillet, Sayadiya, Caramelize Onion, Pine Seed "},
    {title : "Cordon Bleu", price : "", image : "", description : "Milk fed Veal Scaloppini, Swiss Gruyére, Turkey with Rocco Cherry tomato Salad and Parmigiano Dijon Cream Sauce "},
    {title : "Wagyu Brisket", price : "", image : "", description : "Slow cooked Wagyu Brisket with Roast Potato and Gravy "},
    {title : "Grilled Lamb ", price : "", image : "", description : "Australian Lamb chops “English cut”, Ratatouille, Potato Gnocchi, Tapenade and Crispy Shallots "},
    {title : "Lobster Thermidor or Grilled", price : "", image : "", description : "A creamy mixture of cooked Lobster, Gruyere cheese stuffed into a Lobster shell, Seasonal Salad, Mushed Potato "},
    {title : "Rib- Eye Steak “300 gm ’’", price : "", image : "", description : "Tender Cut of Black Angus Well Seasoned, Coconut Bread and Sweet Potatoes Fries "},
    {title : "Centre-Cut Sirloin Steak “250 gm’’", price : "", image : "", description : "Tender Peace of Black Angus well- Seasoned, Cajun Spices with Crispy Fries and Yorkshire pudding "},
    {title : "Grilled Tiger Prawns", price : "", image : "", description : "Topped with Citrus Coconut Butter, Coconut Yellow Rice and Pineapple Chutney "},
    {title : "Chocolate Fondant", price : "", image : "", description : "Vanilla Ice Cream, Caramel Feuilletine "},
    {title : "Sticky Dates Pudding", price : "", image : "", description : "Served with Vanilla Ice Cream and Poached Pear "},
    {title : "", price : "", image : "", description : ""},
    {title : "", price : "", image : "", description : ""},
    {title : "", price : "", image : "", description : ""},
    {title : "", price : "", image : "", description : ""},
    {title : "", price : "", image : "", description : ""},
    {title : "", price : "", image : "", description : ""},
    {title : "", price : "", image : "", description : ""},
]
