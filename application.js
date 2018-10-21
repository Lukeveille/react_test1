// var item = {
//   name: "gravy",
//   price: 5,
//   imageURL: "https://i.pinimg.com/originals/a8/f9/d3/a8f9d33962b13ba82f029a34252e14a4.jpg"
// }
// var styleObject = {
//   backgroundColor: 'red',
//   color:'blue',
//   fontSize: 25,
//   width: 100
// }

// var str = "World!"
// var hello = <h1>Hello {str} Time to get that ${item.price} {item.name}.</h1>

// var button = <button className ="deleteButton" style = {{width:50}}> Delete </button>

// var pic = <img src = {item.imageURL}></img>

// ReactDOM.render(
//   button,
//   document.getElementById("root")
// )

var product = {name:"apple", stock:0}

if (product.stock < 0) {
  var element = <h1>The product named {product.name} is not in stock</h1>
}
else {
  var element = <h1>The product named {product.name} and has {product.stock} units in stock</h1>
}

ReactDOM.render(
  element,
  document.getElementById("root")
)