  function actualizarIcono() {
      const tipo = document.getElementById("tipo").value;
      const icono = document.getElementById("icono");
      icono.textContent = tipo === "usdToArs" ? "💵" : "🪙";
    }

    function convertir() {
      const valor = parseFloat(document.getElementById("valor").value);
      const tipo = document.getElementById("tipo").value;
      let cambio = parseFloat(document.getElementById("cambio").value);
      const res = document.getElementById("resultado");

      if (isNaN(valor) || isNaN(cambio)) {
        res.textContent = "⚠️ Ingresá valores válidos.";
        return;
      }

      let resultado;

      if (tipo === "usdToArs") {
        resultado = (valor * cambio).toFixed(2);
        res.innerHTML = `${valor} USD → <strong>$${resultado} ARS</strong> 💵`;
      } else {
        resultado = (valor / cambio).toFixed(2);
        res.innerHTML = `$${valor} ARS → <strong>${resultado} USD</strong> 🪙`;
      }
    }

    actualizarIcono();