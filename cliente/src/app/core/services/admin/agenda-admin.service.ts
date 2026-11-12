import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coordinacion } from '../../models/coordinacion';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Agenda, Domicilio } from '../../models/agenda';
import { ActividadPayload } from '../coordinador/coordinacion.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaAdminService {
  private baseUrl = (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
    ? 'http://localhost:4000'
    : 'https://servidor-operaciones.onrender.com';

  private cachedAllAgendas: any = null;
  private cachedAllAgendasTime = 0;
  private readonly CACHE_DURATION_MS = 90 * 1000; // 90 segundos de caché reactivo

  constructor(private http: HttpClient) { }

  limpiarCacheAllAgendas(): void {
    this.cachedAllAgendas = null;
    this.cachedAllAgendasTime = 0;
  }

  obtenerCoordinacion(): Observable<Coordinacion[]> {
    return this.http.get<Coordinacion[]>(`${this.baseUrl}/coordinacion`);
  }

  registrarAgenda(ragenda: any): Observable<any> {
    this.limpiarCacheAllAgendas();
    return this.http.post(`${this.baseUrl}/agenda-admin/`, ragenda);
  }

  obtenerAgendasAdmin(filtros: any = {}): Observable<any> {
    let params = new HttpParams();
    if (filtros.usuario) params = params.set('usuario', filtros.usuario);
    if (filtros.rol) params = params.set('rol', filtros.rol);
    if (filtros.semana) params = params.set('semana', filtros.semana);
    if (filtros.fecha) params = params.set('fecha', filtros.fecha);
    return this.http.get<any>(`${this.baseUrl}/agenda-admin/`, { params });
  }

  obtenerAllAgendas(filtros: any = {}, forzarRecarga: boolean = false): Observable<any> {
    const sinFiltros = !filtros || Object.keys(filtros).length === 0;
    const ahora = Date.now();

    if (sinFiltros && !forzarRecarga && this.cachedAllAgendas && (ahora - this.cachedAllAgendasTime < this.CACHE_DURATION_MS)) {
      return of(this.cachedAllAgendas);
    }

    let params = new HttpParams();
    if (filtros.usuario) params = params.set('usuario', filtros.usuario);
    if (filtros.rol) params = params.set('rol', filtros.rol);
    if (filtros.semana) params = params.set('semana', filtros.semana);
    if (filtros.fecha) params = params.set('fecha', filtros.fecha);
    if (filtros.fechaInicio) params = params.set('fechaInicio', filtros.fechaInicio);
    if (filtros.fechaFin) params = params.set('fechaFin', filtros.fechaFin);

    return this.http.get<any>(`${this.baseUrl}/agenda-admin/all`, { params }).pipe(
      tap(res => {
        if (sinFiltros && res && res.success) {
          this.cachedAllAgendas = res;
          this.cachedAllAgendasTime = Date.now();
        }
      })
    );
  }

  eliminarAgendaAdmin(id: string): Observable<any> {
    this.limpiarCacheAllAgendas();
    return this.http.delete<any>(`${this.baseUrl}/agenda-admin/${id}`);
  }

  enviarResumenAgenda(fechaInicio?: string, fechaFin?: string, rol?: string, usuario?: string): Observable<any> {
    const body: any = {};
    if (fechaInicio) body['fechaInicio'] = fechaInicio;
    if (fechaFin) body['fechaFin'] = fechaFin;
    if (rol) body['rol'] = rol;
    if (usuario) body['usuario'] = usuario;
    return this.http.post<any>(`${this.baseUrl}/agenda-admin/enviar-resumen`, body);
  }

  actualizarAgendaAdmin(id: string, datos: any): Observable<any> {
    this.limpiarCacheAllAgendas();
    return this.http.put<any>(`${this.baseUrl}/agenda-admin/${id}`, datos);
  }

  obtenerAgendas1(filtros: any = {}): Observable<any> {
    let params = new HttpParams();

    // Default high limit if not doing true pagination
    params = params.set('page', (filtros.page || 1).toString());
    params = params.set('limit', (filtros.limit || 5000).toString());

    if (filtros.coordinador) params = params.set('coordinador', filtros.coordinador);
    if (filtros.mes) params = params.set('mes', filtros.mes);
    if (filtros.semana) params = params.set('semana', filtros.semana);
    if (filtros.dia) params = params.set('dia', filtros.dia);
    if (filtros.codigo) params = params.set('codigo', filtros.codigo);
    if (filtros.codigoReportado) params = params.set('codigoReportado', filtros.codigoReportado);
    if (filtros.estado) params = params.set('estado', filtros.estado);
    if (filtros.fechaInicio) params = params.set('fechaInicio', filtros.fechaInicio);
    if (filtros.fechaFin) params = params.set('fechaFin', filtros.fechaFin);

    return this.http.get(`${this.baseUrl}/agendas`, { params });
  }

  obtenerAgendas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/agenda`);
  }

  getDomicilios(): Observable<Domicilio[]> {
    return this.http.get<Domicilio[]>(`${this.baseUrl}/domicilios`);
  }

  obtenerAgenda(coordinador: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/agenda/${coordinador}`);
  }

  actualizarAgenda(id: string, datos: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/agenda/${id}`, datos);
  }

  eliminarAgenda(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/agenda/${id}`);
  }

  obtenerMiAgenda(page: number = 1, limit: number = 50): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get(`${this.baseUrl}/agendas`, { params });
  }

  // Módulo Asesor
  guardarAgendaAsesor(actividad: ActividadPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/agenda-asesor/`, actividad);
  }

  // Obtener lista de asesores para coordinadores
  obtenerAsesoresPorCoordinacion() {
    const token = localStorage.getItem('token');

    return this.http.get<any>(`${this.baseUrl}/agenda-asesor/asesores`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Obtener agendas según el rol del usuario
  obtenerAgendasAsesor() {
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.baseUrl}/agenda-asesor/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  actualizarAgendaAsesor(id: string, datos: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/agenda-asesor/${id}`, datos);
  }

  eliminarAgendaAsesor(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/agenda-asesor/${id}`);
  }

  validarAgendaAsesor(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/agenda-asesor/${id}/validar`, {});
  }

  rechazarAgendaAsesor(id: string, motivoRechazo: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/agenda-asesor/${id}/rechazar`, { motivoRechazo });
  }
}
