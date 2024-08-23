export async function handleNotFound(string: string) {
  return new Response(JSON.stringify(`${string} not found`), {
    status: 404,
  });
}

export class HttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message); // Call the parent constructor with the message
    this.status = status;
    this.name = this.constructor.name; // Set the name of the error to the class name
    Error.captureStackTrace(this, this.constructor); // Capture the stack trace
  }
}
