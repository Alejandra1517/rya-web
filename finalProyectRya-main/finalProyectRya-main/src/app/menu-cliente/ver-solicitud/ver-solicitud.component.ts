import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Solicitudes } from 'src/app/models/solicitudes-clientes';

@Component({
  selector: 'app-ver-solicitud',
  templateUrl: './ver-solicitud.component.html',
  styleUrls: ['./ver-solicitud.component.css']
})
export class VerSolicitudComponent {

  constructor(private toastrSve: ToastrService) {}

  solicitudesArray: Solicitudes[] = [
    {
      idSolicitud: 1,
      nombreCliente: 'Julian',
      servicios: 'Enchape',
      estado: 'En proceso',

      servicio: 'puerta',
      cantidad: 2,
      descripcion: 'de madera :v',
      fecha:"06/12/2022"
    },
    {
      idSolicitud: 2,
      nombreCliente: 'Julio',
      servicios: 'ventana',
      estado: 'Cancelado',

      servicio: 'baldosa',
      cantidad: 0,
      descripcion: 'baldosa blanca',
      fecha:"06/12/2022"
    },
  ];

  selectedSolicitud: Solicitudes = new Solicitudes();

  editCliente: any = {};

  agregarSolicitud() {
    this.solicitudesArray.push(this.selectedSolicitud);

    this.selectedSolicitud = new Solicitudes(); //Limpia el campo de texto

    // this.selectedCliente.id += 1;

    this.toastrSve.success('Agregado correctamente');
  }

  cargarSolicitud(cliente: Solicitudes) {
    this.editCliente = cliente;
  }

  editarSolicitud() {
    this.selectedSolicitud = this.editCliente;

    this.toastrSve.info('Editado correctamente');
  }

  eliminarSolicitud() {
    if (confirm('¿Está seguro de eliminar el usuario?')) {
      this.solicitudesArray = this.solicitudesArray.filter(
        (x) => x != this.selectedSolicitud
      );

      this.selectedSolicitud = new Solicitudes();

      this.toastrSve.error('Eliminado correctamente');
    }
  }

}
