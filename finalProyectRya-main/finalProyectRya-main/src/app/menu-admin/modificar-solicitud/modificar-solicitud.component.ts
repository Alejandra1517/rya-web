import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { modificarSolicitud } from '../../models/modificarSolicitud';

@Component({
  selector: 'app-modificar-solicitud',
  templateUrl: './modificar-solicitud.component.html',
  styleUrls: ['./modificar-solicitud.component.css']
})
export class ModificarSolicitudComponent  {

  constructor(private toastrSve: ToastrService) { }



  solicitudesArray: modificarSolicitud[] = [
    {

     servicio: "revocar",
     cantidad: 1,
     fechaInicio: "06/12/2022",
     fechaVencimiento: "06/12/2022",
     costoManoDeObra: 500000,
     descripcion: "Fachada",
     total: 700000
    
    },
    {

      servicio: "pintar",
      cantidad: 1,
      fechaInicio: "06/12/2022",
      fechaVencimiento: "06/12/2022",
      costoManoDeObra: 500000,
      descripcion: "Esmalte sintético",
      total: 800000
     
    }
  ];




  selectedSolicitud: modificarSolicitud = new modificarSolicitud();

  editSolicitud:any = {};

  agregarSolicitud(){
  
    this.solicitudesArray.push(this.selectedSolicitud);

    this.selectedSolicitud = new modificarSolicitud() //Limpia el campo de texto
    
    // this.selectedCliente.id += 1;

    this.toastrSve.success('Agregado correctamente');

    


  }


  
  cargarSolicitud(solicitud: modificarSolicitud){

    this.editSolicitud=solicitud; 

  }


  editarSolicitud(){

    this.selectedSolicitud = this.editSolicitud

    this.toastrSve.info('Editado correctamente')
      

  }



  eliminarSolicitud(){

    if (confirm("¿Está seguro de eliminar el usuario?")){

      this.solicitudesArray = this.solicitudesArray.filter(x => x != this.selectedSolicitud)
     
      this.selectedSolicitud = new modificarSolicitud()

      this.toastrSve.error('Eliminado correctamente')

    }


  }



}
