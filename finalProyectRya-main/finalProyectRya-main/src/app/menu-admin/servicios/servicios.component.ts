import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clientes } from '../../models/clientes'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteServiceService } from '../services/clientes/cliente-service.service';
import { Servicios } from '../../models/servicios';
import { ServicioServiceService } from '../services/servicios/servicio-service.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  serviciosForm!: FormGroup;
  
  modificarServicioForm!: FormGroup;

  servicios: Servicios[] = [];
  
  servicioActual!: Servicios;
  
  servicioSeleccionado!: Servicios;

  constructor(
    private formBuilder: FormBuilder,
    private serviciosService: ServicioServiceService,
    private toastrSve: ToastrService
  ) {}

  ngOnInit(): void {
    this.getServicios();
    this.serviciosForm = this.formBuilder.group({
      nombre_servicio: '',
      categoria: '',
      valor_unitario: '',
      estado: 1
    });

    this.modificarServicioForm = this.formBuilder.group({
      nombre_servicio: '',
      categoria: '',
      valor_unitario: '',
      estado: "Activo"
    });
  }




  save(): void {
    const formData = this.serviciosForm.value;
    this.serviciosService.saveServicio(formData).subscribe(
      (response) => {
        console.log('servicio registrado exitosamente:', response);
        this.getServicios();
      },
      (error) => {
        console.log('Error al registrar el servicio:', error);
      }
    );



    this.toastrSve.success('Registrado correctamente');

  }

  getServicios(): void {
    this.serviciosService.getServicio().subscribe(
      (response: Servicios[]) => {
        this.servicios = response;
      },
      (error) => {
        console.log('Error al obtener los servicios:', error);
       
      }
      
    );



  }

  
  openModificarServicioModal(servicio: Servicios): void {
    this.servicioSeleccionado = servicio;
    this.serviciosForm.patchValue({
      nombre_servicio: servicio.nombre_servicio,
      categoria: servicio.categoria,
      valor_unitario: servicio.valor_unitario,
      estado: servicio.estado.toString()
    });
  }

  
  updateServicio(): void {
  
    const id_servicio = this.servicioSeleccionado.id_servicio;
    const formData = {
      ...this.serviciosForm.value
    };
  
    this.serviciosService.updateServicio(id_servicio, formData).subscribe(
      (response) => {
        console.log('Servicio actualizado exitosamente:', response);
        this.getServicios();
      },
      (error) => {
        console.log('Error al actualizar el servicio:', error);
      }
    );
    this.toastrSve.info('Editado correctamente')

  }
  


  
  deleteServicio(id_servicio: number): void {

    if (confirm("¿Está seguro de eliminar el servicio?")){

      this.serviciosService.deleteServicio(id_servicio).subscribe(
        (response) => {
          console.log('Servicio eliminado exitosamente:', response);
          this.getServicios();
        },
        (error) => {
          console.log('Error al eliminar el servicio:', error);
        }
      );


    
          this.toastrSve.error('Eliminado correctamente')

    }


  
  }



}
