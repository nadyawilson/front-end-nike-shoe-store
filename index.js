document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".slider-wrapper");
  const menuItems = document.querySelectorAll(".menu-bottom");
  const currentProductImg = document.querySelector(".product-img");
  const currentProductTitle = document.querySelector(".product-title");
  const currentProductPrice = document.querySelector(".product-price");
  const currentProductColors = document.querySelector(".colors");
  const currentProductSizes = document.querySelectorAll(".sizes");
  const currentProductSize = document.querySelectorAll(".size");
  const payment = document.querySelector(".payment");
  const productButton = document.querySelector(".n-btn");
  const close = document.querySelector(".close");

  const products = [
      {
          id: 1,
          title: "Air Force",
          price: 130,
          colors: [
              {
                  code: "black",
                  img: "air.png",
              },
              {
                  code: "darkblue",
                  img: "air2.png",
              },
          ],
      },
      {
          id: 2,
          title: "Air Jordan",
          price: 112,
          colors: [
              {
                  code: "lightgray",
                  img: "jordan.png",
              },
              {
                  code: "green",
                  img: "jordan2.png",
              },
          ],
      },
      {
          id: 3,
          title: "Blazer",
          price: 110,
          colors: [
              {
                  code: "lightgray",
                  img: "blazer.png",
              },
              {
                  code: "green",
                  img: "blazer2.png",
              },
          ],
      },
      {
          id: 4,
          title: "Crater",
          price: 89,
          colors: [
              {
                  code: "black",
                  img: "crater.png",
              },
              {
                  code: "lightgray",
                  img: "crater2.png",
              },
          ],
      },
      {
          id: 5,
          title: "Hippie",
          price: 67,
          colors: [
              {
                  code: "gray",
                  img: "hippie.png",
              },
              {
                  code: "black",
                  img: "hippie2.png",
              },
          ],
      },
  ];

  let chosenProductIndex = 0;
  let chosenColorIndex = 0;

  function updateProductInfo() {
      const chosenProduct = products[chosenProductIndex];
      const chosenColor = chosenProduct.colors[chosenColorIndex];
      currentProductTitle.textContent = chosenProduct.title;
      currentProductPrice.textContent = `$${chosenProduct.price}`;
      currentProductImg.src = chosenColor.img;

      
      currentProductColors.innerHTML = chosenProduct.colors.map(color => `<div class="color" style="background-color: ${color.code};"></div>`).join('');
  }

  menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
          wrapper.style.transform = `translateX(${-100 * index}vw)`;
          chosenProductIndex = index;
          chosenColorIndex = 0; 
          updateProductInfo();
      });
  });

  currentProductColors.addEventListener("click", (event) => {
      const colorElement = event.target.closest(".color");
      if (colorElement) {
          chosenColorIndex = Array.from(colorElement.parentElement.children).indexOf(colorElement);
          updateProductInfo();
      }
  });

  
  productButton.addEventListener("click", () => {
      payment.style.display = "flex";
  });

  close.addEventListener("click", () => {
      payment.style.display = "none";
  });
 
  currentProductSize.forEach((size) => {
    size.addEventListener("click", () => {
        // Reset background color and text color of all sizes
        currentProductSize.forEach((size) => {
            size.style.backgroundColor = "white"; // Reset background color
            size.style.color = "black"; // Reset text color
        });

        // Change background color and text color of clicked size
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});
  updateProductInfo();
});