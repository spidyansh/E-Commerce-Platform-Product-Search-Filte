function searchIitem() {
  let seacrhbox = document.getElementById("searchbox");
  let productlist = document.getElementById("product-list");
  let product = document.getElementsByClassName("product");
  let productinfo = document.getElementsByTagName("h3");

  for (i = 0; i < product.length; i++) {
    if (seacrhbox.value === product[i].productinfo[0].innerHTML) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
  }
}
