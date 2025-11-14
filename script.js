const products = [
  { name: "iPhone 15", category: "mobile", price: "₹1,25,000", img: "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_UY218_.jpg" },
  { name: "Samsung S24", category: "mobile", price: "₹80,000", img: "https://m.media-amazon.com/images/I/61imYpK33qL._AC_UY218_.jpg" },
  { name: "Redmi Note 13", category: "mobile", price: "₹16,000", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kalvo.com%2Fuploads%2Fimg%2Fgallery%2F58313-xiaomi-redmi-note-13-4g-3.jpg&f=1&nofb=1&ipt=284835d1aaf32e36d62386efa4018e46e311238fa0e5fc32a15bd93428b8f681" },
  { name: "HP Pavilion Laptop", category: "laptop", price: "₹55,000", img: "https://m.media-amazon.com/images/I/81Ne5qKmE8L._AC_UY218_.jpg" },
  { name: "MacBook Air M2", category: "laptop", price: "₹1,20,000", img: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg" },
  { name: "Asus ROG Gaming Laptop", category: "laptop", price: "₹95,000", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.asus.com%2Fmedia%2FOdin%2FWebsites%2Fglobal%2FProductLine%2F20200824120814.jpg&f=1&nofb=1&ipt=0c46056a36b013783730d9bd8f1353f567b8d62f110c4648bf5e145b0efe7e2d" },
  { name: "Luxury Watch", category: "watch", price: "₹3,500", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.sophie.co.ke%2F2023%2F05%2F1955044573_8664-1_9826.jpg&f=1&nofb=1&ipt=19015b0fb4022d9a72d3caa4ba577b887b500aae71e67e44807501ca665ca81f" },
  { name: "Digital Watch", category: "watch", price: "₹1,200", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.penguin.com.bd%2Fwp-content%2Fuploads%2F2022%2F10%2FCasio-AE-1200WHD-1AVDF-Watch-For-Men.png&f=1&nofb=1&ipt=df4aac26b9d52539e885e80e23c478f55d86bb82583acf8189bd94da6f0250d8" },
  { name: "Analog Watch", category: "watch", price: "₹999", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fn3.sdlcdn.com%2Fimgs%2Fj%2Fm%2Fl%2FRS-enterprise-VNN-999-Leather-SDL824394545-2-2ca91.jpg&f=1&nofb=1&ipt=282bde3396b42ae2088612237222e4e056b2b02b3c8733f62b4358e30e168dbd" },
  { name: "Wireless Earbuds", category: "accessory", price: "₹3,000", img: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY218_.jpg" },
  { name: "Bluetooth Speaker", category: "accessory", price: "₹2,200", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.eYxdeZbOZeVCO-DUf4L-BAAAAA%3Fpid%3DApi&f=1&ipt=92cc9557841777332af1696719ce80b4e77d0feaf991ff7cebbf751534973672&ipo=images" },
  { name: "Gaming Mouse", category: "accessory", price: "₹1,800", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.BJo13AkR0k7F1ni_wXv-MQHaHa%3Fcb%3Ducfimgc2%26pid%3DApi&f=1&ipt=daf915971ec70a15304564c8a720d2fd63d4a9c6a77336d29f5fa8a115f05955&ipo=images" },
  { name: "Smart TV", category: "accessory", price: "₹45,000", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.V-sS6G_vius0L2-kVjY-CQHaHa%3Fpid%3DApi&f=1&ipt=9f94d5c0ba06a5579d3e42a502ef6d487dfb2ffa762d9b87f553e58463dea388&ipo=images" },
  { name: "OnePlus Nord", category: "mobile", price: "₹30,000", img: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UY218_.jpg" },
  { name: "Dell Inspiron", category: "laptop", price: "₹60,000", img: "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg" },
  { name: "Mi Smart Watch", category: "watch", price: "₹2,999", img: "https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_UY218_.jpg" },
  { name: "Sony Headphones", category: "accessory", price: "₹9,000", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.icAP9uG-pGvFCBKOafcfNgHaJo%3Fpid%3DApi%26ucfimg%3D1&f=1&ipt=a9327f7a4811f66d7339030930cec089b0229f8f8d58464acf3603e9f7dd0db0&ipo=images" },
  { name: "Apple AirPods", category: "accessory", price: "₹18,000", img: "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UY218_.jpg" },
  { name: "Canon DSLR", category: "accessory", price: "₹55,000", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.N7b04LiqjiEFvKaJgs-UIAHaF3%3Fpid%3DApi&f=1&ipt=a9d68037ff3793648840093aac7f48d42a1c0f2b478da0e6e2addeedbd8fbd00&ipo=images" },
  { name: "Gaming Keyboard", category: "accessory", price: "₹2,500", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.2nFcNK6walzT2TzqsP-CnAHaF3%3Fpid%3DApi&f=1&ipt=3bf72801179a542087d8e74db3d075ae3c7858d6ef6cfa5568bdfc2d9d55589d&ipo=images" }
];

let wishlist = [];

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
  if (page === 'home') showAll();
  if (page === 'wishlist') showWishlist();
}

function showAll() {
  displayProducts(products);
}

function filterCategory(cat) {
  const filtered = products.filter(p => p.category === cat);
  displayProducts(filtered);
}

function displayProducts(list) {
  const container = document.getElementById('productList');
  container.innerHTML = '';
  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>${p.price}</p>
      <button onclick="addToWishlist('${p.name}')">♡ Wishlist</button>
    `;
    container.appendChild(div);
  });
}

function addToWishlist(name) {
  const product = products.find(p => p.name === name);
  if (!wishlist.some(w => w.name === name)) {
    wishlist.push(product);
    alert(`${name} added to wishlist!`);
  } else {
    alert(`${name} already in wishlist!`);
  }
  showWishlist();
}

function showWishlist() {
  const list = document.getElementById('wishlistItems');
  list.innerHTML = wishlist.length ? '' : '<p>No items added yet.</p>';

  wishlist.forEach(item => {
    const div = document.createElement('div');
    div.className = 'wishlist-product';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.price}</p>
      </div>
    `;
    list.appendChild(div);
  });

  if (wishlist.length > 0) {
    const buyBtn = document.createElement('button');
    buyBtn.textContent = "BUY ALL";
    buyBtn.className = "buy-btn";
    buyBtn.onclick = () => {
      alert("✅ Your product has been purchased successfully!");
      wishlist = [];
      showWishlist();
    };
    list.appendChild(buyBtn);
  }
}

function searchProduct() {
  const term = document.getElementById('searchBox').value.toLowerCase();
  const result = products.filter(p => p.name.toLowerCase().includes(term));
  displayProducts(result);
}

function saveUser() {
  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  document.getElementById('userDetails').innerHTML = `<strong>Name:</strong> ${name} <br><strong>Email:</strong> ${email}`;
  alert("User details saved successfully!");
}

showAll();
