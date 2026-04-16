-- =====================================================
-- SCRIPT: data.sql
-- DESCRIPCIÓN: Inserción de datos de prueba (mínimo 10 por tabla)
-- =====================================================

-- Clientes (10 registros)
INSERT INTO Cliente VALUES
(1, 'Ana', 'García', 'Medellín'),
(2, 'Luis', 'Pérez', 'Bogotá'),
(3, 'Carla', 'Rodríguez', 'Cali'),
(4, 'Juan', 'López', 'Medellín'),
(5, 'Marta', 'Díaz', 'Bogotá'),
(6, 'Carlos', 'Sánchez', 'Medellín'),
(7, 'Laura', 'Ramírez', 'Bogotá'),
(8, 'Pedro', 'Gómez', 'Cali'),
(9, 'Sofía', 'Martínez', 'Medellín'),
(10, 'Diego', 'Hernández', 'Bogotá');

-- Sucursales (3 sucursales, pero al menos 10? No es necesario, el enunciado pide 10 registros para cada tabla. Como solo hay 3 sucursales lógicas, puedes poner 10 sucursales repetidas? No, mejor creamos 10 sucursales ficticias para cumplir, pero para las queries usamos las 3 principales. Ajustamos:
-- Para cumplir "al menos 10 registros en cada tabla", agrego más sucursales (aunque no se usen en las queries). Así evitamos objeciones.
INSERT INTO Sucursal VALUES
(1, 'Sucursal Norte', 'Medellín'),
(2, 'Sucursal Sur', 'Bogotá'),
(3, 'Sucursal Centro', 'Medellín'),
(4, 'Sucursal Oriente', 'Cali'),
(5, 'Sucursal Occidente', 'Bogotá'),
(6, 'Sucursal Noroccidente', 'Medellín'),
(7, 'Sucursal Suroccidente', 'Cali'),
(8, 'Sucursal Aeropuerto', 'Bogotá'),
(9, 'Sucursal Estadio', 'Medellín'),
(10, 'Sucursal Parque', 'Cali');

-- Productos (10 registros)
INSERT INTO Producto VALUES
(1, 'Membresía Básica', 'Membresía'),
(2, 'Membresía Premium', 'Membresía'),
(3, 'Clase de Yoga', 'Clase'),
(4, 'Clase de Spinning', 'Clase'),
(5, 'Masaje Descontracturante', 'Servicio'),
(6, 'Sauna', 'Servicio'),
(7, 'Entrenador Personal', 'Servicio'),
(8, 'Clase de Pilates', 'Clase'),
(9, 'Membresía Anual', 'Membresía'),
(10, 'Acceso a Piscina', 'Servicio');

-- Inscripciones (más de 10, pero al menos 10 registros)
INSERT INTO Inscripcion VALUES
(1,1), (2,1), (3,1),
(1,2), (4,2),
(2,3), (5,3), (7,3), (9,3),
(1,4), (3,4), (8,4),
(2,5),
(1,6), (2,6), (3,6), (4,6), (5,6),
(6,7), (10,7),
(1,8), (2,8), (3,8),
(4,9), (5,9), (7,9), (8,9), (9,9), (10,9),
(1,10);

-- Disponibilidad (al menos 10 registros)
INSERT INTO Disponibilidad VALUES
(1,1), (1,2), (1,3), (1,5), (1,8),
(2,1), (2,2), (2,4), (2,6), (2,9),
(3,1), (3,3), (3,7), (3,8), (3,10),
(4,1), (5,2), (6,3), (7,4), (8,5), (9,6), (10,7); -- más para llegar a 10+

-- Visitas (al menos 10 registros)
-- Usamos fechas fijas (por ejemplo, marzo y abril 2026) para que la Query 1 con fecha fija funcione siempre.
INSERT INTO Visitas VALUES
(1,1,'2026-04-10'), (1,1,'2026-03-20'),
(2,2,'2026-04-01'),
(1,3,'2026-03-25'), (3,3,'2026-04-05'),
(2,4,'2026-04-12'), (1,4,'2026-03-18'),
(2,5,'2026-03-30'),
(1,6,'2026-04-14'), (3,6,'2026-04-02'), (2,6,'2026-03-22'),
(3,7,'2026-04-09'),
(1,8,'2026-03-28'), (2,8,'2026-04-11'),
(1,9,'2026-04-07'), (3,9,'2026-03-19'),
(2,10,'2026-04-13'),
(2,1,'2025-12-10'),
(3,2,'2025-11-05'),
(1,5,'2026-01-15'),
(2,7,'2026-02-20'),
(3,10,'2026-01-30');