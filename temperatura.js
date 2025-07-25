   function actualizarIcono() {
      const modo = document.getElementById('tipo').value;
      const icono = document.getElementById('icono');
      icono.textContent = modo === 'FtoC' ? '❄️' : '🔥';
    }

    function convertir() {
      const grado = parseFloat(document.getElementById('grado').value);
      const tipo = document.getElementById('tipo').value;
      const res = document.getElementById('resultado');

      if (isNaN(grado)) {
        res.textContent = '⚠️ Ingresá un número válido';
        return;
      }

      let convertido;

      if (tipo === 'FtoC') {
        convertido = ((grado - 32) * 5 / 9).toFixed(2);
        res.textContent = `${grado}°F → ${convertido}°C ❄️`;
      } else {
        convertido = ((grado * 9 / 5) + 32).toFixed(2);
        res.textContent = `${grado}°C → ${convertido}°F 🔥`;
      }
    }

    actualizarIcono(); // icono inicial