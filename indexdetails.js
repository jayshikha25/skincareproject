// function loadProduct(){
//     const imageSrc = localStorage.getItem("selectedProductImage");
//     const imageDesc = localStorage.getItem("selectedImageDesc");

//     if(imageSrc){
//         document.getElementById("displayProductImage").src = imageSrc

//     }
//     if()
    
// };

const productData = {
    moisturiser:{
      
      description:` <div class="details">
      <h1 >Face Moisturiser 1000 ML</h1>
      <br>
    <ul>
     <li>Deeply hydrates skin with a science-backed blend of niacinamide (Vitamin B3), panthenol (Vitamin B5), and hyaluronic acid</li><br>
      <li>Clinically proven to restore skin’s moisture barrier within 1 week</li><br>
      <li>Non-greasy, fast-absorbing formula suitable for all skin types</li><br>
      <li>Tested and approved by dermatologists for daily use</li><br>
      <li>Helps reduce flakiness, tightness, and dullness associated with dry skin</li>
      <br><br>

    <div class="price2"> MRP  &nbsp; &nbsp;₹570 <span style="text-decoration: line-through; color: gray;">₹650</span> (10% OFF)</div>
   

    <div class="buy-section">
      <button class="add-to-cart">Add To Cart</button>
      <button class="buy-now">Buy Now</button>
    </div>

    <div class="disclaimer">
      <strong>Disclaimer:</strong> This item is non-returnable due to hygiene and personal care nature. In case of damaged or incorrect item, full refund or replacement will be provided.
    </div></div>` ,
     
      image: "Untitled design.png"
    },
    faceserum: {
      
      description:`
      <div class="details">
    <h1> Gentle Face-Serum 800 ML</h1>
    <br>
    <ul>
      <li>Science-backed blend of niacinamide (vitamin B3), panthenol (B5), and glycerin</li><br>
      <li>Clinically proven to hydrate and protect against dryness</li>
      <br>
      <li>Dermatologist-tested for sensitive skin</li>
      <br>
      <li>94% users felt it gently cleansed their skin</li><br>
      <li>Defends against 5 signs of skin sensitivity</li>
    </ul><br><br>
    <div class="price2"> MRP  &nbsp; &nbsp;₹600 <span style="text-decoration: line-through; color: gray;">800</span> (10% OFF)</div>
    <br>

    <div class="buy-section">
      <button class="add-to-cart">Add To Cart</button>
      <button class="buy-now">Buy Now</button>
    </div>

    <div class="disclaimer">
      <strong>Disclaimer:</strong> This item is non-returnable due to hygiene and personal care nature. In case of damaged or incorrect item, full refund or replacement will be provided.
    </div>
  </div>
  </div>  -->`,
     
      image: "Untitled design (7).png"
    },
    toner:{
      
        description:`<div class="details">
    <h1> Toner 500 ML</h1>
    <br>
    <ul>
      <li>Science-backed blend of niacinamide (vitamin B3), panthenol (B5), and glycerin</li><br>
      <li>Clinically proven to hydrate and protect against dryness</li>
      <br>
      <li>Dermatologist-tested for sensitive skin</li>
      <br>
      <li>94% users felt it gently cleansed their skin</li><br>
      <li>Defends against 5 signs of skin sensitivity</li>
    </ul><br>
    <br>
    <div class="price2"> MRP  &nbsp; &nbsp;₹400 <span style="text-decoration: line-through; color: gray;">500</span> (10% OFF)</div>
    <br>

    <div class="buy-section">
      <button class="add-to-cart">Add To Cart</button>
      <button class="buy-now">Buy Now</button>
    </div>

    <div class="disclaimer">
      <strong>Disclaimer:</strong> This item is non-returnable due to hygiene and personal care nature. In case of damaged or incorrect item, full refund or replacement will be provided.
    </div>
  </div>
  </div> `,
     
      image: "WhatsApp Image 2025-03-02 at 21.03.53_dcdb35c8.jpg",
      

    },
    gentleexfoliator:{
        description:`<div class="details">
    <h1> Gentle Exfoliator 500 ML</h1>
    <br>
    <ul>
      <li>Science-backed blend of niacinamide (vitamin B3), panthenol (B5), and glycerin</li><br>
      <li>Clinically proven to hydrate and protect against dryness</li>
      <br>
      <li>Dermatologist-tested for sensitive skin</li>
      <br>
      <li>94% users felt it gently cleansed their skin</li><br>
      <li>Defends against 5 signs of skin sensitivity</li>
    </ul><br>
    <div class="price2"> MRP  &nbsp; &nbsp;₹600 <span style="text-decoration: line-through; color: gray;">900</span> (10% OFF)</div>
    <br><br>

    <div class="buy-section">
      <button class="add-to-cart">Add To Cart</button>
      <button class="buy-now">Buy Now</button>
    </div>

    <div class="disclaimer">
      <strong>Disclaimer:</strong> This item is non-returnable due to hygiene and personal care nature. In case of damaged or incorrect item, full refund or replacement will be provided.
    </div>
  </div>
  </div>  `,
     
      image: "Untitled design (1).png"

    },
    bodywash:{
        description:`<div class="details">
    <h1> Body Wash 700 ML</h1>
    <br>
    <ul>
      <li>Science-backed blend of niacinamide (vitamin B3), panthenol (B5), and glycerin</li><br>
      <li>Clinically proven to hydrate and protect against dryness</li>
      <br>
      <li>Dermatologist-tested for sensitive skin</li>
      <br>
      <li>94% users felt it gently cleansed their skin</li><br>
      <li>Defends against 5 signs of skin sensitivity</li>
    </ul><br>
    <br><br>
    <div class="price2"> MRP  &nbsp; &nbsp;₹800 <span style="text-decoration: line-through; color: gray;">900</span> (10% OFF)</div>
    <br>

    <div class="buy-section">
      <button class="add-to-cart">Add To Cart</button>
      <button class="buy-now">Buy Now</button>
    </div>

    <div class="disclaimer">
      <strong>Disclaimer:</strong> This item is non-returnable due to hygiene and personal care nature. In case of damaged or incorrect item, full refund or replacement will be provided.
    </div>
  </div>
  </div> </div> `,
     
      image: "WhatsApp Image 2025-03-02 at 20.36.08_55d7d1c2.jpg"

    },
    
    // Add more products similarly...
  };

  const productId = localStorage.getItem("selectedProduct");

  if (productId && productData[productId]) {
    const product = productData[productId];
 
    document.getElementById("product-description").innerHTML = product.description;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-image").src = product.image;
  } else {
    document.getElementById("product-container").innerHTML = "<p>Product not found.</p>";
  }