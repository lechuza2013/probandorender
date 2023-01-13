function mostrarResultados(results) {
    console.log(results);
    const contenedor = document.querySelector(".results");
    const template = document.querySelector(".template-item-results");
  
    for (const r of results) {
      // cantidad de articulos (resultados)
      const resultsEl = document.querySelector(".span-resultados");
      resultsEl.textContent = results.length;
      // titulo del producto
      const titleEl = template.content.querySelector(".nombre-producto");
      titleEl.textContent = r.title.substring(0, 50) + "...";
      // estado del producto
      const conditionEl = template.content.querySelector(".antiguedad");
      conditionEl.textContent = r.condition;
      if (conditionEl.textContent == "new") {
        conditionEl.textContent = "Nuevo";
      } else if (conditionEl.textContent == "used") {
        conditionEl.textContent = "Usado";
      } else {
        conditionEl.textContent = "No especificado";
      }
      // imagen del producto
      const imagenEl = template.content.querySelector(".imagen");
      imagenEl.src = r.thumbnail;
      // precio del producto
      const precioEl = template.content.querySelector(".span-recio");
      precioEl.textContent = r.price;
      // cantidad de vendidos
      const vendidosEl = template.content.querySelector(".span-vendidos");
      vendidosEl.textContent = r["sold_quantity"];
  
      const linkEl = template.content.querySelector(".link-articulo");
      linkEl.href = r.permalink;
  
      const clone = document.importNode(template.content, true);
      contenedor.appendChild(clone);
    }
  }
  function refrescar() {
    const contenedor = document.querySelector(".results");
    while (contenedor.lastElementChild) {
      contenedor.removeChild(contenedor.lastElementChild);
    }
  }
  function main() {
    const formEl = document.querySelector(".form-buscador");
  
    formEl.addEventListener("submit", function (evento) {
      evento.preventDefault();
      const datosIngresados = evento.target.products.value;
      console.log(datosIngresados);
  
      fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + datosIngresados)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          refrescar();
          mostrarResultados(data.results);
        });
    });
    const publicidadContainer  =document.querySelector(".contenedor-publicidad")
  }
  main();
  