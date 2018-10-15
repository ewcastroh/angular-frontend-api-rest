import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CLIENTES } from './clientes.json';
import { ClientesService } from './clientes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    return this.clientesService.getClientes().subscribe(
      (clientes: Cliente[]) => {
        console.log(clientes);
        this.clientes = clientes;
      }
    );
  }

  delete(cliente: Cliente): void {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    });

    swalWithBootstrapButtons({
      title: 'Estas seguro?',
      text: `Estas seguro de eliminar el cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminarlo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clientesService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(
              data => data !== cliente
            );
            swalWithBootstrapButtons(
              'Cliente eliminado!',
              `El cliente ${cliente.nombre} ${cliente.apellido} ha sido eliminado exitosamente.`,
              'success'
            );
          }
        );
      }
    });
  }

}
