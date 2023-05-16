import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Usuarios } from '../../models/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarios: Usuarios[] = [
    {
      idUsuario: 1,
      nombreRol: "Cliente",
      correo: "cliente@gmail.com",
      contrasena: "cliente123",
      estado: "activo",
      fechaRegistro: "17/02/2022"
    },
    {
  
      idUsuario: 2,
      nombreRol: "Administrador",
      correo: "admin@gmail.com",
      contrasena: "admin123",
      estado: "activo",
      fechaRegistro: "17/02/2022"
  
    }
  ];

  
  usuariosForm: FormGroup;
  usuariosEditForm: FormGroup;

  pattern:any =  "^[a-zA-Z\s]{1,254}"

  emailPattern: any = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"


  constructor(private fb: FormBuilder,
    private toastrSve: ToastrService) {



      this.usuariosForm = this.fb.group({
        nombreRol: ['', [Validators.required, Validators.pattern(this.pattern)]],
        correo: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        contrasena: ['', Validators.required]
      })

      this.usuariosEditForm = this.fb.group({
        nombreRol: ['', [Validators.required, Validators.pattern(this.pattern)]],
        correo: ['', Validators.required, Validators.pattern(this.emailPattern)],
        contrasena: ['', Validators.required]
      })


    }


  selectedUsuario: Usuarios = new Usuarios();

  agregarUsuario(){
  
    this.usuarios.push(this.selectedUsuario);

    this.toastrSve.success('Registrado correctamente');

    this.selectedUsuario = new Usuarios()

  }
  
  
  

  editUsuario:any = {};

  cargarUsu(usuarios: Usuarios){
    
      this.editUsuario = usuarios

  }



  modificarUsuario(){

    this.toastrSve.info('Editado correctamente')

      this.editUsuario = new Usuarios();


  }


  eliminarUsu(usuario: Usuarios){

    if (confirm("¿Está seguro de eliminar el usuario?")){

      this.usuarios = this.usuarios.filter(x => x != usuario)
     
          usuario = new Usuarios()
    
          this.toastrSve.error('Eliminado correctamente')

    }


  }

}