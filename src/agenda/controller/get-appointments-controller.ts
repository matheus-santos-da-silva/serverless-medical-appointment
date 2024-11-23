import { APIGatewayProxyHandler } from "aws-lambda";
import { AgendaService } from "../service/agenda.service";

export const getAppointmentsController: APIGatewayProxyHandler = async (event) => {
  const appointmentsService = new AgendaService();
  const appointments = appointmentsService.getAppointments();

  return {
    statusCode: 200,
    body: JSON.stringify({
      appointments,
      input: event,
    }),
  };
};
