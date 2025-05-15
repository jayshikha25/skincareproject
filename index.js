function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 270; // width of card + margin
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

const productMenu = document.getElementById('productsMenu');

document.addEventListener('click', function(e) {
  // Toggle only when clicking the menu
  if (productMenu.contains(e.target)) {
    productMenu.classList.toggle('active');
  } else {
    productMenu.classList.remove('active');
  }
});

const digitalMenu = document.getElementById('digitalMenu');

  document.addEventListener('click', function (e) {
    if (digitalMenu.contains(e.target)) {
      digitalMenu.classList.toggle('active');
    } else {
      digitalMenu.classList.remove('active');
    }
  });

  function openModal() {
  document.getElementById("authModal").style.display = "flex";
   }
  
  function closeModal() {
  document.getElementById("authModal").style.display = "none";
  }
  
  function showSignup() {
  document.getElementById("loginForm").style.display = "none";
     document.getElementById("signupForm").style.display = "block";
   }
  
  // function showLogin() {
  //   document.getElementById("signupForm").style.display = "none";
  //   document.getElementById("loginForm").style.display = "block";
  // }

  // function signup() {
  //   const email = document.getElementById("Email").value;
  //   const password = document.getElementById("Password").value;
  //   const tele = document.getElementById("Tele").value;

  //   auth.createUserWithEmailAndPassword(email, password,tele)
  //     .then((userCredential) => {
  //       document.getElementById("message").innerText = "✅ Signup successful!";
  //     })
  //     .catch((error) => {
  //       document.getElementById("message").innerText = `❌ ${error.message}`;
  //     });
  // }

  // function login() {
  //   const email = document.getElementById("Email").value;
  //   const password = document.getElementById("Password").value;

  //   auth.signInWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       document.getElementById("message").innerText = "✅ Login successful!";
  //     })
  //     .catch((error) => {
  //       document.getElementById("message").innerText = `❌ ${error.message}`;
  //     });
  // }

  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     document.getElementById("message").innerText = `🔓 Logged in as ${user.email}`;
  //   } else {
  //     console.log("User not logged in");
  //   }
  // });

  let currentUser = null;
  let cart = [];

  
  const firebaseConfig = {
    apiKey: "AIzaSyB8GYtBL11bl_z3RVN1d2SFwKr27qXwSLc",
        authDomain: "skincare-193a2.firebaseapp.com",
        projectId: "skincare-193a2",
        storageBucket: "skincare-193a2.firebasestorage.app",
        messagingSenderId: "1081830245370",
        appId: "1:1081830245370:web:9acc7e8708ca2e727a5a43",
        measurementId: "G-4R5NPZRL1X"
  };


  // ✅ Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  // ✅ Initialize Firebase Auth
  const auth = firebase.auth();
  const db = firebase.firestore();
  function signup() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "") {
      alert("Please enter your email.");
      return;  // Stop function if empty
    }
    if (password === "") {
      alert("Please enter your password.");
      return;
    }
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        document.getElementById("message").innerText = "✅ Signup successful!";
      })
      .catch((error) => {
        document.getElementById("message").innerText = `❌ ${error.message}`;
      });
  }

  // Login Function
  function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "") {
      alert("Please enter your email.");
      return;
    }
    if (password === "") {
      alert("Please enter your password.");
      return;
    }
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        document.getElementById("message").innerText = "✅ Login successful!";
      })
      .catch((error) => {
        document.getElementById("message").innerText = `❌ ${error.message}`;
      });
  }

  // Logout Function
  function logout() {
    auth.signOut().then(() => {
      document.getElementById("message").innerText = "👋 Logged out.";
    });
  }

  // Show login status (optional)
  auth.onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("message").innerText = `🔓 Logged in as ${user.email}`;
    } else {
      console.log("User not logged in");
    }
  });
  const dropdownMenu = document.getElementById('dropdownMenu');

  document.addEventListener('click', function (e) {
    if (dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.toggle('active');
    } else {
      dropdownMenu.classList.remove('active');
    }
  });

  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      addToCart(name, price);
    });
  });



