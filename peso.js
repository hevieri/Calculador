  function actualizarIcono() {
      const tipo = document.getElementById("tipo").value;
      const icono = document.getElementById("icono");
      icono.textContent = tipo === "kgToLb" ? "🏋️" : "📦";
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

      if (tipo === "kgToLb") {
        resultado = (valor * 2.20462).toFixed(2);
        res.textContent = `${valor} kg → ${resultado} lb 🏋️`;
      } else {
        resultado = (valor / 2.20462).toFixed(2);
        res.textContent = `${valor} lb → ${resultado} kg 📦`;
      }
    }

    actualizarIcono();