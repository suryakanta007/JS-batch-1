const products = [
    {
      id: 1,
      title: "iPhone 14",
      category: "Electronics",
      brand: "Apple",
      price: 79999,
      discountPercentage: 10,
      rating: 4.7,
      stock: 15,
      isFeatured: true
    },
    {
      id: 2,
      title: "Samsung Galaxy S23",
      category: "Electronics",
      brand: "Samsung",
      price: 69999,
      discountPercentage: 12,
      rating: 4.5,
      stock: 25,
      isFeatured: false
    },
    {
      id: 3,
      title: "Nike Air Max",
      category: "Fashion",
      brand: "Nike",
      price: 5999,
      discountPercentage: 20,
      rating: 4.3,
      stock: 40,
      isFeatured: true
    },
    {
      id: 4,
      title: "Levi's Jeans",
      category: "Fashion",
      brand: "Levi's",
      price: 2999,
      discountPercentage: 15,
      rating: 4.1,
      stock: 30,
      isFeatured: false
    },
    {
      id: 5,
      title: "Wooden Study Table",
      category: "Furniture",
      brand: "HomeStyle",
      price: 8999,
      discountPercentage: 18,
      rating: 4.0,
      stock: 10,
      isFeatured: false
    },
    {
      id: 6,
      title: "Dell Inspiron Laptop",
      category: "Electronics",
      brand: "Dell",
      price: 54999,
      discountPercentage: 8,
      rating: 4.6,
      stock: 8,
      isFeatured: true
    },
    {
      id: 7,
      title: "Boat Rockerz Headphones",
      category: "Electronics",
      brand: "Boat",
      price: 1999,
      discountPercentage: 25,
      rating: 4.2,
      stock: 50,
      isFeatured: false
    },
    {
      id: 8,
      title: "Puma Running T-Shirt",
      category: "Fashion",
      brand: "Puma",
      price: 1499,
      discountPercentage: 30,
      rating: 4.4,
      stock: 60,
      isFeatured: true
    }
  ];
  

  // [
  //   {title,afterDiscount:789},
  //   {title,afterDiscount:789},
  //   {title,afterDiscount:789},
  //   {title,afterDiscount:789},
  //   {title,afterDiscount:789},
  //   {title,afterDiscount:789},
  //   {title,afterDiscount:789},
  //   {title,afterDiscount:789},
  //   {title,afterDiscount:789},

  // ]


//   let results = products.map((ele)=>{
//     let per = ele.price*ele.discountPercentage/100;

//     let afterDiscountPrice = ele.price-per

//     return {title:ele.title,
//       afterDiscount:afterDiscountPrice
//     }
//   })

// console.log(results)


//  {
//   id: 1,
//   title: "iPhone 14",
//   category: "Electronics",
//   brand: "Apple",
//   price: 79999,
//   discountPercentage: 10,
//   rating: 4.7,
//   stock: 15,
//   isFeatured: true
// },


let result = products.filter((ele)=>{
  return ele.category==="Electronics"
})
console.log(result);
