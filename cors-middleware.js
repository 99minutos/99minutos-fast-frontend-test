import corsWrapper from "cors";

const CORS_OPTIONS = {
  methods: ["GET", "OPTIONS"],
};

function promisifyMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const cors = promisifyMiddleware(corsWrapper(CORS_OPTIONS));

export default cors;
