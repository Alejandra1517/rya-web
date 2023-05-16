import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clientes } from '../../models/clientes'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteServiceService } from '../services/clientes/cliente-service.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientesForm!: FormGroup;
  
  modificarClienteForm!: FormGroup;

  clientes: Clientes[] = [];
  
  clienteActual!: Clientes;
  
  clienteSeleccionado!: Clientes;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteServiceService,
    private toastrSve: ToastrService
  ) {}

  ngOnInit(): void {
    this.getClientes();
    this.clientesForm = this.formBuilder.group({
      nombre_cliente: '',
      documento: '',
      telefono: '',
      direccion: '',
      estado: 1
    });

    this.modificarClienteForm = this.formBuilder.group({
      nombre_cliente: '',
      documento: '',
      telefono: '',
      direccion: '',
      estado: 'Activo'
    });
  }




  save(): void {
    const formData = this.clientesForm.value;
    this.clienteService.saveCliente(formData).subscribe(
      (response) => {
        console.log('Cliente registrado exitosamente:', response);
        this.getClientes();
      },
      (error) => {
        console.log('Error al registrar el cliente:', error);
      }
    );



    this.toastrSve.success('Registrado correctamente');

  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(
      (response: Clientes[]) => {
        this.clientes = response;
      },
      (error) => {
        console.log('Error al obtener los clientes:', error);
       
      }
      
    );



  }

  
  openModificarClienteModal(cliente: Clientes): void {
    this.clienteSeleccionado = cliente;
    this.clientesForm.patchValue({
      nombre_cliente: cliente.nombre_cliente,
      documento: cliente.documento,
      telefono: cliente.telefono,
      direccion: cliente.direccion,
      estado: cliente.estado.toString()
    });
  }

  
  updateCliente(): void {
  
    const idCliente = this.clienteSeleccionado.id_cliente;
    const formData = {
      ...this.clientesForm.value
    };
  
    this.clienteService.updateCliente(idCliente, formData).subscribe(
      (response) => {
        console.log('Cliente actualizado exitosamente:', response);
        this.getClientes();
      },
      (error) => {
        console.log('Error al actualizar el cliente:', error);
      }
    );
    this.toastrSve.info('Editado correctamente')

  }
  


  
  deleteCliente(id_cliente: number): void {

    if (confirm("¿Está seguro de eliminar el cliente?")){

      this.clienteService.deleteCliente(id_cliente).subscribe(
        (response) => {
          console.log('Cliente eliminado exitosamente:', response);
          this.getClientes();
        },
        (error) => {
          console.log('Error al eliminar el cliente:', error);
        }
      );


    
          this.toastrSve.error('Eliminado correctamente')

    }


  
  }



}
