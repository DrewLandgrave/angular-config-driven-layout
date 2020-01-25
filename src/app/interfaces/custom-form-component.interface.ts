import { CustomComponent } from './custom-component.interface';

export interface CustomFormComponent extends CustomComponent {
    value: string;
    getValue();
    setValue(value: any);
}
