import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
import { Registrarse } from '../models/registrarse';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  registrarse: Registrarse[] = [
    {

      nombre: '',
      telefono: 0,
      direccion: '',
      correo: "user@gmail.com",
      contrasena: "123",
      documento: 0

    }

  ];


  registrarseForm: FormGroup;

  // regexContrasena = "^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"

  regexCorreo = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"

  //La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.


constructor(private fb: FormBuilder) {



    this.registrarseForm = this.fb.group({

      
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],

      contrasena: ['', [Validators.required]],

      nombre: ['', [Validators.required]],

      telefono: ['', [Validators.required]],

      direccion: ['', [Validators.required]],

      documento: ['', [Validators.required, Validators.minLength(8) ]]



    })


  }

  registradoCorrectamente(){

    Swal.fire({
      icon: 'success',
      title: 'Registrado correctamente! Ya puedes iniciar sesión',
      showConfirmButton: false,
      timer: 1800
    })

  }

}
