package com.reformasyacabados.ryaweb.service;

import com.reformasyacabados.ryaweb.models.Cliente;
import com.reformasyacabados.ryaweb.models.Servicio;
import com.reformasyacabados.ryaweb.repository.IClienteRepository;
import com.reformasyacabados.ryaweb.repository.IServicioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioService {


    @Autowired
    private IServicioRepository iServicioRepository;

    public List<Servicio> listarServicios(){
        return iServicioRepository.findAll();
    }


    public Servicio obtenerServicioId(Integer id_servicio){
        return iServicioRepository.findById(id_servicio).get();
    }


    public void guardarServicio(Servicio servicio){
        iServicioRepository.save(servicio);
    }


    public void eliminarServicio(Integer id_servicio){
        iServicioRepository.deleteById(id_servicio);
    }





}
