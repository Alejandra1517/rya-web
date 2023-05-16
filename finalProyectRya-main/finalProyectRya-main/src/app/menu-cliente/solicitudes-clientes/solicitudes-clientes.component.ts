import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Solicitudes } from '../../models/solicitudes-clientes';

@Component({
  selector: 'app-solicitudes-clientes',
  templateUrl: './solicitudes-clientes.component.html',
  styleUrls: ['./solicitudes-clientes.component.css'],
})
export class SolicitudesClientesComponent {
  constructor(private toastrSve: ToastrService) {}

  solicitudesArray: Solicitudes[] = [
    {
      idSolicitud: 1,
      nombreCliente: 'Julian',
      servicios: 'Enchape',
      estado: 'activo',


      servicio: 'puerta',
      cantidad: 2,
      descripcion: 'de madera :v',
      fecha:"06/12/2022"
    },
    {
      idSolicitud: 2,
      nombreCliente: 'Julio',
      servicios: 'ventana',
      estado: 'activo',


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
