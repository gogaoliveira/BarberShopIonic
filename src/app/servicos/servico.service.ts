import { Injectable } from '@angular/core';
import { Cortes, Clientes, Agenda } from './servico-models';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private cortes: Cortes[];
  private clientes: Clientes[];
  private agenda: Agenda[];

  private contadorCortes = 5;
  private contadorClientes = 3;
  private contadorAgenda = 3;

  constructor() {
    this.cortes = [
      {
        id: 1,
        nome: 'Cabelo Raspar',
        preco: 15,
        foto: 'https://i.pinimg.com/550x/76/c7/82/76c78297087cb87eb7d676a11845c5d3.jpg'
      },
      {
        id: 2,
        nome: 'Cabelo Simples',
        preco: 17,
        foto: 'https://www.elhombre.com.br/wp-content/uploads/2018/12/cortes-de-cabelo-masculino-fade29.jpg'
      },
      {
        id: 3,
        nome: 'Cabelo Degradê',
        preco: 30,
        foto: 'https://i2.wp.com/www.canalmasculino.com.br/wp-content/uploads/2018/10/cortes-cabelo-masculinos-2019-destaque.jpg?resize=640%2C640'
      },
      {
        id: 4,
        nome: 'Barba corte total',
        preco: 15,
        foto: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2234741:1589933677/barba2.jpg?f=default&$p$f=44b38a4'
      }
    ];

    this.clientes = [
      {
        id: 1,
        nome: 'Leonardo',
        cpf: '123.456.789-09',
        contato: '(48) 9 9955 4433',
        foto: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/61/22/20208787.jpg',
      },
      {
        id: 2,
        nome: 'Ney',
        cpf: '111.222.333-44',
        contato: '(48) 9 9999 1234',
        foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      }
    ];

    this.agenda = [
      {
        id: 1,
        data: '2021-01-01',
        hora: '17h30',
        cliente: 1,
        corte: 1,
      },
      {
        id: 2,
        data: '2021-01-01',
        hora: '18h30',
        cliente: 2,
        corte: 2,
      }
    ];

  }



  //CORTES

  public getServicoCortes() {
  return this.cortes;
}

  public removeCorte(id: number) {
  this.cortes = this.cortes.filter(corte => corte.id !== id);
}

  public salvarCorte(corte: Cortes) {
  if (corte.id) {
    const index = this.cortes.findIndex(g => g.id === corte.id);
    this.cortes[index] = corte;
  } else {
    const id = this.contadorCortes++;
    this.cortes.push({ ...corte, id });
  }
}
  public findByIdCorte(id: number) {
  return this.cortes.find(corte => corte.id === id);
}

  //CLIENTES

  public getServicoClientes() {
  return this.clientes;
}

  public removeCliente(id: number) {
  this.clientes = this.clientes.filter(cliente => cliente.id !== id);
}

  public salvarCliente(cliente: Clientes) {
  if (cliente.id) {
    const index = this.clientes.findIndex(c => c.id === cliente.id);
    this.clientes[index] = cliente;
  } else {
    const id = this.contadorClientes++;
    this.clientes.push({ ...cliente, id });
  }
}
  public findByIdCliente(id: number) {
  return this.clientes.find(cliente => cliente.id === id);
}

  //AGENDA

  public getServicoAgenda() {
  return this.agenda;
}

  public removeAgenda(id: number) {
  this.agenda = this.agenda.filter(agenda => agenda.id !== id);
}

  public salvarAgenda(agenda: Agenda) {
  if (agenda.id) {
    const index = this.agenda.findIndex(a => a.id === agenda.id);
    this.agenda[index] = agenda;
  } else {
    const id = this.contadorAgenda++;
    this.agenda.push({ ...agenda, id });
  }
}
  public findByIdAgenda(id: number) {
  return this.agenda.find(agenda => agenda.id === id);
}
}
