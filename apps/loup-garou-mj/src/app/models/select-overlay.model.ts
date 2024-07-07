export type SelectOverlay = {
  header: string;
  options: {
    value: string;
    label: string;
    active?: boolean;
  }[];
};
