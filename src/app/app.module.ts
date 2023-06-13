import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { AcessarContaComponent } from './pages/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './pages/criar-conta/criar-conta.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { AlterarSenhaComponent } from './pages/alterar-senha/alterar-senha.component';
import { GerenciarProdutosComponent } from './pages/gerenciar-produtos/gerenciar-produtos.component';

//mapeamento de rotas para cada componente
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'acessar-conta' }, /* página inicial */
  { path: 'acessar-conta', component: AcessarContaComponent },
  { path: 'criar-conta', component: CriarContaComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'alterar-senha', component: AlterarSenhaComponent },
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AcessarContaComponent,
    CriarContaComponent,
    RecuperarSenhaComponent,
    AlterarSenhaComponent,
    GerenciarProdutosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
