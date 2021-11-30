import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Clientes } from '../servico-models';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes: Clientes[];

  constructor(
    private alertController: AlertController,
    private servicoService: ServicoService
  ) {
    this.clientes = this.servicoService.getServicoClientes();
  }

  ngOnInit() {
  }

  excluir(cliente: Clientes) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o tipo de corte: ${cliente.nome}`,
        buttons: [
          {
            text: 'SIM',
            handler: () => {
              this.servicoService.removeCliente(cliente.id);
              this.clientes = this.servicoService.getServicoClientes();
            }
          },
          {
            text: 'NÃO'
          }
        ]
      })
      .then(alert => alert.present());
  }

}
