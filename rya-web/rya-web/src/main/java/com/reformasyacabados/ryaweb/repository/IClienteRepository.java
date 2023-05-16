package com.reformasyacabados.ryaweb.repository;

import com.reformasyacabados.ryaweb.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClienteRepository  extends JpaRepository<Cliente, Integer> {


}
