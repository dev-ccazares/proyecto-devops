CREATE TRIGGER loan_updated_on_trigger
    BEFORE UPDATE
    ON facturacion.factura
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_on_column();
