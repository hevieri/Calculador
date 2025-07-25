    function calcular() {
      const precio = parseFloat(document.getElementById("precio").value);
      const descuento = parseFloat(document.getElementById("descuento").value);

      if (isNaN(precio) || isNaN(descuento)) {
        document.getElementById("result").innerHTML = "⚠️ Ingresá valores válidos.";
        return;
      }

      const rebaja = (precio * descuento) / 100;
      const final = precio - rebaja;

      document.getElementById("result").innerHTML = `
        📉 Lo que te ahorrás es: <span class="saving">$${rebaja.toFixed(2)}</span><br/>
        💰 Valor final del producto: <span class="price">$${final.toFixed(2)}</span>
      `;
    }