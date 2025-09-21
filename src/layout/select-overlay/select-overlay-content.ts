export type SelectOverlayContent = {
  header: string;
  options: {
    value: string;
    label: string;
    active?: boolean;
  }[];
};
