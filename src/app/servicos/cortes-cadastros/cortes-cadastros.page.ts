import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-cortes-cadastros',
  templateUrl: './cortes-cadastros.page.html',
  styleUrls: ['./cortes-cadastros.page.scss'],
})
export class CortesCadastrosPage implements OnInit {
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
      preco: ['', Validators.required],
      foto: ['', Validators.required],
    });

    const id = +this.activateRoute.snapshot.params.id;
    const corte = this.servicoService.findByIdCorte(id);
    if(corte){
      this.form.patchValue({
        ...corte
      });
    }
  }

  salvar(){
    this.servicoService.salvarCorte(this.form.value);
    this.router.navigate(['cortes']);
  }
}
