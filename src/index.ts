import fs from 'fs';
import https from 'https';
import app from './app';

let devServer;

if (!process.env.PORT) {
  console.log('Missing ENV varaibles...Exiting!');
  process.exit(1);
}

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

// Run npm start <custom-port>
const PORT: number = (process.env.NODE_ENV === 'development' && parseInt(process.argv[2], 10))
  || parseInt(process.env.PORT, 10);

// Start server
if (process.env.NODE_ENV !== 'development') {
  const options = {
    key: fs.readFileSync(process.env.CERT_KEY || ''),
    cert: fs.readFileSync(process.env.CERT_FILE || ''),
  };

  https.createServer(options, app).listen(PORT);
} else {
  devServer = app.listen(process.env.PORT, () => {
    console.info(`server started on ${PORT}`);
  });
}

// Hot Module Reloading
type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (devServer && module.hot) {
  module.hot.accept();
  module.hot.dispose(() => devServer.close());
}
