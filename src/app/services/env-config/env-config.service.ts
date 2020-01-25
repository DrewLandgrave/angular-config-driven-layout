import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnvConfigService {

  private config: any = {
    mainColumn:
      [
        {
          tag: 'advtech-panel',
          label: 'Main Details',
          children: [
            {
              tag: 'advtech-text-input',
              label: 'Headline'
            },
            {
              tag: 'advtech-textarea-input',
              label: 'Dek'
            }
          ]
        },
        {
          tag: 'advtech-panel',
          label: 'SEO',
          children: [
            {
              tag: 'advtech-text-input',
              label: 'SEO Headline'
            },
            {
              tag: 'advtech-textarea-input',
              label: 'SEO Description'
            },
            {
              tag: 'advtech-text-input',
              label: 'SEO Keywords'
            },
            {
              tag: 'advtech-textarea-input',
              label: 'Twitter Description'
            }

          ]
        }
      ]
  };

  constructor(private httpClient: HttpClient) { }

  getConfig() {
    return this.config;
  }

  setConfig(config: any) {
    this.config = config;
  }
}
