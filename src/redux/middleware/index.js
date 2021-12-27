import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const rootMiddleware = (() => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }
  return middleware;
})();

export default rootMiddleware;
