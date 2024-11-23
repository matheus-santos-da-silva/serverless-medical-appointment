import { Appointments } from "../domain/appointments";
import { AgendaServiceInterface } from "../interface/agenda-service-interface";
import { appointments } from "../mocks/appointments-mock";

export class AgendaService implements AgendaServiceInterface {
  getAppointments(): Appointments {
    return appointments;
  }
}
