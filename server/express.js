import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/config.js'; // 引入配置
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import path from 'path';

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

// 配置静态文件目录
app.use(express.static(path.join(CURRENT_WORKING_DIR, 'dist/app')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/', productRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// 错误处理中间件
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "error": err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ "error": err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
