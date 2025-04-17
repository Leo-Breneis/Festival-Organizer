import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistComponent } from './artist/artist.component';
import { FriendsComponent } from './friends/friends.component';
import { TimetableComponent } from './timetable/timetable.component';
import { authGuard } from './auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'friends', component: FriendsComponent, canActivate: [authGuard] },
    { path: 'artists/:id', component: ArtistDetailComponent, canActivate: [authGuard] },
    { path: 'artists', component: ArtistComponent, canActivate: [authGuard] },
    { path: 'timetable', component: TimetableComponent, canActivate: [authGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: 'login' },
];
