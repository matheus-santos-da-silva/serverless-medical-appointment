import { Appointments } from "../domain/appointments";

export interface AgendaServiceInterface {
  getAppointments(): Appointments;
}
