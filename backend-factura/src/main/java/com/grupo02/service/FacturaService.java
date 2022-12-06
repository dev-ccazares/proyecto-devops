package com.grupo02.service;

import com.grupo02.dto.FacturaDto;
import com.grupo02.dto.FacturaProjection;
import com.grupo02.dto.jpa.FacturaJpa;
import com.grupo02.dto.jpa.FacturaJpa.FacturaJpaBuilder;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import javax.transaction.Transactional;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Log4j2
public class FacturaService {

  FacturaJpaRepository repository;

  @Transactional
  public List<FacturaDto> getAllPerson() {
    List<FacturaProjection> projections = repository.getAllFacturaProjection();
    List<FacturaDto> response = new ArrayList<>();
    projections.forEach(proj -> {
      response.add(FacturaDto.builder().emisor(proj.getEmisor()).id(proj.getId())
          .descripcion(proj.getDescripcion()).valor(proj.getValor()).fecha(proj.getFecha())
          .actualizado(proj.getActualizado()).build());
    });

    return response;
  }

  @Transactional
  public FacturaDto savePerson(FacturaDto personDto) {
    FacturaJpaBuilder builder = FacturaJpa.builder();
    builder.emisor(personDto.getEmisor());
    builder.descripcion(personDto.getDescripcion());
    builder.valor(personDto.getValor());

    if (!Objects.isNull(personDto.getId())) {
      builder.id(personDto.getId());
    }
    FacturaJpa save = repository.save(builder.build());

    personDto.setFecha(String.valueOf(new Date()));
    personDto.setId(save.getId());

    return personDto;
  }

  public void deletePerson(long id) {
    repository.deleteById(id);
  }
}
