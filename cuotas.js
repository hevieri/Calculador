 function calcularCuotas() {
      const precio = parseFloat(document.getElementById("precio").value);
      const cuotas = parseInt(document.getElementById("cuotas").value);
      let interes = parseFloat(document.getElementById("interes").value);
      const res = document.getElementById("resultado");

      if (isNaN(precio) || isNaN(cuotas)) {
        res.textContent = "⚠️ Ingresá valores válidos.";
        return;
      }

      if (isNaN(interes)) interes = 0;

      const montoInteres = precio * (interes / 100);
      const total = precio + montoInteres;
      const cuotaMensual = (total / cuotas).toFixed(2);

      res.innerHTML = `
        💡 Interés aplicado: $${montoInteres.toFixed(2)}<br/>
        ✅ Total a pagar: $${total.toFixed(2)}<br/>
        📆 Cada cuota será de: <strong>$${cuotaMensual}</strong>
      `;
    }