import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyTemplateOptions } from '@ngx-formly/core/lib/components/formly.field.config';

export class Field {
  public static field(
    type: string,
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any
  ): FormlyFieldConfig {
    return {
      type,
      key,
      templateOptions,
      ...options
    };
  }

  public static input(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return this.field('input', key, templateOptions, options);
  }

  public static email(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    const defaults = {
      type: 'email',
      label: 'Email'
    };

    return this.input(key, { ...templateOptions, ...defaults }, options);
  }
}
