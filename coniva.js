
    function calcularIVA() {
      const precio = parseFloat(document.getElementById("precio").value);
      let porcentaje = parseFloat(document.getElementById("porcentaje").value);
      const res = document.getElementById("resultado");

      if (isNaN(precio)) {
        res.textContent = "⚠️ Ingresá un precio válido.";
        return;
      }

      if (isNaN(porcentaje)) porcentaje = 21;

      const montoIVA = (precio * porcentaje / 100).toFixed(2);
      const totalConIVA = (precio + parseFloat(montoIVA)).toFixed(2);

      res.innerHTML = `
        💡 IVA (${porcentaje}%): $${montoIVA}<br/>
        ✅ Total con IVA incluido: <strong>$${totalConIVA}</strong>
      `;
    }
  