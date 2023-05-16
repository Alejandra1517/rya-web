import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Materiales } from '../../models/materiales';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent {

  materiales:Materiales[] = [

      {
          id: 1,
          categoria: "Ventana",
          infoMaterial: "Madera",
          estado: "Disponible",
          fecha: "13/12/2022"
        },
        {
          id: 2,
          categoria: "Pintura de interior",
          infoMaterial: "A base de color blanco",
          estado: "Disponible",
          fecha: "13/12/2022"
        }

  ];

  materialesForm: FormGroup;
  materialesEditForm: FormGroup;

  pattern:any =  "^[a-zA-Z\s]{1,254}"


  constructor(private fb: FormBuilder,
    private toastrSve: ToastrService) {



      this.materialesForm = this.fb.group({
        categoria: ['', [Validators.required, Validators.pattern(this.pattern)]],
        infoMaterial: ['', [Validators.required, Validators.pattern(this.pattern)]]
      })

      this.materialesEditForm = this.fb.group({
        categoria: ['', [Validators.required, Validators.pattern(this.pattern)]],
        infoMaterial: ['', [Validators.required, Validators.pattern(this.pattern)]]
      })


    }


  selectedMaterial: Materiales = new Materiales();

  agregarMaterial(){
  
    this.materiales.push(this.selectedMaterial);

    this.toastrSve.success('Registrado correctamente');

    this.selectedMaterial = new Materiales()

  }
  
  


  

  editMaterial:any = {};

  cargarMaterial(materiales: Materiales){
    
      this.editMaterial = materiales

  }



  modificarMaterial(){

    this.toastrSve.info('Editado correctamente')

      this.editMaterial = new Materiales();


  }


  eliminarMaterial(material: Materiales){

    if (confirm("¿Está seguro de eliminar el material?")){

      this.materiales = this.materiales.filter(x => x != material)
     
          material = new Materiales()
    
          this.toastrSve.error('Eliminado correctamente')

    }


  }
}
