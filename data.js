const superMarket = {
    "supermarket": {
      "name": "SuperMart",
      "location": "Cityville",
      "departments": [
        {
          "name": "Grocery",
          "categories": [
            {
              "name": "Canned Goods",
              "products": [
                {
                  "id": 101,
                  "name": "Tomato Sauce",
                  "brand": "FreshVine",
                  "price": 1.99,
                  "quantity": 500,
                  "unit": "ml",
                  "discount": 0.2,
                  "vendor": "CannedFoodsCo"
                },
                {
                  "id": 102,
                  "name": "Canned Corn",
                  "brand": "Golden Harvest",
                  "price": 0.89,
                  "quantity": 400,
                  "unit": "g",
                  "discount": 0.1,
                  "vendor": "GoldenHarvestFarms"
                },
                {
                  "id": 103,
                  "name": "Olive Oil",
                  "brand": "HealthyHarvest",
                  "price": 5.99,
                  "quantity": 750,
                  "unit": "ml",
                  "vendor": "OilMasters"
                }
                // More products in Canned Goods category
              ]
            },
            {
              "name": "Bakery",
              "products": [
                {
                  "id": 201,
                  "name": "Whole Wheat Bread",
                  "brand": "NutriBake",
                  "price": 2.49,
                  "quantity": 1,
                  "unit": "loaf",
                  "vendor": "BakeryDelights"
                },
                {
                  "id": 202,
                  "name": "Chocolate Chip Cookies",
                  "brand": "SweetIndulgence",
                  "price": 3.99,
                  "quantity": 300,
                  "unit": "g",
                  "vendor": "CookieMasters"
                }
                // More products in Bakery category
              ]
            }
            // More categories in Grocery department
          ]
        },
        {
          "name": "Produce",
          "categories": [
            {
              "name": "Fruits",
              "products": [
                {
                  "id": 301,
                  "name": "Apple",
                  "variety": "Fuji",
                  "price": 0.75,
                  "quantity": 1,
                  "unit": "each",
                  "vendor": "FreshFruitsFarm",
                  "organic": true
                },
                {
                  "id": 302,
                  "name": "Banana",
                  "variety": "Cavendish",
                  "price": 0.25,
                  "quantity": 1,
                  "unit": "each",
                  "vendor": "TropicalHarvest",
                  "organic": false
                },
                {
                  "id": 303,
                  "name": "Mango",
                  "variety": "Alphonso",
                  "price": 1.50,
                  "quantity": 1,
                  "unit": "each",
                  "vendor": "ExoticFruitsCo",
                  "organic": true
                }
                // More products in Fruits category
              ]
            },
            {
              "name": "Vegetables",
              "products": [
                {
                  "id": 401,
                  "name": "Carrot",
                  "type": "Root",
                  "price": 0.50,
                  "quantity": 1,
                  "unit": "each",
                  "vendor": "FreshVeggiesFarm",
                  "organic": true
                },
                {
                  "id": 402,
                  "name": "Broccoli",
                  "type": "Cruciferous",
                  "price": 1.20,
                  "quantity": 1,
                  "unit": "each",
                  "vendor": "GreenHarvest",
                  "organic": false
                }
                // More products in Vegetables category
              ]
            }
            // More categories in Produce department
          ]
        }
        // More departments
      ]
    }
  }
  
const dressStore = {
    "dressStore": {
      "name": "ChicStyles",
      "location": "FashionCity",
      "categories": [
        {
          "name": "Casual Dresses",
          "products": [
            {
              "id": 101,
              "name": "Summer Sundress",
              "brand": "SunFlare",
              "price": 29.99,
              "size": "M",
              "color": "Blue",
              "material": "Cotton",
              "style": "Sleeveless"
            },
            {
              "id": 102,
              "name": "Striped Maxi Dress",
              "brand": "StripeDream",
              "price": 39.99,
              "size": "L",
              "color": "Red/White",
              "material": "Polyester",
              "style": "Maxi"
            }
            // More products in Casual Dresses category
          ]
        },
        {
          "name": "Formal Dresses",
          "products": [
            {
              "id": 201,
              "name": "Elegant Evening Gown",
              "brand": "EleganceCouture",
              "price": 129.99,
              "size": "S",
              "color": "Black",
              "material": "Silk",
              "style": "Floor-Length"
            },
            {
              "id": 202,
              "name": "Lace Cocktail Dress",
              "brand": "LaceEnvy",
              "price": 89.99,
              "size": "M",
              "color": "Navy Blue",
              "material": "Lace",
              "style": "Knee-Length"
            }
            // More products in Formal Dresses category
          ]
        },
        {
          "name": "Accessories",
          "products": [
            {
              "id": 301,
              "name": "Crystal Clutch",
              "brand": "GlamClutch",
              "price": 49.99,
              "color": "Silver",
              "material": "Metallic",
              "type": "Clutch"
            },
            {
              "id": 302,
              "name": "Statement Necklace",
              "brand": "ChicAdorn",
              "price": 19.99,
              "color": "Gold",
              "material": "Alloy",
              "type": "Necklace"
            }
            // More products in Accessories category
          ]
        }
        // More categories in the dress store
      ]
    }
  }

const peoples =[
  {
    "id": 0,
    "name": "Clarke"
  },
  {
    "id": 1,
    "name": "Palmer"
  },
  {
    "id": 2,
    "name": "Dennis"
  },
  {
    "id": 3,
    "name": "Spencer"
  },
  {
    "id": 4,
    "name": "George"
  },
  {
    "id": 5,
    "name": "Stephens"
  },
  {
    "id": 6,
    "name": "Lowe"
  },
  {
    "id": 7,
    "name": "Lloyd"
  },
  {
    "id": 8,
    "name": "Mckinney"
  },
  {
    "id": 9,
    "name": "Flowers"
  }
]

module.exports = {superMarket, dressStore, peoples}   