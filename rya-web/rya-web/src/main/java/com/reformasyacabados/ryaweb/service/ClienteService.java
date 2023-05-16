package com.reformasyacabados.ryaweb.service;

import com.reformasyacabados.ryaweb.models.Cliente;
import com.reformasyacabados.ryaweb.repository.IClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {


    @Autowired
    private IClienteRepository iClienteRepository;

    public List<Cliente> listarClientes(){
        return iClienteRepository.findAll();
    }


    public Cliente obtenerClienteId(Integer id_cliente){
        return iClienteRepository.findById(id_cliente).get();
    }


    public void guardarCliente(Cliente cliente){
        iClienteRepository.save(cliente);
    }


    public void eliminarCliente(Integer id_cliente){
        iClienteRepository.deleteById(id_cliente);
    }





}
