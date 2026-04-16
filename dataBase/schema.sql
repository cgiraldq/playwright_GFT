-- =====================================================
-- 1. CREACIÓN DE TABLAS (ESQUEMA)
-- =====================================================
DROP TABLE IF EXISTS Visitas;
DROP TABLE IF EXISTS Disponibilidad;
DROP TABLE IF EXISTS Inscripcion;
DROP TABLE IF EXISTS Producto;
DROP TABLE IF EXISTS Sucursal;
DROP TABLE IF EXISTS Cliente;

CREATE TABLE Cliente (
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    ciudad VARCHAR(50) NOT NULL
);

CREATE TABLE Sucursal (
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    ciudad VARCHAR(50) NOT NULL
);

CREATE TABLE Producto (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipoProducto VARCHAR(50) NOT NULL
);

CREATE TABLE Inscripcion (
    idProducto INT,
    idCliente INT,
    PRIMARY KEY (idProducto, idCliente),
    FOREIGN KEY (idProducto) REFERENCES Producto(id),
    FOREIGN KEY (idCliente) REFERENCES Cliente(id)
);

CREATE TABLE Disponibilidad (
    idSucursal INT,
    idProducto INT,
    PRIMARY KEY (idSucursal, idProducto),
    FOREIGN KEY (idSucursal) REFERENCES Sucursal(id),
    FOREIGN KEY (idProducto) REFERENCES Producto(id)
);

CREATE TABLE Visitas (
    idSucursal INT,
    idCliente INT,
    fechaVisita DATE NOT NULL,
    PRIMARY KEY (idSucursal, idCliente, fechaVisita),  -- Asumimos que un cliente no visita la misma sucursal dos veces el mismo día
    FOREIGN KEY (idSucursal) REFERENCES Sucursal(id),
    FOREIGN KEY (idCliente) REFERENCES Cliente(id)
);