auth.onAuthStateChanged(user => {
  if (user) {
    currentUser = user;
    loadCart(); // Load existing cart
  } else {
    currentUser = null;
    cart = [];
  }
});

function addToCart(name, price) {
  if (!currentUser) {
    alert("Please log in to add items to your cart.");
    return;
  }

  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  saveCart();
}
  
function saveCart() {
  db.collection("carts").doc(currentUser.uid).set({
    items: cart
  }).then(() => {
    console.log("Cart saved!");
  }).catch(error => {
    console.error("Error saving cart:", error);
  });
}

function loadCart() {
  db.collection("carts").doc(currentUser.uid).get().then(doc => {
    if (doc.exists) {
      cart = doc.data().items || [];
    } else {
      cart = [];
    }
  });


}

function printCart() {
  console.log("Current cart:", cart);
}

function loadCart() {
  if (!currentUser) return; // No user, no cart

  db.collection("carts").doc(currentUser.uid).get().then(doc => {
    if (doc.exists) {
      cart = doc.data().items || [];
    } else {
      cart = [];
    }
    renderCart();  // Show cart items on UI after loading
  }).catch(error => {
    console.error("Error loading cart:", error);
  });
}

function renderCart() {
  const container = document.getElementById("cart-container");
  container.innerHTML = ""; // Clear previous content

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <span>₹${item.price * item.quantity}</span>
      <button onclick="increaseQuantity(${index})">+1</button>
      <button onclick="decreaseQuantity(${index})">-1</button>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    container.appendChild(itemDiv);
  });
}

function increaseQuantity(index) {
  if (!currentUser) {
    alert("Please log in to update your cart.");
    return;
  }

  cart[index].quantity += 1;

  saveCart();    // Save updated cart to Firestore
  renderCart();
  showCartNotification()  // Refresh UI to show new quantity
}


function saveCart() {
  db.collection("carts").doc(currentUser.uid).set({
    items: cart
  }).then(() => {
    console.log("Cart saved!");
  }).catch(error => {
    console.error("Error saving cart:", error);
  });
}
auth.onAuthStateChanged(user => {
  if (user) {
    currentUser = user;
    loadCart();  // This loads and shows cart automatically on login
  } else {
    currentUser = null;
    cart = [];
    renderCart(); // Clear cart UI when logged out
  }
});

function addToCart(name, price) {
  if (!currentUser) {
    alert("Please log in to add items to your cart.");
    return;
  }

  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  saveCart();

  // ✅ Show notification
  showCartNotification();
  renderCart();  
}

function showCartNotification() {
  const notification = document.getElementById("cart-notification");
  notification.style.display = "block";

  // Hide after 2.5 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 2500);

}

function decreaseQuantity(index) {
  if (!currentUser) {
    alert("Please log in to update your cart.");
    return;
  }

  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    removeItem(index);  // Calls confirmation dialog here too
    return;  
  }

  saveCart();
  renderCart();
}

function removeItem(index) {
  if (!currentUser) {
    alert("Please log in to update your cart.");
    return;
  }

  const itemName = cart[index].name;
  const confirmDelete = confirm(`Are you sure you want to remove "${itemName}" from your cart?`);

  if (confirmDelete) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  }
}






// function buyNow(productId) {
//   // Redirect with product ID (you can expand later with localStorage or query params)
//   window.location.href = `product-details.html?id=${productId}`;// }

// function buyNow(imageSrc){
//   // const imageSrc = document.getElementById("productImage").src;

  

//   localStorage.setItem("selectedProductImage", imageSrc);
//   localStorage.setItem("selectedProductdescription", imageSrc);

//   window.location.href = "product-details.html";  }

function viewProduct(productId) {
  // Save selected product ID to localStorage
  localStorage.setItem("selectedProduct", productId);
  // Redirect to product detail page
  window.location.href = "product-details.html";
}

function openCartModal() {
  document.getElementById("cartModal").style.display = "block";
  renderCart(); 
 ;// Load cart items
}
window.onclick = function(event) {
  const modal = document.getElementById("cartModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}