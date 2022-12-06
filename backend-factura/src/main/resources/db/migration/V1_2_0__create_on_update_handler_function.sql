CREATE OR REPLACE FUNCTION update_updated_on_column()
    RETURNS TRIGGER AS
$$
BEGIN
    NEW.actualizado = now();
    RETURN NEW;
END;

$$
    language 'plpgsql';
