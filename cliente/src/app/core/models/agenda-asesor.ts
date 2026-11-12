import { Actividad } from "../../features/asesor/registrar-agenda-asesor/registrar-agenda-asesor.component";

export interface AgendaAsesor {
    asesor: string;
    coordinacion: string;
    semana: string;
    fecha: string;
    objetivo: string;
    firma: string;
    actividades: Actividad[];
    // Campos adicionales según modelo
    meta?: string;
    resultado?: string;
    validada?: boolean;
    validadaPor?: string;
    evidencia?: string;
    coordinadorNombre?: string; // Para tu payload
}