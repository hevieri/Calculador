 function calcular() {
      const precioUnitario = parseFloat(document.getElementById("precioUnitario").value);
      const cantidad = parseFloat(document.getElementById("cantidad").value);
      const res = document.getElementById("resultado");

      if (isNaN(precioUnitario) || isNaN(cantidad)) {
        res.textContent = "⚠️ Ingresá números válidos en los dos campos.";
        return;
      }

      const total = (precioUnitario * cantidad).toFixed(2);
      res.textContent = `✅ ${cantidad} unidad(es) costarán $${total}`;
    }