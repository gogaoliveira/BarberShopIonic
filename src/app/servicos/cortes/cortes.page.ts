import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cortes } from '../servico-models';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.page.html',
  styleUrls: ['./cortes.page.scss'],
})
export class CortesPage implements OnInit {

  cortes: Cortes[];

  constructor(
    private alertController: AlertController,
    private servicoService: ServicoService
  ) {
    this.cortes = this.servicoService.getServicoCortes();
  }

  ngOnInit() {
  }

  excluir(corte: Cortes) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o tipo de corte: ${corte.nome}`,
        buttons: [
          {
            text: 'SIM',
            handler: () => {
              this.servicoService.removeCorte(corte.id);
              this.cortes = this.servicoService.getServicoCortes();
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
