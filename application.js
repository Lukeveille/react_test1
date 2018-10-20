var item = {
  name: "gravy",
  price: 5
}

var str = "World!"
var hello = <h1>Hello {str} Time to get that ${item.price} {item.name}.</h1>

ReactDOM.render(
  hello,
  document.getElementById("root")
)