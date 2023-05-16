import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
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

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { ConfiguracionComponent } from './menu-admin/configuracion/configuracion.component';
import { CrearSolicitudComponent } from './menu-admin/crear-solicitud/crear-solicitud.component';
import { ModificarSolicitudComponent } from './menu-admin/modificar-solicitud/modificar-solicitud.component';
import { CrearCotizacionComponent } from './menu-admin/crear-cotizacion/crear-cotizacion.component';
import { ModificarCotizacionComponent } from './menu-admin/modificar-cotizacion/modificar-cotizacion.component';
import { FooterComponent } from './menu-admin/footer/footer.component';
import { ServiciosClientesComponent } from './menu-cliente/servicios-clientes/servicios-clientes.component';
import { SolicitudesClientesComponent } from './menu-cliente/solicitudes-clientes/solicitudes-clientes.component';
import { ObrasClientesComponent } from './menu-cliente/obras-clientes/obras-clientes.component';
import { MainSidebarComponent } from './menu-admin/main-sidebar/main-sidebar.component';
import { LoginComponent } from './login/login.component';
import { MainSidebar2Component } from './menu-cliente/main-sidebar2/main-sidebar2.component';
import { CrearSolicitudClienteComponent } from './menu-cliente/crear-solicitud-cliente/crear-solicitud-cliente.component';
import { VerSolicitudComponent } from './menu-cliente/ver-solicitud/ver-solicitud.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ServiciosObraComponent } from './menu-admin/servicios-obra/servicios-obra.component';
import { AgregarmaterialesSolicitudComponent } from './menu-admin/agregarmateriales-solicitud/agregarmateriales-solicitud.component';
import { MaterialesCrearcotizacionComponent } from './menu-admin/materiales-crearcotizacion/materiales-crearcotizacion.component';
import { MaterialesModificarcotizacionComponent } from './menu-admin/materiales-modificarcotizacion/materiales-modificarcotizacion.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    ControlSidebarComponent,
    UsuariosComponent,
    MaterialesComponent,
    ServiciosComponent,
    EmpleadosComponent,
    ClientesComponent,
    SolicitudesComponent,
    CotizacionesComponent,
    ObrasComponent,
    ConfiguracionComponent,
    CrearSolicitudComponent,
    ModificarSolicitudComponent,
    CrearCotizacionComponent,
    ModificarCotizacionComponent,
    FooterComponent,
    ServiciosClientesComponent,
    SolicitudesClientesComponent,
    ObrasClientesComponent,
    MainSidebarComponent,
    LoginComponent,
    MainSidebar2Component,
    CrearSolicitudClienteComponent,
    VerSolicitudComponent,
    RegistrarseComponent,
    ServiciosObraComponent,
    AgregarmaterialesSolicitudComponent,
    MaterialesCrearcotizacionComponent,
    MaterialesModificarcotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
