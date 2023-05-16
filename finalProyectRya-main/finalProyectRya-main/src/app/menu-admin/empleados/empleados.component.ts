import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Empleados } from '../../models/empleados';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent  {


  
  
  empleados: Empleados[] = [
    {
      id: 1,
      nombre: "Andrés",
      apellido: "Jorge123",
      telefono: 3265482153,
      documento: "43080027",
      direccion: "Cll 23",
      estado: "activo",
      fecha: "20/17/2022"
      
    },
    {
      id: 2,
      nombre: "Cristian",
      apellido: "Jorge123",
      telefono: 3265482153,
      documento: "10256348",
      direccion: "Cll 130",
      estado: "Activo",
      fecha: "20/17/2022"
    }
  ];



empleadosForm: FormGroup;
empleadosEditForm: FormGroup;

pattern:any =  "^[a-zA-Z\s]{1,254}"


constructor(private fb: FormBuilder,
  private toastrSve: ToastrService) {



    this.empleadosForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.pattern)]],
      apellido: ['', [Validators.required, Validators.pattern(this.pattern)]],
      telefono: ['', Validators.required],
      documento: ['', Validators.required],
      direccion: ['', Validators.required]
    })

    this.empleadosEditForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.pattern)]],
      apellido: ['', [Validators.required, Validators.pattern(this.pattern)]],
      telefono: ['', Validators.required],
      documento: ['', Validators.required],
      direccion: ['', Validators.required]

    })


  }


selectedEmpleado: Empleados = new Empleados();

agregarEmpleado(){

  this.empleados.push(this.selectedEmpleado);

  this.toastrSve.success('Registrado correctamente');

  this.selectedEmpleado = new Empleados()

}






editEmpleado:any = {};

cargarEmpleado(empleados: Empleados){
  
    this.editEmpleado = empleados

}



modificarEmpleado(){

  this.toastrSve.info('Editado correctamente')

    this.editEmpleado = new Empleados();


}


eliminarEmpleado(empleado: Empleados){

  if (confirm("¿Está seguro de eliminar el empleado?")){

    this.empleados = this.empleados.filter(x => x != empleado)
   
        empleado = new Empleados()
  
        this.toastrSve.error('Eliminado correctamente')

  }


}



  }

  
