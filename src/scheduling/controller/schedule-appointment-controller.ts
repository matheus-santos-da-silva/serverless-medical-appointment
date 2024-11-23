import { APIGatewayProxyHandler } from "aws-lambda";
import { SchedulingService } from "../service/agendamento.service";
import { validateData } from "../../utils/schedule-appointment-validate-data";

export const ScheduleAppointmentsController: APIGatewayProxyHandler = async (event) => {
  const requestBody = event.body ? JSON.parse(event.body) : null;
  if (!requestBody) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Uncompleted Body" }),
    };
  }
  validateData(requestBody);
  const { name, date, doctorName } = requestBody as {
    name: string;
    doctorName: string;
    date: string;
  };

  const scheduleAppointmentService = new SchedulingService();
  const appointment = scheduleAppointmentService.scheduleAppointment({
    name,
    doctorName,
    date,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      appointment,
      input: event,
    }),
  };
};
