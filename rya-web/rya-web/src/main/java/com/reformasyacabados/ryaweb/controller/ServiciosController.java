package com.reformasyacabados.ryaweb.controller;

import com.reformasyacabados.ryaweb.models.Cliente;
import com.reformasyacabados.ryaweb.models.Servicio;
import com.reformasyacabados.ryaweb.service.ClienteService;
import com.reformasyacabados.ryaweb.service.ServicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
@CrossOrigin("*")
public class ServiciosController {

    @Autowired
    private ServicioService servicioService;


    @GetMapping("/getServices")
    public List<Servicio> getServices() {
        return servicioService.listarServicios();
    }


    @GetMapping("/getServicioPorId/{id_servicio}")
    public ResponseEntity<Servicio> getServicioPorId(@PathVariable Integer id_servicio) {
        try {
            Servicio servicio = servicioService.obtenerServicioId(id_servicio);
            return new ResponseEntity<Servicio>(servicio, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<Servicio>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/postService")
    public void postService(@RequestBody Servicio servicio) {
        servicioService.guardarServicio(servicio);
    }

    @PutMapping("/putService/{id_service}")
    public ResponseEntity<?> putService(@RequestBody Servicio service, @PathVariable Integer id_service) {
        try {
            Servicio servicioExiste = servicioService.obtenerServicioId(id_service);
            servicioExiste.setNombre_servicio(service.getNombre_servicio());
            servicioExiste.setCategoria(service.getCategoria());
            servicioExiste.setValor_unitario(service.getValor_unitario());
            servicioExiste.setEstado(service.getEstado());

            servicioService.guardarServicio(servicioExiste);

            return new ResponseEntity<Servicio>(service, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<Servicio>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteServicio/{id_service}")
    public void deleteServicio(@PathVariable int id_service){
        servicioService.eliminarServicio(id_service);
    }


}
