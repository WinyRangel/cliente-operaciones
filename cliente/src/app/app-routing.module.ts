
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==========================================
// GUARDS
// ==========================================
import { AuthGuard } from './core/guards/auth.guard';

// ==========================================
// PUBLIC ROUTES
// ==========================================
import { InicioComponent } from './features/public/inicio/inicio.component';
import { IniciarSesionComponent } from './features/public/iniciar-sesion/iniciar-sesion.component';
import { Error404Component } from './features/public/error404/error404.component';

// ==========================================
// SHARED COMPONENTS
// ==========================================
import { BauchersComponent } from './features/supervisor/ejecutivas/bauchers/bauchers.component';
import { EjecutivasComponent } from './features/supervisor/ejecutivas/ejecutivas/ejecutivas.component';
import { DepositosComponent } from './features/supervisor/ejecutivas/depositos/depositos.component';
import { FichasAsesorComponent } from './features/asesor/fichas-asesor/fichas-asesor.component';
import { LegalesComponent } from './features/coordinador/legales/legales.component';
import { ProyeccionesComponent } from './features/supervisor/coordinador/proyecciones/proyecciones.component';
import { SeguimientoProyeccionesComponent } from './features/supervisor/asesores/seguimiento-proyecciones/seguimiento-proyecciones.component';
import { DirSegProyeccionComponent } from './features/supervisor/asesores/dir-seg-proyeccion/dir-seg-proyeccion.component';
import { CumplimientoAgendaComponent } from './features/supervisor/coordinador/cumplimiento-agenda/cumplimiento-agenda.component';

// ==========================================
// ADMIN ROUTES
// ==========================================
import { ListarAgendaComponent } from './features/admin/listar-agenda/listar-agenda.component';
import { RegistrarAgendaAdminComponent } from './features/admin/registrar-agenda/registrar-agenda.component';
import { ListarTodaAgendasComponent } from './features/admin/listar-toda-agendas/listar-toda-agendas.component';

// ==========================================
// ADVISOR ROUTES
// ==========================================
import { RegistrarAgendaAsesorComponent } from './features/asesor/registrar-agenda-asesor/registrar-agenda-asesor.component';
import { ListarAgendaAsesorComponent } from './features/asesor/listar-agenda-asesor/listar-agenda-asesor.component';

// ==========================================
// COORDINATOR ROUTES
// ==========================================
import { MiAgendaComponent } from './features/coordinador/mi-agenda/mi-agenda.component';
import { AgendasComponent } from './features/coordinador/registrar-agenda-coordinador/registrar-agenda-coordinador.component';

// ==========================================
// SUPERVISOR ROUTES
// ==========================================
import { RegistrarAgendaComponent } from './features/supervisor/coordinador/registrar-agenda/registrar-agenda.component';
import { RecorridoAgendaComponent } from './features/supervisor/coordinador/recorrido-agenda/recorrido-agenda.component';
import { ReporteFichasComponent } from './features/supervisor/asesores/reporte-fichas/reporte-fichas.component';
import { ReporteAgendasComponent } from './features/supervisor/coordinador/reporte-agendas/reporte-agendas.component';
import { SubirAgendaComponent } from './features/supervisor/coordinador/subir-agenda/subir-agenda.component';

// ==========================================
// ROUTE CONFIGURATION
// ==========================================
const routes: Routes = [

  // --------------------------------------
  // PUBLIC
  // --------------------------------------
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent
  },

  {
    path: 'error404',
    component: Error404Component
  },

  // --------------------------------------
  // GENERAL
  // --------------------------------------
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [
        'admin',
        'sup',
        'coordinador',
        'asesor',
        'mercadotecnia',
        'auditoria',
        'rh',
        'admin-audi'
      ]
    }
  },

  // --------------------------------------
  // ADMIN
  // --------------------------------------
  {
    path: 'listar-agenda',
    component: ListarAgendaComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'mercadotecnia', 'auditoria', 'rh']
    }
  },

  {
    path: 'listar-agendas-admin',
    redirectTo: 'listar-agenda',
    pathMatch: 'full'
  },

  {
    path: 'agendas-admin',
    component: RegistrarAgendaAdminComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup', 'mercadotecnia', 'auditoria', 'rh']
    }
  },

  {
    path: 'registrar-agenda-admin',
    redirectTo: 'agendas-admin',
    pathMatch: 'full'
  },

  {
    path: 'listar-todas-agendas',
    component: ListarTodaAgendasComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup', 'mercadotecnia', 'auditoria', 'rh', 'admin-audi']
    }
  },

  // --------------------------------------
  // ADVISOR
  // --------------------------------------
  {
    path: 'registrar-agenda-asesor',
    component: RegistrarAgendaAsesorComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['asesor']
    }
  },

  {
    path: 'seguimiento-agenda-asesor',
    component: ListarAgendaAsesorComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup', 'coordinador', 'asesor']
    }
  },

  {
    path: 'fichas-asesor',
    component: FichasAsesorComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup', 'asesor']
    }
  },

  // --------------------------------------
  // COORDINATOR
  // --------------------------------------
  {
    path: 'mi-agenda',
    component: MiAgendaComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['coordinador']
    }
  },

  {
    path: 'registrar-agendas',
    component: AgendasComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['coordinador']
    }
  },

  // --------------------------------------
  // SUPERVISOR
  // --------------------------------------
  {
    path: 'registrar-agenda-supervisor',
    component: RegistrarAgendaComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'recorrido-agenda',
    component: RecorridoAgendaComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'subir-agendas',
    component: SubirAgendaComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'reporte-agendas',
    component: ReporteAgendasComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'reportefichas',
    component: ReporteFichasComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  // --------------------------------------
  // SHARED / SUPERVISION
  // --------------------------------------
  {
    path: 'baucher',
    component: BauchersComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'legales',
    component: LegalesComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'ejecutivas',
    component: EjecutivasComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'depositos',
    component: DepositosComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'proyecciones',
    component: ProyeccionesComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'seg-proyecciones',
    component: SeguimientoProyeccionesComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  {
    path: 'dir-seg-proyeccion',
    component: DirSegProyeccionComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin']
    }
  },

  {
    path: 'cumplimiento-agenda',
    component: CumplimientoAgendaComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'sup']
    }
  },

  // --------------------------------------
  // FALLBACK
  // --------------------------------------
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'error404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
