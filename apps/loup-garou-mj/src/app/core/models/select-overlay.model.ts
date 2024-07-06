export interface SelectOverlay {
  header: string;
  options: {
    value: string;
    label: string;
    active?: boolean;
  }[];
}
