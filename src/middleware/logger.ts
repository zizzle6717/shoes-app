import Elasticsearch from 'winston-elasticsearch';
import expressWinston from 'express-winston';
import winston from 'winston';
import { Client } from '@elastic/elasticsearch';

const config = {
  transports: [],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
  ),
  level: process.env.LOGGING_LEVEL,
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,
  ignoreRoute: (req, res) => false, // optional: allows to skip some log messages based on request and/or response
};

if (process.env.LOGGING_HOST) {
  if (process.env.LOGGING_HOST === 'console' && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
    const date = new Date().toISOString();
    const logFormat = winston.format.printf((info) => `${date}-${info.level}: ${JSON.stringify(info.message, null, 4)}\n ${JSON.stringify(info)}`);
    (config.transports as any[]).push(new winston.transports.Console({
      level: process.env.LOGGING_LEVEL,
      format: winston.format.combine(winston.format.colorize(), logFormat),
    }));
  } else {
    const elsearchClient = new Client({
      node: process.env.LOGGING_HOST,
      maxRetries: 5,
      requestTimeout: 60000,
      sniffOnStart: true,
    });

    const elsearchOptions = {
      level: process.env.LOGGING_LEVEL,
      client: elsearchClient,
    };
    (config.transports as any[]).push(new Elasticsearch(elsearchOptions));
  }
}

export default process.env.LOGGING_HOST
  ? expressWinston.logger(config)
  : (req, res, next) => next();
