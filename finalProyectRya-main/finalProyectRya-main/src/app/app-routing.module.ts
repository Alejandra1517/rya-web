import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './menu-admin/main-header/main-header.component';
import { ControlSidebarComponent } from './menu-admin/control-sidebar/control-sidebar.component';
import { UsuariosComponent } from './menu-admin/usuarios/usuarios.component';
import { MaterialesComponent } from './menu-admin/materiales/materiales.component';
import { ServiciosComponent } from './menu-admin/servicios/servicios.component';
import { EmpleadosComponent } from './menu-admin/empleados/empleados.component';
import { ClientesComponent } from './menu-admin/clientes/clientes.component';
import { SolicitudesComponent } from './menu-admin/solicitudes/solicitudes.component';
import { CotizacionesComponent } from './menu-admin/cotizaciones/cotizaciones.component';
import { ObrasComponent } from './menu-admin/obras/obras.component';

import { ConfiguracionComponent } from './menu-admin/configuracion/configuracion.component';
import { CrearSolicitudComponent } from './menu-admin/crear-solicitud/crear-solicitud.component';
import { ModificarSolicitudComponent } from './menu-admin/modificar-solicitud/modificar-solicitud.component';
import { CrearCotizacionComponent } from './menu-admin/crear-cotizacion/crear-cotizacion.component';
import { ModificarCotizacionComponent } from './menu-admin/modificar-cotizacion/modificar-cotizacion.component';

import { ServiciosClientesComponent } from './menu-cliente/servicios-clientes/servicios-clientes.component';
import { SolicitudesClientesComponent } from './menu-cliente/solicitudes-clientes/solicitudes-clientes.component';
import { ObrasClientesComponent } from './menu-cliente/obras-clientes/obras-clientes.component';
import { MainSidebarComponent } from './menu-admin/main-sidebar/main-sidebar.component'
import { LoginComponent } from './login/login.component';
import { MainSidebar2Component } from './menu-cliente/main-sidebar2/main-sidebar2.component';
import { CrearSolicitudClienteComponent } from './menu-cliente/crear-solicitud-cliente/crear-solicitud-cliente.component';
import { VerSolicitudComponent } from './menu-cliente/ver-solicitud/ver-solicitud.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ServiciosObraComponent } from './menu-admin/servicios-obra/servicios-obra.component';
import { AgregarmaterialesSolicitudComponent } from './menu-admin/agregarmateriales-solicitud/agregarmateriales-solicitud.component';
import { MaterialesCrearcotizacionComponent } from './menu-admin/materiales-crearcotizacion/materiales-crearcotizacion.component';
import { MaterialesModificarcotizacionComponent } from './menu-admin/materiales-modificarcotizacion/materiales-modificarcotizacion.component';



const routes:Routes = [


  { path: '', redirectTo: 'main-sidebar', pathMatch: 'full'},

  { path: 'login', component:LoginComponent},

  { path: 'registrarse', component:RegistrarseComponent},

  { path: 'main-sidebar', component:MainSidebarComponent,

  children: [
    
    // { path: '', redirectTo: 'main-sidebar', pathMatch: 'full'},
  
    {path: 'usuarios', component:UsuariosComponent},
    {path: 'materiales', component:MaterialesComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'empleados', component:EmpleadosComponent},
    {path: 'clientes', component:ClientesComponent},
    {path: 'solicitudes', component:SolicitudesComponent},
    {path: 'cotizaciones', component:CotizacionesComponent},
    {path: 'obras', component:ObrasComponent},
    {path: 'configuracion', component:ConfiguracionComponent},
 
    {path: 'crear-solicitud', component:CrearSolicitudComponent},
    {path: 'crear-cotizacion', component:CrearCotizacionComponent},
    {path: 'servicios-obra', component:ServiciosObraComponent},
    {path: 'modificar-cotizacion', component:ModificarCotizacionComponent},
    {path: 'modificar-solicitud', component:ModificarSolicitudComponent},


    {path: 'agregarmaterial-solicitud', component:AgregarmaterialesSolicitudComponent},

    {path: 'materiales-crearcotizacion', component:MaterialesCrearcotizacionComponent},

    {path: 'materiales-modificarcotizacion', component:MaterialesModificarcotizacionComponent}

 
  ]
  



  },

 





  { path: 'main-sidebar2', component:MainSidebar2Component,

  children: [
    
    // { path: '', redirectTo: 'main-sidebar', pathMatch: 'full'},
  
    {path: 'obras-clientes', component:ObrasClientesComponent},
    {path: 'servicios-clientes', component:ServiciosClientesComponent},
    {path: 'solicitudes-clientes', component:SolicitudesClientesComponent},

    
    {path: 'crear-solicitudesCliente', component:CrearSolicitudClienteComponent},
    {path: 'verSolicitud', component:VerSolicitudComponent}
   

  ]

  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
