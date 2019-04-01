import {Routes} from'@angular/router';
import { PATH_HOME } from './app.routes.constantes';
import { FormComponent } from './form/form.component';

export const ROUTES: Routes = [
    {path: PATH_HOME, component: FormComponent},
]