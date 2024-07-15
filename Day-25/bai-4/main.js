var products = [
  [
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "Tiêu đề bài viết 1",
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex earum suscipit cumque a dolor? Ducimus amet cumque excepturi magni. Doloribus officiis accusantium dignissimos aliquid! Consequuntur.",
  ],
  [
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "Tiêu đề bài viết 2",
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex earum suscipit cumque a dolor? Ducimus amet cumque excepturi magni. Doloribus officiis accusantium dignissimos aliquid! Consequuntur.",
  ],
  [
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "Tiêu đề bài viết 3",
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex earum suscipit cumque a dolor? Ducimus amet cumque excepturi magni. Doloribus officiis accusantium dignissimos aliquid! Consequuntur.",
  ],
];

var result = products.map(function (product, index) {
  return `  <div class="product">
        <div class="product__img">
          <img
            src="${product[0]}"
            alt=""
          />
        </div>
        <div class="product__right">
          <h2 class="product__heading">${product[1]}</h2>
          <p class="product__desc">
            ${product[2]}
          </p>
        </div>
      </div>`;
});
document.write(result.join(" "));
console.log(result);
