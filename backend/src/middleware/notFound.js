import { HttpError } from "../lib/errors.js";

export function notFound(req, _res, next) {
  next(new HttpError(404, `No route for ${req.method} ${req.path}`, "not_found"));
}
