package com.reformasyacabados.ryaweb.controller;

import com.reformasyacabados.ryaweb.models.Cliente;
import com.reformasyacabados.ryaweb.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/clients")
@CrossOrigin("*")
public class ClientesController {

    @Autowired
    private ClienteService clienteService;


    @GetMapping("/getClients")
    public List<Cliente> getClientes() {
        return clienteService.listarClientes();
    }


    @GetMapping("/getClientPorId/{id_cliente}")
    public ResponseEntity<Cliente> clienteById(@PathVariable Integer id_cliente) {
        try {
            Cliente cliente = clienteService.obtenerClienteId(id_cliente);
            return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/postClient")
    public void saveCliente(@RequestBody Cliente cliente) {
        clienteService.guardarCliente(cliente);
    }

    @PutMapping("/putClient/{id_cliente}")
    public ResponseEntity<?> updateCliente(@RequestBody Cliente cliente, @PathVariable Integer id_cliente) {
        try {
            Cliente clienteExiste = clienteService.obtenerClienteId(id_cliente);
            clienteExiste.setNombre_cliente(cliente.getNombre_cliente());
            clienteExiste.setDocumento(cliente.getDocumento());
            clienteExiste.setTelefono(cliente.getTelefono());
            clienteExiste.setDireccion(cliente.getDireccion());
            clienteExiste.setEstado(cliente.getEstado());
            clienteService.guardarCliente(clienteExiste);
            return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteClient/{id_cliente}")
    public void deleteCliente(@PathVariable int id_cliente){
        clienteService.eliminarCliente(id_cliente);
    }


}
