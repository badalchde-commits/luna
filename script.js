// --------------------------------
// CART
// --------------------------------

let cartCount = 0;

const cartDisplay = document.getElementById("cartCount");

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartDisplay.textContent = cartCount;

        button.textContent = "Added ✓";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});


// --------------------------------
// CATEGORY FILTER
// --------------------------------

const filterButtons = document.querySelectorAll(".filter");

const products = document.querySelectorAll(".product");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Make clicked button active
        button.classList.add("active");


        // Get selected category
        const category = button.dataset.category;


        // Show / hide products
        products.forEach(function(product) {

            const productCategory = product.dataset.category;

            if (
                category === "all" ||
                category === productCategory
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});