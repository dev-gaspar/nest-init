import { INestApplication } from '@nestjs/common';
import * as express from 'express';

export interface StoplightElementsOptions {
  title?: string;
  layout?: 'sidebar' | 'stacked';
  router?: 'hash' | 'history' | 'memory' | 'static';
  hideInternal?: boolean;
  hideTryIt?: boolean;
  tryItCorsProxy?: string;
  logo?: string;
  theme?: any;
}

export class StoplightElements {
  private readonly document: any;
  private readonly app: INestApplication;
  private readonly options: StoplightElementsOptions;

  constructor(
    app: INestApplication,
    document: any,
    options: StoplightElementsOptions = {},
  ) {
    this.app = app;
    this.document = document;
    this.options = options;
  }

  public async setup(path: string, jsonPath: string): Promise<void> {
    this.app.use(jsonPath, (req: express.Request, res: express.Response) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(this.document);
    });

    // Configurar la ruta para servir la página HTML de Stoplight Elements
    this.app.use(path, (req: express.Request, res: express.Response) => {
      res.setHeader('Content-Type', 'text/html');
      res.send(this.generateHTML(jsonPath));
    });
  }

  private generateHTML(jsonPath: string): string {
    const title =
      this.options.title || this.document.info?.title || 'API Documentation';
    const layout = this.options.layout || 'sidebar';
    const router = this.options.router || 'history';
    const hideInternal = this.options.hideInternal || false;
    const hideTryIt = this.options.hideTryIt || false;
    const logo = this.options.logo || '';
    const tryItCorsProxy = this.options.tryItCorsProxy || '';
    const themeConfig = this.options.theme
      ? `<script>
          window.stoplightElementsConfig = {
            theme: ${JSON.stringify(this.options.theme)}
          };
        </script>`
      : '';

    return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>${title}</title>
          <link rel="stylesheet" href="https://unpkg.com/@stoplight/elements/styles.min.css">
          <style>
            body {
              margin: 0;
              padding: 0;
            }
            .elements-container {
              height: 100vh;
            }
          </style>
          ${themeConfig}
        </head>
        <body>
          <div class="elements-container">
            <elements-api
              apiDescriptionUrl="${jsonPath}"
              router="${router}"
              layout="${layout}"
              ${hideInternal ? 'hideInternal="true"' : ''}
              ${hideTryIt ? 'hideTryIt="true"' : ''}
              ${tryItCorsProxy ? `tryItCorsProxy="${tryItCorsProxy}"` : ''}
              ${logo ? `logo="${logo}"` : ''}
            />
          </div>
          <script src="https://unpkg.com/@stoplight/elements/web-components.min.js"></script>
        </body>
      </html>
    `;
  }
}
