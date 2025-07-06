import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRoomsComponent } from './pages/admin-rooms/admin-rooms.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminBookingsComponent } from './pages/admin-bookings/admin-bookings.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SpaComponent } from './pages/spa/spa.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/rooms', component: AdminRoomsComponent },
    { path: 'admin/users', component: AdminUsersComponent },
    { path: 'admin/bookings', component: AdminBookingsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'spa', component: SpaComponent }


];
