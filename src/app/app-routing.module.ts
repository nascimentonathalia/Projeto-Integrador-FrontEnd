import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'rodape', component: RodapeComponent},
  {path:'menu', component: MenuComponent},
  {path:'inicio', component: InicioComponent},
  {path:'categoria', component: CategoriaComponent},
  {path:'categoria-edit/:id', component: CategoriaEditComponent},
  {path:'categoria-delete/:id', component: CategoriaDeleteComponent},
  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent},
  {path: 'user-edit/:id', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

