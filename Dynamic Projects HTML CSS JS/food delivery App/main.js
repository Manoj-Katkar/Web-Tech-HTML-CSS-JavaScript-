// !here I have to import the data 
// import {restaurantData} from './data.js';


// console.log(restaurantData);

const restaurantData = [
    // !Each Array element represent the each restaurantData 
    {
        //*restaurant 1
        name : "Burger King",
        restaurantLocation : "Burgers, American",
        rating : "4.4",
        distance : "25-30 MINS",
        offerGoingOn : "₹350 for two",
        restaurantImg : "./images/Burger King.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Crispy Veg Burger",
                price : "₹70.00",
                description : `Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds`,
                productImage : "./images/Burger1.avif"
            }
            ,

            {
                //2
                name : "4 Crispy Veg + 2 Medium Fries",
                price : "₹400.00",
                description : `4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds`,
                productImage : "./images/Burger2.avif"
            },

            {
                //3
                name : "Medium Fries",
                price : "₹115.00",
                description : `The Perfect Crispy Partner. Qty: 114 Gms| Kcal: 332.5 | Carbs 445.39 Gms| Sugar: 0 Gms| Fat: 14.4 Gms| Saturated fat: 6.8 Gms| Protein: 5.9 Gms| Sodium: 528.8 Mg Contains: Gluten`,
                productImage : "./images/Burger3.avif"
            },
            {
                //4
                name : "King Peri Peri Fries",
                price : "₹159.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 161 Gms| Kcal: 467.8 | Carbs 611.7 Gms| Sugar: 0.9 Gms| Fat: 20 Gms| Saturated fat: 9.3 Gms| Protein: 8.4 Gms| Sodium: 1193.7 Mg Contains: Gluten, Soybean`,
                productImage : "./images/Burger4.avif"
            },

            {
                //5
                name : "Medium Peri Peri Fries.",
                price : "₹144.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 119 Gms| Kcal: 345.3 | Carbs 447.6 Gms| Sugar: 0.9 Gms| Fat: 14.7 Gms| Saturated fat: 6.8 Gms| Protein: 6.3 Gms| Sodium: 998.8 Mg Contains: Soybean, Milk`,
                productImage : "./images/Burger5.avif"
            },



        ]
    },






    {
        //*restaurant 2   McDonald's1
        name : "McDonald's",
        restaurantLocation : "Burgers, Beverages",
        rating : "4.4",
        distance : "30-35 MINS",
        offerGoingOn : "₹400 for two",
        restaurantImg : "./images/McDonald's1.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Crispy Veg Burger",
                price : "₹70.00",
                description : `Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds`,
                productImage : "./images/Burger1.avif"
            }
            ,

            {
                //2
                name : "4 Crispy Veg + 2 Medium Fries",
                price : "₹400.00",
                description : `4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds`,
                productImage : "./images/Burger2.avif"
            },

            {
                //3
                name : "Medium Fries",
                price : "₹115.00",
                description : `The Perfect Crispy Partner. Qty: 114 Gms| Kcal: 332.5 | Carbs 445.39 Gms| Sugar: 0 Gms| Fat: 14.4 Gms| Saturated fat: 6.8 Gms| Protein: 5.9 Gms| Sodium: 528.8 Mg Contains: Gluten`,
                productImage : "./images/Burger3.avif"
            },
            {
                //4
                name : "King Peri Peri Fries",
                price : "₹159.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 161 Gms| Kcal: 467.8 | Carbs 611.7 Gms| Sugar: 0.9 Gms| Fat: 20 Gms| Saturated fat: 9.3 Gms| Protein: 8.4 Gms| Sodium: 1193.7 Mg Contains: Gluten, Soybean`,
                productImage : "./images/Burger4.avif"
            },

            {
                //5
                name : "Medium Peri Peri Fries.",
                price : "₹144.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 119 Gms| Kcal: 345.3 | Carbs 447.6 Gms| Sugar: 0.9 Gms| Fat: 14.7 Gms| Saturated fat: 6.8 Gms| Protein: 6.3 Gms| Sodium: 998.8 Mg Contains: Soybean, Milk`,
                productImage : "./images/Burger5.avif"
            },



        ]
    },














    {
        //*restaurant 3   Dastarkhwan1
        name : "Delhi Dastarkhwan Restaurant",
        restaurantLocation : "Biryani, Mughlai",
        rating : "4.2",
        distance : "25-30 MINS",
        offerGoingOn : "₹300 for two",
        restaurantImg : "./images/Dastarkhwan Restaurant.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Chicken Kadai",
                price : "₹203.00",
                description : `Chunks of chicken cooked in special grounded kadai masala with delicious onion and tomato gravy.`,
                productImage : "./images/Dastarkhwan1.avif"
            }
            ,

            {
                //2
                name : "Chicken Laziz Handi",
                price : "₹203.00",
                description : `Murgh handi lazeez - chicken very delicious handi chicken is cooked with cream, stock, yogurt, onion paste and lemon juice etc. || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan2.avif"
            },

            {
                //3
                name : "Butter Chicken",
                price : "₹216.00",
                description : `Chicken marinated in lemon juice, dahi, Kashmiri lal mirch, salt, garam masala and ginger garlic paste, then roasted and cooked in tomato - onion and garlic and ginger-based, cream, butter and various spices sauce that is simmered until smooth(serves 1) || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan3.avif"
            },
            {
                //4
                name : "Chicken Tikka Masala",
                price : "₹216.00",
                description : `Chicken tikka masala, usually mix with spices and can be enjoyed with roti, naan or rice. || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan4.avif"
            },

            {
                //5
                name : "Veg Dum Biryani",
                price : "₹135.00",
                description : `A fragrant Basmati rice dish with layers of flavorful vegetables.`,
                productImage : "./images/Dastarkhwan5.avif"
            },



        ]
    },







    {
        //*restaurant 4   Smruti1
        name : "Center Point - Ghandhi Smruti",
        restaurantLocation : "Fast Food, Burgers",
        rating : "4.2",
        distance : "25-20 MINS",
        offerGoingOn : "₹350 for two",
        restaurantImg : "./images/Smruti.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Manchurian Dry",
                price : "₹180.00",
                description : `| Serves 1 |The Indo Chinese starter dish where fried vegetable balls are coated with thick, flavorful sauce with cabbage salad `,
                productImage : "./images/Smruti1.avif"
            }
            ,

            {
                //2
                name : "Bread Butter Cheese Chatni",
                price : "₹112.00",
                description : `Classic Veg. Cheese S/w in whole wheat brown bread`,
                productImage : "./images/Smruti2.avif"
            },

            {
                //3
                name : "Veg Cheese Pizza",
                price : "₹216.00",
                description : `Veg cheese pizza that decidedly staggers under an overload of crunchy onions, crisp capsicum and juicy fresh tomatoes.serves with green chutney and 3 sauce pocket`,
                productImage : "./images/Smruti3.avif"
            },
            {
                //4
                name : "Garlic Bread With Cheeses",
                price : "₹152.00",
                description : `Served with 4 Pc`,
                productImage : "./images/Smruti4.avif"
            },

            {
                //5
                name : "Veg Cheese Pizza",
                price : "₹216.00",
                description : `Veg cheese pizza that decidedly staggers under an overload of crunchy onions, crisp capsicum and juicy fresh tomatoes.serves with green chutney and 3 sauce pocket`,
                productImage : "./images/Smruti3.avif"
            },



        ]
    },






    
    {
        //*restaurant 5
        name : "Burger King-2",
        restaurantLocation : "Burgers, American",
        rating : "4.4",
        distance : "25-30 MINS",
        offerGoingOn : "₹350 for two",
        restaurantImg : "./images/Burger King.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Crispy Veg Burger",
                price : "₹70.00",
                description : `Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds`,
                productImage : "./images/Burger1.avif"
            }
            ,

            {
                //2
                name : "4 Crispy Veg + 2 Medium Fries",
                price : "₹400.00",
                description : `4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds`,
                productImage : "./images/Burger2.avif"
            },

            {
                //3
                name : "Medium Fries",
                price : "₹115.00",
                description : `The Perfect Crispy Partner. Qty: 114 Gms| Kcal: 332.5 | Carbs 445.39 Gms| Sugar: 0 Gms| Fat: 14.4 Gms| Saturated fat: 6.8 Gms| Protein: 5.9 Gms| Sodium: 528.8 Mg Contains: Gluten`,
                productImage : "./images/Burger3.avif"
            },
            {
                //4
                name : "King Peri Peri Fries",
                price : "₹159.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 161 Gms| Kcal: 467.8 | Carbs 611.7 Gms| Sugar: 0.9 Gms| Fat: 20 Gms| Saturated fat: 9.3 Gms| Protein: 8.4 Gms| Sodium: 1193.7 Mg Contains: Gluten, Soybean`,
                productImage : "./images/Burger4.avif"
            },

            {
                //5
                name : "Medium Peri Peri Fries.",
                price : "₹144.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 119 Gms| Kcal: 345.3 | Carbs 447.6 Gms| Sugar: 0.9 Gms| Fat: 14.7 Gms| Saturated fat: 6.8 Gms| Protein: 6.3 Gms| Sodium: 998.8 Mg Contains: Soybean, Milk`,
                productImage : "./images/Burger5.avif"
            },



        ]
    },









    {
        //*restaurant 6   Smruti1
        name : "Center Point",
        restaurantLocation : "Fast Food, Burgers",
        rating : "4.2",
        distance : "25-20 MINS",
        offerGoingOn : "₹350 for two",
        restaurantImg : "./images/Smruti.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Manchurian Dry",
                price : "₹180.00",
                description : `| Serves 1 |The Indo Chinese starter dish where fried vegetable balls are coated with thick, flavorful sauce with cabbage salad `,
                productImage : "./images/Smruti1.avif"
            }
            ,

            {
                //2
                name : "Bread Butter Cheese Chatni",
                price : "₹112.00",
                description : `Classic Veg. Cheese S/w in whole wheat brown bread`,
                productImage : "./images/Smruti2.avif"
            },

            {
                //3
                name : "Veg Cheese Pizza",
                price : "₹216.00",
                description : `Veg cheese pizza that decidedly staggers under an overload of crunchy onions, crisp capsicum and juicy fresh tomatoes.serves with green chutney and 3 sauce pocket`,
                productImage : "./images/Smruti3.avif"
            },
            {
                //4
                name : "Garlic Bread With Cheeses",
                price : "₹152.00",
                description : `Served with 4 Pc`,
                productImage : "./images/Smruti4.avif"
            },

            {
                //5
                name : "Veg Cheese Pizza",
                price : "₹216.00",
                description : `Veg cheese pizza that decidedly staggers under an overload of crunchy onions, crisp capsicum and juicy fresh tomatoes.serves with green chutney and 3 sauce pocket`,
                productImage : "./images/Smruti3.avif"
            },



        ]
    },









    {
        //*restaurant 7   Pavbhaji1
        name : "Mahesh Pavbhaji - Pal",
        restaurantLocation : "Fast Food, Burgers",
        rating : "4.4",
        distance : "30-35 MINS",
        offerGoingOn : "₹300 for two",
        restaurantImg : "./images/Pavbhaji.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Regular Pav Bhaji",
                price : "₹204.00",
                description : `| Serves 1 |The Indo Chinese starter dish where fried vegetable balls are coated with thick, flavorful sauce with cabbage salad `,
                productImage : "./images/Pavbhaji1.avif"
            }
            ,

            {
                //2
                name : "Paneer Chilli",
                price : "₹323.00",
                description : `A delightfully, flavorful dish prepared with soft paneer and slowly cooked with flavorful chili sauce and other masalas.`,
                productImage : "./images/Pavbhaji2.avif"
            },

            {
                //3
                name : "Veg Crispy",
                price : "₹323.00",
                description : `The mix vegetables is fried in such a way that the skin is extremely crunchy, but inside vegetables are soft and juicy. Cooked with schezwan sauce and bell peppers.`,
                productImage : "./images/Pavbhaji3.avif"
            },
            {
                //4
                name : "Garlic Bread With Cheeses",
                price : "₹152.00",
                description : `Served with 4 Pc`,
                productImage : "./images/Smruti4.avif"
            },

            {
                //5
                name : "Veg Manchurian Gravy",
                price : "₹204.00",
                description : `Veg Manchurian gravy recipe has a sauce or gravy in which the fried veggies balls are tossed and dunked.`,
                productImage : "./images/Pavbhaji4.avif"
            },



        ]
    },








    {
        //*restaurant 8   Subway
        name : "Subway",
        restaurantLocation : "Burgers, Beverages",
        rating : "4.4",
        distance : "30-35 MINS",
        offerGoingOn : "₹400 for two",
        restaurantImg : "./images/Subway.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Crispy Veg Burger",
                price : "₹70.00",
                description : `Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds`,
                productImage : "./images/Burger1.avif"
            }
            ,

            {
                //2
                name : "4 Crispy Veg + 2 Medium Fries",
                price : "₹400.00",
                description : `4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds`,
                productImage : "./images/Burger2.avif"
            },

            {
                //3
                name : "Medium Fries",
                price : "₹115.00",
                description : `The Perfect Crispy Partner. Qty: 114 Gms| Kcal: 332.5 | Carbs 445.39 Gms| Sugar: 0 Gms| Fat: 14.4 Gms| Saturated fat: 6.8 Gms| Protein: 5.9 Gms| Sodium: 528.8 Mg Contains: Gluten`,
                productImage : "./images/Burger3.avif"
            },
            {
                //4
                name : "King Peri Peri Fries",
                price : "₹159.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 161 Gms| Kcal: 467.8 | Carbs 611.7 Gms| Sugar: 0.9 Gms| Fat: 20 Gms| Saturated fat: 9.3 Gms| Protein: 8.4 Gms| Sodium: 1193.7 Mg Contains: Gluten, Soybean`,
                productImage : "./images/Burger4.avif"
            },

            {
                //5
                name : "Medium Peri Peri Fries.",
                price : "₹144.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 119 Gms| Kcal: 345.3 | Carbs 447.6 Gms| Sugar: 0.9 Gms| Fat: 14.7 Gms| Saturated fat: 6.8 Gms| Protein: 6.3 Gms| Sodium: 998.8 Mg Contains: Soybean, Milk`,
                productImage : "./images/Burger5.avif"
            },



        ]
    },









    {
        //*restaurant 9   URBAN EGG
        name : "Hotel Taj",
        restaurantLocation : "Biryani, Mughlai",
        rating : "4.2",
        distance : "25-30 MINS",
        offerGoingOn : "₹300 for two",
        restaurantImg : "./images/taj.jpg",
        RecommendedProducts : [
            {   
                //1
                name : "Chicken Kadai",
                price : "₹203.00",
                description : `Chunks of chicken cooked in special grounded kadai masala with delicious onion and tomato gravy.`,
                productImage : "./images/Dastarkhwan1.avif"
            }
            ,

            {
                //2
                name : "Chicken Laziz Handi",
                price : "₹203.00",
                description : `Murgh handi lazeez - chicken very delicious handi chicken is cooked with cream, stock, yogurt, onion paste and lemon juice etc. || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan2.avif"
            },

            {
                //3
                name : "Butter Chicken",
                price : "₹216.00",
                description : `Chicken marinated in lemon juice, dahi, Kashmiri lal mirch, salt, garam masala and ginger garlic paste, then roasted and cooked in tomato - onion and garlic and ginger-based, cream, butter and various spices sauce that is simmered until smooth(serves 1) || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan3.avif"
            },
            {
                //4
                name : "Chicken Tikka Masala",
                price : "₹216.00",
                description : `Chicken tikka masala, usually mix with spices and can be enjoyed with roti, naan or rice. || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan4.avif"
            },

            {
                //5
                name : "Veg Dum Biryani",
                price : "₹135.00",
                description : `A fragrant Basmati rice dish with layers of flavorful vegetables.`,
                productImage : "./images/Dastarkhwan5.avif"
            },



        ]
    },













    {
        //*restaurant 10   Dastarkhwan1
        name : "Mumbai Dawat Restaurant",
        restaurantLocation : "Biryani, Mughlai",
        rating : "4.2",
        distance : "25-30 MINS",
        offerGoingOn : "₹300 for two",
        restaurantImg : "./images/Dastarkhwan Restaurant.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Chicken Kadai",
                price : "₹203.00",
                description : `Chunks of chicken cooked in special grounded kadai masala with delicious onion and tomato gravy.`,
                productImage : "./images/Dastarkhwan1.avif"
            }
            ,

            {
                //2
                name : "Chicken Laziz Handi",
                price : "₹203.00",
                description : `Murgh handi lazeez - chicken very delicious handi chicken is cooked with cream, stock, yogurt, onion paste and lemon juice etc. || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan2.avif"
            },

            {
                //3
                name : "Butter Chicken",
                price : "₹216.00",
                description : `Chicken marinated in lemon juice, dahi, Kashmiri lal mirch, salt, garam masala and ginger garlic paste, then roasted and cooked in tomato - onion and garlic and ginger-based, cream, butter and various spices sauce that is simmered until smooth(serves 1) || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan3.avif"
            },
            {
                //4
                name : "Chicken Tikka Masala",
                price : "₹216.00",
                description : `Chicken tikka masala, usually mix with spices and can be enjoyed with roti, naan or rice. || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan4.avif"
            },

            {
                //5
                name : "Veg Dum Biryani",
                price : "₹135.00",
                description : `A fragrant Basmati rice dish with layers of flavorful vegetables.`,
                productImage : "./images/Dastarkhwan5.avif"
            },



        ]
    },








    {
        //*restaurant 11   Smruti1
        name : "Lalbaugh Chinese Corner",
        restaurantLocation : "Fast Food, Burgers",
        rating : "4.2",
        distance : "25-20 MINS",
        offerGoingOn : "₹350 for two",
        restaurantImg : "./images/Smruti.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Manchurian Dry",
                price : "₹180.00",
                description : `| Serves 1 |The Indo Chinese starter dish where fried vegetable balls are coated with thick, flavorful sauce with cabbage salad `,
                productImage : "./images/Smruti1.avif"
            }
            ,

            {
                //2
                name : "Bread Butter Cheese Chatni",
                price : "₹112.00",
                description : `Classic Veg. Cheese S/w in whole wheat brown bread`,
                productImage : "./images/Smruti2.avif"
            },

            {
                //3
                name : "Veg Cheese Pizza",
                price : "₹216.00",
                description : `Veg cheese pizza that decidedly staggers under an overload of crunchy onions, crisp capsicum and juicy fresh tomatoes.serves with green chutney and 3 sauce pocket`,
                productImage : "./images/Smruti3.avif"
            },
            {
                //4
                name : "Garlic Bread With Cheeses",
                price : "₹152.00",
                description : `Served with 4 Pc`,
                productImage : "./images/Smruti4.avif"
            },

            {
                //5
                name : "Veg Cheese Pizza",
                price : "₹216.00",
                description : `Veg cheese pizza that decidedly staggers under an overload of crunchy onions, crisp capsicum and juicy fresh tomatoes.serves with green chutney and 3 sauce pocket`,
                productImage : "./images/Smruti3.avif"
            },



        ]
    },









    {
        //*restaurant 12   Pavbhaji1
        name : "Thane Garam Pav Bhaji",
        restaurantLocation : "Fast Food, Burgers",
        rating : "4.4",
        distance : "30-35 MINS",
        offerGoingOn : "₹300 for two",
        restaurantImg : "./images/Pavbhaji.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Regular Pav Bhaji",
                price : "₹204.00",
                description : `| Serves 1 |The Indo Chinese starter dish where fried vegetable balls are coated with thick, flavorful sauce with cabbage salad `,
                productImage : "./images/Pavbhaji1.avif"
            }
            ,

            {
                //2
                name : "Paneer Chilli",
                price : "₹323.00",
                description : `A delightfully, flavorful dish prepared with soft paneer and slowly cooked with flavorful chili sauce and other masalas.`,
                productImage : "./images/Pavbhaji2.avif"
            },

            {
                //3
                name : "Veg Crispy",
                price : "₹323.00",
                description : `The mix vegetables is fried in such a way that the skin is extremely crunchy, but inside vegetables are soft and juicy. Cooked with schezwan sauce and bell peppers.`,
                productImage : "./images/Pavbhaji3.avif"
            },
            {
                //4
                name : "Garlic Bread With Cheeses",
                price : "₹152.00",
                description : `Served with 4 Pc`,
                productImage : "./images/Smruti4.avif"
            },

            {
                //5
                name : "Veg Manchurian Gravy",
                price : "₹204.00",
                description : `Veg Manchurian gravy recipe has a sauce or gravy in which the fried veggies balls are tossed and dunked.`,
                productImage : "./images/Pavbhaji4.avif"
            },



        ]
    },







    {
        //*restaurant 13   McDonald's1
        name : "McDonald's",
        restaurantLocation : "Burgers, Beverages",
        rating : "4.4",
        distance : "30-35 MINS",
        offerGoingOn : "₹400 for two",
        restaurantImg : "./images/McDonald's1.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Crispy Veg Burger",
                price : "₹70.00",
                description : `Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds`,
                productImage : "./images/Burger1.avif"
            }
            ,

            {
                //2
                name : "4 Crispy Veg + 2 Medium Fries",
                price : "₹400.00",
                description : `4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds`,
                productImage : "./images/Burger2.avif"
            },

            {
                //3
                name : "Medium Fries",
                price : "₹115.00",
                description : `The Perfect Crispy Partner. Qty: 114 Gms| Kcal: 332.5 | Carbs 445.39 Gms| Sugar: 0 Gms| Fat: 14.4 Gms| Saturated fat: 6.8 Gms| Protein: 5.9 Gms| Sodium: 528.8 Mg Contains: Gluten`,
                productImage : "./images/Burger3.avif"
            },
            {
                //4
                name : "King Peri Peri Fries",
                price : "₹159.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 161 Gms| Kcal: 467.8 | Carbs 611.7 Gms| Sugar: 0.9 Gms| Fat: 20 Gms| Saturated fat: 9.3 Gms| Protein: 8.4 Gms| Sodium: 1193.7 Mg Contains: Gluten, Soybean`,
                productImage : "./images/Burger4.avif"
            },

            {
                //5
                name : "Medium Peri Peri Fries.",
                price : "₹144.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 119 Gms| Kcal: 345.3 | Carbs 447.6 Gms| Sugar: 0.9 Gms| Fat: 14.7 Gms| Saturated fat: 6.8 Gms| Protein: 6.3 Gms| Sodium: 998.8 Mg Contains: Soybean, Milk`,
                productImage : "./images/Burger5.avif"
            },



        ]
    },








    {
        //*restaurant 14   Subway
        name : "Subway - 2",
        restaurantLocation : "Burgers, Beverages",
        rating : "4.4",
        distance : "30-35 MINS",
        offerGoingOn : "₹400 for two",
        restaurantImg : "./images/Subway.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Crispy Veg Burger",
                price : "₹70.00",
                description : `Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds`,
                productImage : "./images/Burger1.avif"
            }
            ,

            {
                //2
                name : "4 Crispy Veg + 2 Medium Fries",
                price : "₹400.00",
                description : `4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds`,
                productImage : "./images/Burger2.avif"
            },

            {
                //3
                name : "Medium Fries",
                price : "₹115.00",
                description : `The Perfect Crispy Partner. Qty: 114 Gms| Kcal: 332.5 | Carbs 445.39 Gms| Sugar: 0 Gms| Fat: 14.4 Gms| Saturated fat: 6.8 Gms| Protein: 5.9 Gms| Sodium: 528.8 Mg Contains: Gluten`,
                productImage : "./images/Burger3.avif"
            },
            {
                //4
                name : "King Peri Peri Fries",
                price : "₹159.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 161 Gms| Kcal: 467.8 | Carbs 611.7 Gms| Sugar: 0.9 Gms| Fat: 20 Gms| Saturated fat: 9.3 Gms| Protein: 8.4 Gms| Sodium: 1193.7 Mg Contains: Gluten, Soybean`,
                productImage : "./images/Burger4.avif"
            },

            {
                //5
                name : "Medium Peri Peri Fries.",
                price : "₹144.00",
                description : `Crispy Fries With Tangy Peri Peri Spice. Qty: 119 Gms| Kcal: 345.3 | Carbs 447.6 Gms| Sugar: 0.9 Gms| Fat: 14.7 Gms| Saturated fat: 6.8 Gms| Protein: 6.3 Gms| Sodium: 998.8 Mg Contains: Soybean, Milk`,
                productImage : "./images/Burger5.avif"
            },



        ]
    },









    {
        //*restaurant 15   URBAN EGG
        name : "URBAN EGG",
        restaurantLocation : "Biryani, Mughlai",
        rating : "4.2",
        distance : "25-30 MINS",
        offerGoingOn : "₹300 for two",
        restaurantImg : "./images/URBAN EGG.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Chicken Kadai",
                price : "₹203.00",
                description : `Chunks of chicken cooked in special grounded kadai masala with delicious onion and tomato gravy.`,
                productImage : "./images/Dastarkhwan1.avif"
            }
            ,

            {
                //2
                name : "Chicken Laziz Handi",
                price : "₹203.00",
                description : `Murgh handi lazeez - chicken very delicious handi chicken is cooked with cream, stock, yogurt, onion paste and lemon juice etc. || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan2.avif"
            },

            {
                //3
                name : "Butter Chicken",
                price : "₹216.00",
                description : `Chicken marinated in lemon juice, dahi, Kashmiri lal mirch, salt, garam masala and ginger garlic paste, then roasted and cooked in tomato - onion and garlic and ginger-based, cream, butter and various spices sauce that is simmered until smooth(serves 1) || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan3.avif"
            },
            {
                //4
                name : "Chicken Tikka Masala",
                price : "₹216.00",
                description : `Chicken tikka masala, usually mix with spices and can be enjoyed with roti, naan or rice. || Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish.||`,
                productImage : "./images/Dastarkhwan4.avif"
            },

            {
                //5
                name : "Veg Dum Biryani",
                price : "₹135.00",
                description : `A fragrant Basmati rice dish with layers of flavorful vegetables.`,
                productImage : "./images/Dastarkhwan5.avif"
            },



        ]
    },









    {
        //*restaurant 16   Smruti1
        name : "Pizza Hut",
        restaurantLocation : "Fast Food, Burgers",
        rating : "4.4",
        distance : "25-20 MINS",
        offerGoingOn : "₹350 for two",
        restaurantImg : "./images/Pizza Hut.avif",
        RecommendedProducts : [
            {   
                //1
                name : "Manchurian Dry",
                price : "₹180.00",
                description : `| Serves 1 |The Indo Chinese starter dish where fried vegetable balls are coated with thick, flavorful sauce with cabbage salad `,
                productImage : "./images/Smruti1.avif"
            }
            ,

            {
                //2
                name : "Bread Butter Cheese Chatni",
                price : "₹112.00",
                description : `Classic Veg. Cheese S/w in whole wheat brown bread`,
                productImage : "./images/Smruti2.avif"
            },

            {
                //3
                name : "Veg Cheese Pizza",
                price : "₹216.00",
                description : `Veg cheese pizza that decidedly staggers under an overload of crunchy onions, crisp capsicum and juicy fresh tomatoes.serves with green chutney and 3 sauce pocket`,
                productImage : "./images/Smruti3.avif"
            },
            {
                //4
                name : "Garlic Bread With Cheeses",
                price : "₹152.00",
                description : `Served with 4 Pc`,
                productImage : "./images/Smruti4.avif"
            },

            {
                //5
                name : "Veg Cheese Pizza",
                price : "₹216.00",
                description : `Veg cheese pizza that decidedly staggers under an overload of crunchy onions, crisp capsicum and juicy fresh tomatoes.serves with green chutney and 3 sauce pocket`,
                productImage : "./images/Smruti3.avif"
            },



        ]
    },







]



// !Access the root element 
let divRoot = document.querySelector("#root");



// Approach I have to iterate over the restaurantData Array and display it into the UI 

let displayRestaurants = () =>{


    restaurantData.map((currentRestaurant , currentIndex) => {
        divRoot.innerHTML += `<div class="all-restaurants">
                                <div class="all-restaurants-1">
                                    <img src="${currentRestaurant.restaurantImg}" alt="">
                                    <h2>${currentRestaurant.name}</h2>
                                    <h3>${currentRestaurant.restaurantLocation}</h3>
                                    <span>Vesu</span>
                                </div>
    
                                <div class="all-restaurants-2">
                                    <h4 class="rating"><i class="fa-solid fa-star"></i> 
                                    ${currentRestaurant.rating}</h4>
                                    <span>.</span>
                                    <h4>${currentRestaurant.distance}</h4>
                                    <span>.</span>
                                    <h4>${currentRestaurant.offerGoingOn}</h4>
                                </div>
                            </div>`
    })

}


displayRestaurants();

