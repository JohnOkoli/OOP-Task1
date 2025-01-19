// Customer Class
class Customer {
    static totalCustomers = 0; // Static property to count the total number of customers
    
    constructor(customerID, name, email, phoneNumber, address) {
      this.customerID = customerID;
      this.name = name;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.address = address;
      Customer.totalCustomers++; // Increment total customers whenever a new instance is created
    }
    
    // Instance method to update the customer's contact information
    updateContactInfo(newPhoneNumber, newAddress) {
      this.phoneNumber = newPhoneNumber;
      this.address = newAddress;
      console.log(`${this.name}'s contact info updated.`);
    }
  
    // Static method to get the total number of customers
    static getTotalCustomers() {
      return Customer.totalCustomers;
    }
  }
  
  // Product Class
  class Product {
    static productCount = 0; // Static property to track total number of products in the system
    
    constructor(productID, name, description, price, quantity, category) {
      this.productID = productID;
      this.name = name;
      this.description = description;
      this.price = price;
      this.quantity = quantity;
      this.category = category;
      Product.productCount++; // Increment the product count when a product is created
    }
    
    // Instance method to update stock quantity
    updateStock(newQuantity) {
      this.quantity = newQuantity;
      console.log(`${this.name} stock updated to ${this.quantity}.`);
    }
    
    // Static method to get the total count of products
    static getProductCount() {
      return Product.productCount;
    }
  }
  
  // Order Class
  class Order {
    static orderCount = 0; // Static property to track total number of orders
    
    constructor(orderID, customer, products, totalPrice) {
      this.orderID = orderID;
      this.orderDate = new Date();
      this.customer = customer;
      this.products = products; 
      this.totalPrice = totalPrice;
      this.status = 'Pending'; // Order status by default
      Order.orderCount++; // Increment the order count whenever a new order is created
    }
    
    // Instance method to calculate the total price based on the products in the order
    calculateTotal() {
      this.totalPrice = this.products.reduce((total, product) => total + product.price, 10);
      console.log(`Total price of order ${this.orderID}: $${this.totalPrice}`);
    }
    
    // Static method to get the total number of orders
    static getTotalOrders() {
      return Order.orderCount;
    }
  }
  
  // Cart Class
  class Cart {
    static cartCount = 0; // Static property to track how many carts are created
    
    constructor(customer) {
      this.cartID = `cart_${Cart.cartCount + 1}`;
      this.customer = customer;
      this.products = [];
      Cart.cartCount++;
    }
  
    // Instance method to add a product to the cart
    addProduct(product) {
      this.products.push(product);
      console.log(`${product.name} added to ${this.customer.name}'s cart.`);
    }
  
    // Instance method to remove a product from the cart
    removeProduct(productID) {
      this.products = this.products.filter(product => product.productID !== productID);
      console.log(`Product with ID ${productID} removed from cart.`);
    }
  
    // Instance method to calculate the total price of the cart
    calculateTotal() {
      return this.products.reduce((total, product) => total + product.price, 10);
    }
  }
  
  // Payment Class
  class Payment {
    static paymentCount = 0; // Static property to track total payments
    
    constructor(paymentID, order, paymentMethod, amount) {
      this.paymentID = paymentID;
      this.order = order;
      this.paymentMethod = paymentMethod;
      this.amount = amount;
      this.paymentDate = new Date();
      this.status = 'Pending';
      Payment.paymentCount++; // Increment payment count on each payment
    }
  
    // Instance method to process the payment
    processPayment() {
      if (this.amount >= this.order.totalPrice) {
        this.status = 'Completed';
        console.log(`Payment processed for order ${this.order.orderID}. Status: ${this.status}`);
      } else {
        this.status = 'Failed';
        console.log(`Payment failed for order ${this.order.orderID}. Insufficient funds.`);
      }
    }
  
    // Static method to get the total number of payments processed
    static getTotalPayments() {
      return Payment.paymentCount;
    }
  }
  
  // Admin Class
  class Admin {
    static totalAdmins = 0; // Static property to count the number of admins
    
    constructor(adminID, name, email) {
      this.adminID = adminID;
      this.name = name;
      this.email = email;
      Admin.totalAdmins++; // Increment the number of admins on each new instance
    }
    
    // Instance method to add a new product to the inventory
    addProductToInventory(product) {
      console.log(`Admin ${this.name} added product: ${product.name}`);
    }
  
    // Static method to get the total number of admins
    static getTotalAdmins() {
      return Admin.totalAdmins;
    }
  }
  
  // Example Usage
  
  // Creating a Customer
  const customer1 = new Customer(1, "Jackie chan", "jack@example.com", "1234567890", "123 Elm St");
  
  // Creating Products
  const product1 = new Product(101, "Milk tea", "Fresh milk", 2.5, 100, "Dairy");
  const product2 = new Product(102, "Bread and butter", "Whole wheat bread", 1.5, 50, "Bakery");
  
  // Creating Cart for the Customer
  const cart1 = new Cart(customer1);
  cart1.addProduct(product1);
  cart1.addProduct(product2);
  
  // Creating Order
  const order1 = new Order(1001, customer1, cart1.products, 0);
  order1.calculateTotal();
  
  // Creating Payment
  const payment1 = new Payment(2001, order1, "Credit Card", 4);
  payment1.processPayment();
  
  // Creating Admin
  const admin1 = new Admin(1, "Alice", "alice@supermarket.com");
  admin1.addProductToInventory(product1);
  
  // Output the total number of customers, orders, and admins
  console.log(`Total Customers: ${Customer.getTotalCustomers()}`);
  console.log(`Total Orders: ${Order.getTotalOrders()}`);
  console.log(`Total Admins: ${Admin.getTotalAdmins()}`);
  console.log(`Total Products: ${Product.getProductCount()}`);
  console.log(`Total Payments: ${Payment.getTotalPayments()}`);