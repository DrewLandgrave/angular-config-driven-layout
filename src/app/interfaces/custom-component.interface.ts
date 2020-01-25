export interface CustomComponent {
    label: string;

    createChild?(config: any);
}
