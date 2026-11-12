import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: false,
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  usuario = '';
  contrasenia = '';
  error = '';
  mostrarContrasenia: boolean = false;

  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.loading = true;
    this.error = '';
    this.authService.login(this.usuario, this.contrasenia).subscribe({
      next: res => {
        this.loading = false;
        const rol = (res.rol || '').toLowerCase();
        if (rol === 'admin-audi') {
          this.router.navigate(['/listar-todas-agendas']);
        } else {
          this.router.navigate(['/inicio']);
        }
      },
      error: err => {
        this.loading = false;
        this.error = err.error.mensaje || 'Error de autenticación';
      }
    });
  }
}
