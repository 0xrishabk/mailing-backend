// Default imports
import express from 'express';
import dotenv from 'dotenv';

// Load all the environment variables.
dotenv.config();

// Initialize express.
const app = express();

// Support for json.
app.use(express.json());

// Changed to Default x-powered-by header
app.use((_req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.setHeader('X-Powered-By', 'Mailing-App');
  next();
});

// Router import
import userRoutes from './router/userRouter.js';
import mailRoutes from './router/mailingRouter.js';
import contactRoutes from './router/contactRouter.js';
import batchRoutes from './router/batchRouter.js';
import facultyRoutes from './router/facultyRouter.js';

// Error handler
import { errorHandler } from './middleware/errorHandler.js';

// Authentication Middleware
import { authenticateJwt, hasPermission } from './middleware/authHandler.js';

// Permission UTIL
import { Permission } from './util/permission.js';

app.use("/api/user", userRoutes);
app.use("/api/batch", authenticateJwt, hasPermission([Permission.Admin, Permission.Management]), batchRoutes);
app.use("/api/contact", authenticateJwt, hasPermission([Permission.Management]), contactRoutes);
app.use("/api/faculty", authenticateJwt, hasPermission([Permission.Admin, Permission.Management]), facultyRoutes);
app.use("/api/mail", authenticateJwt, hasPermission([Permission.Mail]), mailRoutes);

app.use(errorHandler);

console.log(`====== LISTENING TO SERVER ======`);
console.log(`http://127.0.0.1:3000`);

app.listen(3000, "127.0.0.1");
