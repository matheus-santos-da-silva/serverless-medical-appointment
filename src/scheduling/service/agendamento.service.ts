import { ScheduleAppointmentDTO } from "../dto/schedule-appointment-dto";
import { ScheduleAppointmentResponse } from "../dto/schedule-appointment-response";
import { SchedulingServiceInterface } from "../interface/scheduling-service-interface";

export class SchedulingService implements SchedulingServiceInterface {
  scheduleAppointment({
    name,
    doctorName,
    date,
  }: ScheduleAppointmentDTO): ScheduleAppointmentResponse {
    return {
      mensagem: "Agendamento realizado com sucesso",
      agendamento: {
        medico: doctorName,
        paciente: name,
        data_horario: date,
      },
    };
  }
}
