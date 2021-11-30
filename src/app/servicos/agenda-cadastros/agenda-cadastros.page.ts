import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes, Cortes } from '../servico-models';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-agenda-cadastros',
  templateUrl: './agenda-cadastros.page.html',
  styleUrls: ['./agenda-cadastros.page.scss'],
})
export class AgendaCadastrosPage implements OnInit {
  clientes: Clientes[];
  cortes: Cortes[];
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private servicoService: ServicoService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {
    this.clientes = this.servicoService.getServicoClientes();
    this.cortes = this.servicoService.getServicoCortes();
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      cliente: ['', Validators.required],
      corte: ['', Validators.required]
    });

    const id = +this.activateRoute.snapshot.params.id;
    const agenda = this.servicoService.findByIdCorte(id);
    if(agenda){
      this.form.patchValue({
        ...agenda
      });
    }
  }
  salvar(){
    this.servicoService.salvarAgenda(this.form.value);
    this.router.navigate(['agenda']);
  }
}

