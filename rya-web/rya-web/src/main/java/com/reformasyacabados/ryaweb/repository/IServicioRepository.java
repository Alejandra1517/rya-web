package com.reformasyacabados.ryaweb.repository;

import com.reformasyacabados.ryaweb.models.Cliente;
import com.reformasyacabados.ryaweb.models.Servicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IServicioRepository extends JpaRepository<Servicio, Integer> {


}
