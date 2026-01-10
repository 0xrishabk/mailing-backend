// Default imports
import express from 'express';
import dotenv from 'dotenv';

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
import userRoutes from './router/userRouter';
import mailRoutes from './router/mailingRouter';
import contactRoutes from './router/contactRouter';
import batchRoutes from './router/batchRouter';
import facultyRoutes from './router/facultyRouter';

// Error handler
import { errorHandler } from './middleware/errorHandler';

// Authentication Middleware
import { authenticateJwt, hasPermission } from './middleware/authHandler';

// Permission UTIL
import { Permission } from './util/permission';

app.use("/api/users", userRoutes);
app.use("/api/batch", authenticateJwt, hasPermission([Permission.Admin, Permission.Management]), batchRoutes);
app.use("/api/contact", authenticateJwt, hasPermission([Permission.Management]), contactRoutes);
app.use("/api/faculty", authenticateJwt, hasPermission([Permission.Admin, Permission.Management]), facultyRoutes);
app.use("/api/mail", authenticateJwt, hasPermission([Permission.Mail]), mailRoutes);

import swaggerUi from "swagger-ui-express";
import swaggerSpec from './swagger';
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

console.log(`====== LISTENING TO SERVER ======`);
console.log(`http://127.0.0.1:3000`);

app.listen(3000, "127.0.0.1");
