<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Calculadora PHP</title>
</head>
<body>

  <h2>Calculadora</h2>

  <form method="POST" action="">
    <input type="number" name="numero1" placeholder="Primer número">
    
    <select name="operacion">
      <option value="+">Suma</option>
      <option value="-">Resta</option>
      <option value="*">Multiplicación</option>
      <option value="/">División</option>
    </select>
    
    <input type="number" name="numero2" placeholder="Segundo número">

    <button type="submit">Calcular</button>
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $n1 = isset($_POST['numero1']) ? floatval($_POST['numero1']) : 0;
    $n2 = isset($_POST['numero2']) ? floatval($_POST['numero2']) : 0;
    $op = $_POST['operacion'] ?? '+';
    $resultado = 0;

    switch ($op) {
      case '+':
        $resultado = $n1 + $n2;
        break;
      case '-':
        $resultado = $n1 - $n2;
        break;
      case '*':
        $resultado = $n1 * $n2;
        break;
      case '/':
        $resultado = ($n2 != 0) ? $n1 / $n2 : "Error: división por cero";
        break;
    }

    echo "<p>Resultado: <strong>$resultado</strong></p>";
  }
  ?>

</body>
</html>
