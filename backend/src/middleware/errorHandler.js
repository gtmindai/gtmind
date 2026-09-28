import { z } from "zod";
import { HttpError } from "../lib/errors.js";

// Express needs all four arguments to treat this as an error handler.
export function errorHandler(err, req, res, _next) {
  if (err instanceof z.ZodError) {
    return res.status(400).json({ error: { code: "invalid_request", message: "Invalid request", issues: err.issues } });
  }

  const status = err instanceof HttpError ? err.status : 500;
  if (status >= 500) req.log.error({ err }, "request failed");

  res.status(status).json({
    error: {
      code: err.code ?? "internal_error",
      message: status >= 500 ? "Something went wrong" : err.message,
    },
  });
}
