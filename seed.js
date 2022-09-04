const mongoose = require("mongoose");
const req = require("express/lib/request");
const Product = require("./models/product");
const dotenv = require("dotenv");
const { config } = require("dotenv");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((err) => {
    console.log("oh no mongo connection error");
    console.log(err);
  });

/*const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'

})
p.save().then(p=>{
    console.log(p)
})
.catch(e=>{
    console.log(e)
})
*/
const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "fruit",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];
Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
