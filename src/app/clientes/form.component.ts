import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClientesService } from './clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private titulo = 'Creación de clientes';

  private cliente: Cliente = new Cliente();

  constructor(private clientesService: ClientesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params['id'];
        if (id) {
          this.clientesService.getCliente(id).subscribe(
            cliente => {
              this.cliente = cliente;
            }
          );
        }
      }
    );
  }

  create(): void {
    this.clientesService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        swal('Nuevo cliente', `Cliente ${cliente.nombre} ${cliente.apellido} creado con éxito.`, 'success');
      }
    );
  }

  update(): void {
    this.clientesService.update(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        swal('Edición de cliente', `Cliente ${cliente.nombre} ${cliente.apellido} actualizado con éxito.`, 'success');
      }
    );
  }

}
