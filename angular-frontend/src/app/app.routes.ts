import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistComponent } from './artist/artist.component';
import { FriendsComponent } from './friends/friends.component';
import { TimetableComponent } from './timetable/timetable.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'friends', component: FriendsComponent, canActivate: [authGuard] },
    { path: 'artists', component: ArtistComponent, canActivate: [authGuard] },
    { path: 'timetable', component: TimetableComponent, canActivate: [authGuard] },
];
