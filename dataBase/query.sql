-- =====================================================
-- SCRIPT: queries.sql
-- DESCRIPCIÓN: Consultas solicitadas (fechas fijas)
-- =====================================================

-- Query 1: Clientes que visitaron "Sucursal Norte" en el último mes (usando fecha fija de referencia)
SELECT CONCAT(c.nombre, ' ', c.apellidos) AS nombre_completo
FROM Cliente c
JOIN Visitas v ON c.id = v.idCliente
JOIN Sucursal s ON v.idSucursal = s.id
WHERE s.nombre = 'Sucursal Norte'
  AND v.fechaVisita BETWEEN '2026-03-15' AND '2026-04-15';

-- Query 2: Cantidad de clientes distintos por sucursal
SELECT s.nombre AS sucursal,
       COUNT(DISTINCT v.idCliente) AS clientes_distintos
FROM Sucursal s
LEFT JOIN Visitas v ON s.id = v.idSucursal
GROUP BY s.id, s.nombre
ORDER BY clientes_distintos DESC;

-- Query 3: Productos disponibles en Medellín pero no en Bogotá
SELECT DISTINCT p.id, p.nombre
FROM Producto p
JOIN Disponibilidad d_med ON p.id = d_med.idProducto
JOIN Sucursal s_med ON d_med.idSucursal = s_med.id
WHERE s_med.ciudad = 'Medellín'
  AND p.id NOT IN (
      SELECT d_bog.idProducto
      FROM Disponibilidad d_bog
      JOIN Sucursal s_bog ON d_bog.idSucursal = s_bog.id
      WHERE s_bog.ciudad = 'Bogotá'
  );

-- Query 4: Clientes inscritos en más de 2 productos
SELECT c.nombre, c.apellidos, COUNT(i.idProducto) AS cantidad_productos
FROM Cliente c
JOIN Inscripcion i ON c.id = i.idCliente
GROUP BY c.id, c.nombre, c.apellidos
HAVING COUNT(i.idProducto) > 2
ORDER BY cantidad_productos DESC;

-- Query 5: Última visita de cada cliente (fecha y sucursal)
SELECT c.id,
       c.nombre,
       c.apellidos,
       COALESCE(MAX(v.fechaVisita), 'Sin visitas') AS ultima_visita_fecha,
       COALESCE(
           (SELECT s.nombre
            FROM Visitas v2
            JOIN Sucursal s ON v2.idSucursal = s.id
            WHERE v2.idCliente = c.id
            ORDER BY v2.fechaVisita DESC
            LIMIT 1),
           'Sin visitas'
       ) AS sucursal_ultima_visita
FROM Cliente c
LEFT JOIN Visitas v ON c.id = v.idCliente
GROUP BY c.id, c.nombre, c.apellidos
ORDER BY c.id;