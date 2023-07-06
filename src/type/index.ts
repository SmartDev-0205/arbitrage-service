export interface NavBarTypeInterface {
  label: string;
  router: string;
  active: boolean;
}
/* table header type */
export interface THTypeInterface {
  key: string;
  value: string;
  type?: string;
  minWidth?: string;
  width?: string;
  align?: string;
  style?: string;
}
/* table style type */
export interface TStyleInterface {
  tableMaxHeight: string;
}
/* table pagination display count type */
export interface TPaginationInterface {
  name: string;
  key: number;
}
/* dropdown data types */
export interface DropDownInterface {
  name: string;
  key: string;
}
