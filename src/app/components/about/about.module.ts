import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about.component";

const ROUTES: Routes = [
    {path: '', component: AboutComponent}
]

@NgModule({
    declarations:[AboutComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

/* a criação do módulo "about" foi necessária p/ este componente (ABOUT) ser carregado apenas com lazy loading, isto é, somente quando for para ele ser carregado
   e não mais quando iniciar a aplicação */

export class AboutModule{}