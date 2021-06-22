shop = new Shop("Supermarket")
shop.addProduct("Apples", 10, 5)
shop.addProduct("Bananas", 6, 2)
shop.addProduct("Apples", 10)

shop.showProducts() 
# Our Products:
# -------
# Name: Apples, Price: 10, Stock: 6
# Name: Bananas, Price: 6, Stock: 2


shop.sale(50)
# Hooray! We have a 50% sale!
# Apples is now 5
# Bananas is now 3


shop.purchase("Bananas")
# Bananas purchased! ,  New stock is now 1

shop.stock("Bananas")
# Bananas has 1 in stock

shop.removeProduct("Bananas")
# Bananas has been removed from the products

shop.showProducts()
# Our Products:
# -------
# Name: Apples, Price: 10, Stock: 6


class Shop {
    constructor (shopName, product) {
        this.ShopName = ShopName;
        this.newProductArray = []
    }
    addProduct (productName, price, stock = 1) {
        const newProduct = {
            name: productName,
            price: price,
            stock: stock   
        }
        this.newProductArray.push(newProduct);
        
        }
    sale ()
    }

/*
cost myShop = new Shop("my shop")
const otherShop = new Shop ("other shop")


myShop {
    name: "my shop"
}

otherShop {
    name: "other shop"
}

myShop.addProduct("apples", 2, 5)
otherShop.addProduct ("oranges", 1.8, 5)

// this will add ("apples", 2, 5) to the myShop of Shop - creating a new shop
// the other will add an otherShop with the object containing ("oranges", 1.8, 5)

const apples {
    price: price,
    stock: stock
}
*/

/*
---
- **addProduct**
    should take the name, price and stock of your product. 
    Stock should be optional otherwise it counts as 1.

*/

/*
**sale**
    should print out new prices for all your products based on the percentage you pass 
    ```js
    sale(50) #applies a 50% sale
    ```
    */