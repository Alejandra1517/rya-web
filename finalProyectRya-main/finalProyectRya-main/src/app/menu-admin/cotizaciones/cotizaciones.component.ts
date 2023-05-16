import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cotizaciones } from '../../models/cotizaciones';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent {

  cotizacionesArray: Cotizaciones[] = [
    {
      id: 1,
      cliente: "Luis",
      estado: "activo",
      fechaInicio: "20/07/2022",
      fechaDuracion: "20/12/2022",

      servicio: "revocar",
      cantidad: 1,
      
     descripcion: "Fachada",
     total: 700000

    },
    {
      id: 1,
      cliente: "Sofía",
      estado: "activo",
      fechaInicio: "04/01/2022",
      fechaDuracion: "10/09/2022",

      servicio: "revocar",
      cantidad: 1,
      
     descripcion: "Fachada",
     total: 700000
    }
  ];
  

  selectedCotizacion: Cotizaciones = new Cotizaciones();


  constructor(private toastrSve: ToastrService) {}


  editCotizacion:any = {};

  agregarCotizacion(){
  
    this.cotizacionesArray.push(this.selectedCotizacion);

    this.selectedCotizacion = new Cotizaciones() //Limpia el campo de texto

    this.toastrSve.success('Cotización agregada correctamente');


  }


  
  cargarCotizacion(cotizacion: Cotizaciones){

    this.editCotizacion=cotizacion; 

  }


  editarCotizacion(){

    this.selectedCotizacion = this.editCotizacion

    this.toastrSve.info('Cotización modificada correctamente')
      

  }



  eliminarCotizacion(cotizacion: Cotizaciones){

    if (confirm("¿Está seguro de eliminar la cotización?")){

      this.cotizacionesArray = this.cotizacionesArray.filter(x => x != cotizacion)
     
      cotizacion = new Cotizaciones()
    
          this.toastrSve.error('Eliminada correctamente')

    }


  }


}
