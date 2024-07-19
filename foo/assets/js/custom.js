document.addEventListener("DOMContentLoaded", function () {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const navbarDropdownCategories = document.getElementById("navbarDropdownCategories");
    const logo =document.getElementById("name")

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakestoreapi.com/products", true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const products = JSON.parse(xhr.responseText);

        const renderDropdownCategories = (products) => {
          const uniqueCategories = [...new Set(products.map((product) => product.category))];
          uniqueCategories.forEach((category) => {
            const dropdownItem = document.createElement("li");
            dropdownItem.innerHTML = `<a class="dropdown-item text-cap" href="shop.html?category=${encodeURIComponent(
              category
            )}">${category}</a>`;
            dropdownMenu.appendChild(dropdownItem);
          });
        };

        renderDropdownCategories(products); // Render dropdown categories
       
        logo.innerText="Foo"; 

      } else {
        console.error("Error fetching data:", xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error("Request error");
    };
    xhr.send();

    // Add event listener to the Categories link to navigate to shop.html
    navbarDropdownCategories.addEventListener("click", function () {
      window.location.href = "shop.html";
    });
  });