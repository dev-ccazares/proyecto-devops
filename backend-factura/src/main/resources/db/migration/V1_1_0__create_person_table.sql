CREATE TABLE facturacion.factura
(
    id          SERIAL2 PRIMARY KEY,
    emisor      VARCHAR(60),
    valor       DOUBLE PRECISION,
    descripcion VARCHAR(600),
    fecha       TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    actualizado  TIMESTAMP WITH TIME ZONE
);
