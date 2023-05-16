

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cotizaciones } from '../../models/cotizaciones';

import { modificarCotizaciones } from '../../models/modificarCotizacion'

@Component({
  selector: 'app-modificar-cotizacion',
  templateUrl: './modificar-cotizacion.component.html',
  styleUrls: ['./modificar-cotizacion.component.css']
})
export class ModificarCotizacionComponent {

  
  cotizaciones: modificarCotizaciones[] = [
    {
      id: 1,
      cliente: "Luis",
      estado: "activo",
      fechaInicio: "20/07/2022",
      fechaDuracion: "20/12/2022",
      servicio: "cimentación",
      cantidad: 1,
      descripcion: "obra negra",
      total: 50000
    },
    {
      id: 2,
      cliente: "Sofía",
      estado: "activo",
      fechaInicio: "04/01/2022",
      fechaDuracion: "10/09/2022",
      servicio: "pintura",
      cantidad: 1,
      descripcion: "obra blanca",
      total: 50000

    }
  ];
  

  
  cotizacionesForm: FormGroup;
  cotizacionesEditForm: FormGroup;

  pattern:any =  "^[a-zA-Z\s]{1,254}"

constructor(private fb: FormBuilder,
  private toastrSve: ToastrService) {



    this.cotizacionesForm = this.fb.group({
      cliente: ['', Validators.required],
      servicio: ['', [Validators.required, Validators.pattern(this.pattern)]],
      cantidad: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.pattern(this.pattern)]]
    })

    this.cotizacionesEditForm = this.fb.group({
      cliente: ['', Validators.required],
      servicio: ['', [Validators.required, Validators.pattern(this.pattern)]],
      cantidad: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.pattern(this.pattern)]]
    })


  }


selectedCotizaciones: modificarCotizaciones = new modificarCotizaciones();

agregarCotizacion(){

  this.cotizaciones.push(this.selectedCotizaciones);

  this.toastrSve.success('Agregada correctamente');

  this.selectedCotizaciones = new modificarCotizaciones()

}






editCotizacion:any = {};

cargarCotizacion(cotizaciones: modificarCotizaciones){
  
    this.editCotizacion = cotizaciones

}



modificarCotizacion(){

  this.toastrSve.info('Editado correctamente')

    this.editCotizacion = new modificarCotizaciones();


}


eliminarCotizacion(cotizaciones: modificarCotizaciones){

  if (confirm("¿Está seguro de eliminar la cotización?")){

    this.cotizaciones = this.cotizaciones.filter(x => x != cotizaciones)
   
        cotizaciones = new modificarCotizaciones()
  
        this.toastrSve.error('Eliminada correctamente')

  }


}






}
