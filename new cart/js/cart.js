 let products;
 function loaditem() {
        $.ajax({
            url: 'products.json',
            success: function (items) {
                products=items;
                for (let i = 0; i < items.length; i++) {
                    const location = items[i].location ? items[i].location : "egypt";
            //         $("#row1").append(`
                    
            //         <div class="col-md-4 mt-3">
            //             <div class="desti-card card-content">
            //                 <div class="card-banner img-holder">
            //                     <img src="${items[i].image}" class="img-des" >
            //                 </div>
            //                    <div class="card-text card-content h3 title"><a href="">${items[i].name}</a></div>
            //                    <div class="card-content">
            //                    <span class="card-text">${items[i].rating}</span></div>
                        
            //             <div class="card-contentcard-text card-content h3 title">
            //             <span class="card-text">${items[i].location}</span></div>
            //        <button onclick="addTocart(${items[i].id},this)" class="btn btn-praimary">Add To Cart</button>
            //             </div>
            //     </div>
            // `);
                 
            }
            console.log(items);
        },
    });
}

loaditem();

var arr =[]

// function addTocart(id, ele){
//     arr.push(id);
//     localStorage.setItem('userCart',JSON.stringify(arr));
//    let items=JSON.parse(localStorage.getItem('userCart'));

//    $('#cart').html(items.length) 
// $(ele).attr('disabled','disabled');
// // items=JSON.parse(localStorage.getItem('userCart'));

// }

// function getCartItem(){
//     let choose_product=[];
//     let items=JSON.parse(localStorage.getItem('userCart'))
// for(i=0;i<items.length;i++){
// choose_product.push(products.find((product)=> product.id ==items[i]));
// }
//     // console.log(choose_product);
//     addCartToDom(choose_product);
//     $('#cart').html(choose_product.length);
// }
// function addCartToDom(items){
//     let total=0;
//     for (let i = 0; i < items.length; i++) {
//         $("#row2").append(`
//             <div class="col-md-4 mt-3">
//                 <div class="desti-card card-content">
//                     <div class="card-banner img-holder">
//                         <img src="${items[i].image}" class="img-des" >
//                     </div>
//                        <div class="card-text card-content h3 title"><a href="">${items[i].name}</a></div>
//                        <div class="card-content">
//                        <span class="card-text">${items[i].rating}</span></div>
                
//                 <div class="card-contentcard-text card-content h3 title">
//                 <span class="card-text">${items[i].location}</span></div>
//             </div>
//         </div>
//     `);
// total+=items[i].id;
// } 
// $('#total').html(total);
// }

// function removeFromCart(productId) {
//     const cartIndex = cart.indexOf(productId);
//     if (cartIndex !== -1) {
//       cart.splice(cartIndex, 1);
//       localStorage.setItem('userCart', JSON.stringify(cart));
//       getCartItems(); // Update cart display and items
//     }
//   }
  
//   $(document).ready(function() {
//     // Add event listeners for cart buttons
//     $(document).on('click', '.add-to-cart', function() {
//       const productId = $(this).data('product-id');
//       addToCart(productId);
//     });
  
//     $(document).on('click', '.remove-from-cart', function() {
//       const productId = $(this).data('product-id');
//       removeFromCart(productId);
//     });
  
//     getCartItems(); // Get and display cart items on page load
//   });

        function myFunction() {
          var dots = document.getElementById("dots");
          var moreText = document.getElementById("more");
          var btnText = document.getElementById("myBtn");
        
          if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more"; 
            moreText.style.display = "none";
          } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less"; 
            moreText.style.display = "inline";
          }
        }
    