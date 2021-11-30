import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-clientes-cadastros',
  templateUrl: './clientes-cadastros.page.html',
  styleUrls: ['./clientes-cadastros.page.scss'],
})
export class ClientesCadastrosPage implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private servicoService: ServicoService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
           id: [''],
         nome: ['', [Validators.required, Validators.minLength(3)]],
          cpf: ['', [Validators.required, Validators.minLength(11)]],
      contato: ['', [Validators.required, Validators.minLength(10)]],
         foto: ['', Validators.required],
    });

    const id = +this.activateRoute.snapshot.params.id;
    const cliente = this.servicoService.findByIdCliente(id);
    if(cliente){
      this.form.patchValue({
        ...cliente
      });
    }
  }

  salvar(){
    this.servicoService.salvarCliente(this.form.value);
    this.router.navigate(['clientes']);
  }

}
