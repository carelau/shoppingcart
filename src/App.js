import './App.css';
import { Header } from './components/Header';
import { useState } from 'react';
import { Shopping } from './components/Shopping';
import { Basket } from './components/Basket';

function App() {
  const [ cartItems, setCartItems ] = useState([]);
  const products = [
{
  id: '1',
  name: 'KitchenAid Mixer',
  price: 400,
  image: 'https://whirlpool-cdn.thron.com/delivery/public/thumbnail/whirlpool/pi-fc779f6d-c2ac-4d61-ad7c-7a04a544e217/sckne7/std/1000x1000/859701315010.jpg?fill=zoom&fillcolor=rgba:255,255,255&scalemode=product'

},
{
  id: '2',
  name: 'Lavazaa Milk Frother',
  price: 49,
  image: 'https://lakelandcamel.scene7.com/is/image/LakelandCamel/31912_2?$610$'
},
{
  id: '3',
  name: 'Ninja Blender',
  price: 130,
  image: 'https://m.ninjakitchen.com/include/images/products/hero-HB152WBKT.jpg'

},
{
  id: '4',
  name: 'Vitamix ',
  price: 400,
  image: 'https://static.onecms.io/wp-content/uploads/sites/9/2019/09/vitamix-blender-lead.jpg'

},
{
  id: '5',
  name: 'DysonV7 Vacuum Cleaner',
  price: 200,
  image: 'https://brain-images-ssl.cdn.dixons.com/5/6/10169065/u_10169065.jpg'

},
{
  id: '6',
  name: 'All-Clad Frying Pan',
  price: 110,
  image: 'https://cdn.shopify.com/s/files/1/0345/3514/5604/products/all-clad-d3-triply-frying-pan-with-lid-30cm-borough-kitchen_2048x2048.jpg?v=1606926575'

},
  ]

function addToCart (item)  {
    const found = cartItems.find(product => product.id === item.id);
    if (found === undefined) {
      setCartItems([...cartItems, {...item,  quantity : 1}]);
    }
    else {
      let newArray = cartItems.map(x => (x.id === item.id) ? {...x, quantity: x.quantity + 1 }: x);
      setCartItems (newArray); 
  }
};


function removeFromCart (product) {
  const found = cartItems.find (item => item.id === product.id);
  if (found!== undefined & found.quantity === 1) {
    setCartItems (cartItems.filter (x => x.id !== product.id))
  }
  else if (found!== undefined & found.quantity > 1) {
    setCartItems(cartItems.map(x=> (x.id === product.id)? {...x, quantity: x.quantity - 1 }: x ));
  }

}
  return (
    <div className="App">
      <Header numCartItems = {cartItems.reduce((total, item)=> total + item.quantity, 0 ) } />
      <br/>
      <div className="main" >
      <Shopping products={products} onAdd = {addToCart} />
      <Basket className="block pricerow" cartItems={cartItems} onAdd={addToCart} onRemove ={removeFromCart}/>
      </div>
    </div>
  );
}

export default App;
