import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { crearSolicitud } from '../../models/crearSolicitud';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {




  // constructor(private toastrSve: ToastrService) { }



  solicitudes: crearSolicitud[] = [
    {

     servicio: "baldosa",
     cantidad: 0,
     descripcion: "baldosa blanca"
    
    },
    {

      servicio: "puerta",
      cantidad: 2,
      descripcion: "de madera :v"
    
    }
  ];


  
  solicitudesForm: FormGroup;
  solicitudesEditForm: FormGroup;

  pattern:any =  "^[a-zA-Z\s]{1,254}"


  constructor(private fb: FormBuilder,
    private toastrSve: ToastrService) {



      this.solicitudesForm = this.fb.group({
        servicio: ['', [Validators.required, Validators.pattern(this.pattern)]],
        cantidad: ['', Validators.required],
        descripcion: ['', [Validators.required, Validators.pattern(this.pattern)]]
      })

      this.solicitudesEditForm = this.fb.group({
        servicio: ['', [Validators.required, Validators.pattern(this.pattern)]],
        cantidad: ['', Validators.required],
        descripcion: ['', [Validators.required, Validators.pattern(this.pattern)]]
      })


    }


  selectedSolicitudes: crearSolicitud = new crearSolicitud();

  agregarSolicitud(){
  
    this.solicitudes.push(this.selectedSolicitudes);

    this.toastrSve.success('Agregada correctamente');

    this.selectedSolicitudes = new crearSolicitud()

  }
  
  


  

  editSolicitud:any = {};

  cargarSolicitud(materiales: crearSolicitud){
    
      this.editSolicitud = materiales

  }



  modificarSolicitud(){

    this.toastrSve.info('Editado correctamente')

      this.editSolicitud = new crearSolicitud();


  }


  eliminarSolicitud(solicitud: crearSolicitud){

    if (confirm("¿Está seguro de eliminar la solicitud?")){

      this.solicitudes = this.solicitudes.filter(x => x != solicitud)
     
          solicitud = new crearSolicitud()
    
          this.toastrSve.error('Eliminado correctamente')

    }


  }

}
