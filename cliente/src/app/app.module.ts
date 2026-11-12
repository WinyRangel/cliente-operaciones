import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData, CommonModule, NgOptimizedImage } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// PrimeNG Modules
import { providePrimeNG } from 'primeng/config';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessageModule } from 'primeng/message';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FechaFormatPipe } from './components/pipes/fecha-format.pipe';
import { ActividadPipe } from './components/pipes/actividad.pipe';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { TruncatePipe } from './components/pipes/truncate.pipe';


// PUBLIC ROUTES
import { InicioComponent } from './features/public/inicio/inicio.component';
import { Error404Component } from './features/public/error404/error404.component';
import { IniciarSesionComponent } from './features/public/iniciar-sesion/iniciar-sesion.component';

// IMPORTS ROUTES ADMIN
import { ListarAgendaComponent } from './features/admin/listar-agenda/listar-agenda.component';
import { RegistrarAgendaAdminComponent } from './features/admin/registrar-agenda/registrar-agenda.component';
import { ListarTodaAgendasComponent } from './features/admin/listar-toda-agendas/listar-toda-agendas.component';

// IMPORT ROUTES ASESORES
import { RegistrarAgendaAsesorComponent } from './features/asesor/registrar-agenda-asesor/registrar-agenda-asesor.component';
import { ListarAgendaAsesorComponent } from './features/asesor/listar-agenda-asesor/listar-agenda-asesor.component';
import { FichasAsesorComponent } from './features/asesor/fichas-asesor/fichas-asesor.component';

// IMPORT ROUTES COORDINADORES
import { MiAgendaComponent } from './features/coordinador/mi-agenda/mi-agenda.component';


// IMPORT ROUTES SUPERVISOR
import { AgendasComponent } from './features/coordinador/registrar-agenda-coordinador/registrar-agenda-coordinador.component';
import { SubirAgendaComponent } from './features/supervisor/coordinador/subir-agenda/subir-agenda.component';
import { LegalesComponent } from './features/coordinador/legales/legales.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BaucherPipe } from './components/pipes/baucher.pipe';
import { RecorridoAgendaComponent } from './features/supervisor/coordinador/recorrido-agenda/recorrido-agenda.component';
import { EjecutivasComponent } from './features/supervisor/ejecutivas/ejecutivas/ejecutivas.component';
import { DepositosComponent } from './features/supervisor/ejecutivas/depositos/depositos.component';
import { BauchersComponent } from './features/supervisor/ejecutivas/bauchers/bauchers.component';
import { ReporteFichasComponent } from './features/supervisor/asesores/reporte-fichas/reporte-fichas.component';
import { ReporteAgendasComponent } from './features/supervisor/coordinador/reporte-agendas/reporte-agendas.component';
import { ProyeccionesComponent } from './features/supervisor/coordinador/proyecciones/proyecciones.component';
import { SeguimientoProyeccionesComponent } from './features/supervisor/asesores/seguimiento-proyecciones/seguimiento-proyecciones.component';
import { DirSegProyeccionComponent } from './features/supervisor/asesores/dir-seg-proyeccion/dir-seg-proyeccion.component';
import { CumplimientoAgendaComponent } from './features/supervisor/coordinador/cumplimiento-agenda/cumplimiento-agenda.component';


registerLocaleData(localeEs);

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    }
  }
});
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    LegalesComponent,
    FooterComponent,
    BaucherPipe,
    BauchersComponent,
    RecorridoAgendaComponent,
    EjecutivasComponent,
    DepositosComponent,
    ReporteFichasComponent,
    FechaFormatPipe,
    AgendasComponent,
    ReporteAgendasComponent,
    ProyeccionesComponent,
    SeguimientoProyeccionesComponent,
    DirSegProyeccionComponent,
    IniciarSesionComponent,
    CumplimientoAgendaComponent,
    SubirAgendaComponent,
    ActividadPipe,
    MiAgendaComponent,
    FichasAsesorComponent,
    RegistrarAgendaAsesorComponent,
    ListarAgendaAsesorComponent,
    TruncatePipe,
    Error404Component,
    ListarAgendaComponent,
    RegistrarAgendaAdminComponent,
    ListarTodaAgendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    TagModule,
    ToggleButtonModule,
    TableModule,
    FormsModule,
    NgOptimizedImage,
    DatePickerModule,
    ScrollingModule,
    ButtonModule,
    CommonModule,
    CardModule,
    CheckboxModule,
    SelectModule,
    InputTextModule,
    TextareaModule,
    ToggleSwitchModule,
    SelectButtonModule,
    MessageModule,
    DividerModule,
    ToastModule,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: 'false',
          cssLayer: false
        }
      }
    }),
    {
      provide: LOCALE_ID,
      useValue: 'es-MX'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }