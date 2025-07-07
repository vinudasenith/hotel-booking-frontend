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
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ThingstodoComponent } from './pages/thingstodo/thingstodo.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';

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
    { path: 'spa', component: SpaComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'thingstodo', component: ThingstodoComponent },
    { path: 'facilities', component: FacilitiesComponent },


];
