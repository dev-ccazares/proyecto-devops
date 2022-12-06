package com.grupo02.service;

import com.grupo02.dto.FacturaProjection;
import com.grupo02.dto.jpa.FacturaJpa;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacturaJpaRepository extends CrudRepository<FacturaJpa, Long> {

  @Query(value = "SELECT emisor, id, descripcion, valor, fecha, actualizado FROM facturacion.factura", nativeQuery = true)
  List<FacturaProjection> getAllFacturaProjection();
}
