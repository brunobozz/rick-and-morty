import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCharacterComponent } from './pages/page-character/page-character.component';
import { PageCharactersComponent } from './pages/page-characters/page-characters.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    component: PageCharactersComponent,
  },
  {
    path: 'character/:charId',
    component: PageCharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
