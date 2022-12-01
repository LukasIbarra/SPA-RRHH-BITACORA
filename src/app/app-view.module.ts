import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalAddComponent } from "./personal/personal-add/personal-add.component";
import { PersonalAdminComponent } from "./personal/personal-admin/personal-admin.component";
import { PersonalEditComponent } from "./personal/personal-edit/personal-edit.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";
import { CargosAddComponent } from "./cargos/cargos-add/cargos-add.component";
import { CargosAdminComponent } from "./cargos/cargos-admin/cargos-admin.component";
import { CargosEditComponent } from "./cargos/cargos-edit/cargos-edit.component";
import { FondoPensionAddComponent } from "./fondo-pension/fondo-pension-add/fondo-pension-add.component";
import { FondoPensionAdminComponent } from "./fondo-pension/fondo-pension-admin/fondo-pension-admin.component";
import { FondoPensionEditComponent } from "./fondo-pension/fondo-pension-edit/fondo-pension-edit.component";
import { FondoSaludAddComponent } from "./fondo-salud/fondo-salud-add/fondo-salud-add.component";
import { FondoSaludAdminComponent } from "./fondo-salud/fondo-salud-admin/fondo-salud-admin.component";
import { FondoSaludEditComponent } from "./fondo-salud/fondo-salud-edit/fondo-salud-edit.component";

const rutas:Routes = [
    { path: '', component: DashboardComponent},
    { path: 'personal', component: PersonalAdminComponent},
    { path: 'personal/add', component: PersonalAddComponent},
    { path: 'personal/edit', component: PersonalEditComponent},
    { path: 'cargos', component: CargosAdminComponent},
    { path: 'cargos/add', component: CargosAddComponent},
    { path: 'cargos/edit', component: CargosEditComponent},
    { path: 'fondo-pension', component: FondoPensionAdminComponent},
    { path: 'fondo-pension/add', component: FondoPensionAddComponent},
    { path: 'fondo-pension/edit', component: FondoPensionEditComponent},
    { path: 'fondo-salud', component: FondoSaludAdminComponent},
    { path: 'fondo-salud/add', component: FondoSaludAddComponent},
    { path: 'fondo-salud/edit', component: FondoSaludEditComponent}
  ]

@NgModule({
    declarations: [
      DashboardComponent,
      PersonalAdminComponent,
      PersonalAddComponent,
      PersonalEditComponent,
      CargosAddComponent,
      CargosAdminComponent,
      CargosEditComponent,
      FondoPensionAddComponent,
      FondoPensionAdminComponent,
      FondoPensionEditComponent,
      FondoSaludAddComponent,
      FondoSaludAdminComponent,
      FondoSaludEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(rutas),
    ],
    exports:[RouterModule]
})
export class AppViewModule { }
