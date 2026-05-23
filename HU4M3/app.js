
const productForm = document.querySelector("#productForm");
const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const btnAgregar = document.querySelector("#btnAgregar");

let productos = JSON.parse(localStorage.getItem("productos")) || [];