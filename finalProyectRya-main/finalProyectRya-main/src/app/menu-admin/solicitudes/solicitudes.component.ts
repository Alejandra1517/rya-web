import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Solicitudes } from '../../models/solicitudes'

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {

  constructor(private toastrSve: ToastrService) {}


  solicitudesArray: Solicitudes[] = [
    {
      idSolicitud: 1,
      nombreCliente: "Julian",
      servicios: "Revocar",
      estado: "activo"
    },
    {
      idSolicitud: 2,
      nombreCliente: "Julio",
      servicios: "Pintar",
      estado: "activo"
    }
  ];

  selectedSolicitud: Solicitudes = new Solicitudes();


  eliminarSolicitud(solicitud: Solicitudes){

    if (confirm("¿Está seguro de eliminar el cliente?")){

      this.solicitudesArray = this.solicitudesArray.filter(x => x != solicitud)
     
         solicitud = new Solicitudes()
    
          this.toastrSve.error('Eliminado correctamente')

    }


  }

}