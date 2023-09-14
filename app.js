import compression from 'compression';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.disable('x-powered-by');

const corsOptions = {
  origin: '*', // Origen permitido
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
  optionsSuccessStatus: 204, // Código de respuesta para las solicitudes OPTIONS exitosas
  preflightContinue: false, // Deshabilita el manejo manual de las solicitudes preflight
  allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
};

// Middlewares
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(express.static('public'));
app.use('/test', (req, res) => {
 res.send('Hola mundo');
});
// Wrong route
app.use((req, res) => {
  res.status(404).json({ message: 'URL not found' });
});


export default app;
