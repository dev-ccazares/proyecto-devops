package com.grupo02.dto;

public interface FacturaProjection {

  String getEmisor();

  Long getId();

  String getDescripcion();

  Double getValor();

  String getFecha();

  String getActualizado();
}
