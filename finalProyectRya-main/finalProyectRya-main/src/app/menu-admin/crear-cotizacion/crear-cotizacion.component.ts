import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { crearCotizaciones } from '../../models/crearCotizaciones';

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.component.html',
  styleUrls: ['./crear-cotizacion.component.css']
})


export class CrearCotizacionComponent {



  cotizaciones: crearCotizaciones[] = [
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


  constructor(private fb: FormBuilder,
    private toastrSve: ToastrService) {



      this.cotizacionesForm = this.fb.group({
        // cliente: ['', Validators.required],
        // fechaDuracion: ['', Validators.required],
        // servicio: ['', Validators.required],
        cantidad: ['', Validators.required],
        descripcion: ['', Validators.required]
      })

      this.cotizacionesEditForm = this.fb.group({
        // cliente: ['', Validators.required],
        // fechaDuracion: ['', Validators.required],
        // servicio: ['', Validators.required],
        cantidad: ['', Validators.required],
        descripcion: ['', Validators.required]
      })




    }


  selectedCotizaciones: crearCotizaciones = new crearCotizaciones();

  agregarCotizaciones(){
  
    this.cotizaciones.push(this.selectedCotizaciones);

    this.toastrSve.success('Registrada correctamente');

    this.selectedCotizaciones = new crearCotizaciones()
  
    this.cotizacionesForm?.valid;
  


  }
  
  


  

  editCotizacion:any = {};

  cargarCotizacion(cotizaciones: crearCotizaciones){
    
      this.editCotizacion = cotizaciones

  }



  modificarCotizacion(){

    this.toastrSve.info('Editado correctamente')

      this.editCotizacion = new crearCotizaciones();


  }


  eliminarCotizacion(cotizacion: crearCotizaciones){

    if (confirm("¿Está seguro de eliminar la cotizacion?")){

      this.cotizaciones = this.cotizaciones.filter(x => x != cotizacion)
     
          cotizacion = new crearCotizaciones()
    
          this.toastrSve.error('Eliminado correctamente')

    }


  }

  
}
