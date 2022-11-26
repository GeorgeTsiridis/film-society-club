import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { WatchedListComponent } from './components/watched-list/watched-list.component';
import { MovieResolver } from './services/movie.resolver';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'movie/:id',
    resolve: {
      movie: MovieResolver,
    },
    component: MovieInfoComponent
  },
  { path: 'error', 
    component: ErrorComponent 
  },
  { path: 'favorites', 
    component: FavoritesComponent 
  },
  { path: 'watched-list', 
    component: WatchedListComponent 
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
