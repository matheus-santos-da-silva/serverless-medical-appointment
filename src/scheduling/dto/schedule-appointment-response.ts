import { Appointment } from "../domain/appointments";

export interface ScheduleAppointmentResponse {
  mensagem: string;
  agendamento: Appointment;
}
