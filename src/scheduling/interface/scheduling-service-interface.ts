import { ScheduleAppointmentDTO } from "../dto/schedule-appointment-dto";
import { ScheduleAppointmentResponse } from "../dto/schedule-appointment-response";

export interface SchedulingServiceInterface {
  scheduleAppointment(data: ScheduleAppointmentDTO): ScheduleAppointmentResponse;
}
