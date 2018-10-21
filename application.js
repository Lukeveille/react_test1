// Objects
var item = {
  name: "gravy",
  stock: 2,
  price: 5,
  imageURL: "https://i.pinimg.com/originals/a8/f9/d3/a8f9d33962b13ba82f029a34252e14a4.jpg"
}
var styleObject = {
  backgroundColor: '#666',
  color: '#FFF',
  fontSize: 25,
}

// Logic
if (item.stock < 1) {
  var element = <h1>The item named {item.name} is not in stock</h1>
} else {
  var element = <h1 style={styleObject}>The item named {item.name} and has {item.stock} units in stock at ${item.price} costing a total of ${multiply(item.stock, item.price)}</h1> 
}

var allofit = <div><Hello name="Luke"/>{element}</div>

// React DOM
ReactDOM.render(
  allofit,
  document.getElementById("root")
)

// Functions
function multiply(a, b) {
  return a * b
}
function Hello(arg) {
  return <h2>Hello {arg.name}!</h2>
}