import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Obras } from '../../models/obras-clientes';

@Component({
  selector: 'app-obras-clientes',
  templateUrl: './obras-clientes.component.html',
  styleUrls: ['./obras-clientes.component.css']
})
export class ObrasClientesComponent {

  
  constructor(private toastrSve: ToastrService) {}


  obras: Obras[] = [
    {
      idObra:1,
      nombreCliente:"Julian",
      servicios:"Baldosa",
      estadoServicio:"activo",
      cantidad:2,
      estado:"en proceso",
      fechaRegistro:"17/02/2022"
    },
    {
      idObra:2,
      nombreCliente:"Liliana",
      servicios:"ventana",
      estadoServicio:"activo",
      cantidad:2,
      estado:"Terminada",
      fechaRegistro:"17/02/2022"
    }
  ];

  selectedObra: Obras = new Obras();


  eliminarObra(obra: Obras){

    if (confirm("¿Está seguro de eliminar esta obra?")){

      this.obras = this.obras.filter(x => x != obra)
     
          obra = new Obras()
    
          this.toastrSve.error('Eliminado correctamente')

    }



  }

}
