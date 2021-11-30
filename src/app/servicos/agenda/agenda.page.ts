import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Agenda, Clientes } from '../servico-models';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  agenda: Agenda[];
  clientes: Clientes[];

  constructor(
    private alertController: AlertController,
    private servicoService: ServicoService
  ) {
    this.agenda = this.servicoService.getServicoAgenda();
    this.clientes = this.servicoService.getServicoClientes();
  }

  ngOnInit() {
  }

  excluir(agenda: Agenda){
    this.alertController
    .create({
      header: 'Exclusão',
      message: `você deseja excluir o agendamento de: ${agenda.cliente}`,
      buttons: [
        {
          text: 'SIM',
          handler: () => {
            this.servicoService.removeAgenda(agenda.id);
            this.agenda = this.servicoService.getServicoAgenda();
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
