import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  login: Login[] = [
    {

      correo: "user@gmail.com",
      contrasena: "123"

    }

  ];


  loginForm: FormGroup;

  // regexContrasena = "^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"

  regexCorreo = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"

  //La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.


constructor(private fb: FormBuilder) {



    this.loginForm = this.fb.group({

      
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],

      contrasena: ['', [Validators.required]]



    })


  }



}
