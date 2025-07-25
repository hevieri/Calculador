 function actualizarIcono() {
      const tipo = document.getElementById("tipo").value;
      const icono = document.getElementById("icono");
      icono.textContent = tipo === "kmToMi" ? "🚗" : "🛣️";
    }

    function convertir() {
      const valor = parseFloat(document.getElementById("valor").value);
      const tipo = document.getElementById("tipo").value;
      const res = document.getElementById("resultado");

      if (isNaN(valor)) {
        res.textContent = "⚠️ Ingresá un número válido";
        return;
      }

      let resultado;

      if (tipo === "kmToMi") {
        resultado = (valor * 0.621371).toFixed(2);
        res.textContent = `${valor} km → ${resultado} mi 🚗`;
      } else {
        resultado = (valor / 0.621371).toFixed(2);
        res.textContent = `${valor} mi → ${resultado} km 🛣️`;
      }
    }

    actualizarIcono();