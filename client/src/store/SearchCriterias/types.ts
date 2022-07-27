import { SEARCH } from "uicontainers/SearchInputContainer/types";

export interface Inputs {
    [SEARCH.TEXT]: string;
    [SEARCH.REGION]: string;
    [SEARCH.URL]: string;
  }

  export type InputTypes =
  | SEARCH.TEXT
  | SEARCH.REGION
  | SEARCH.URL;

export interface InputChangeAction {
  key: InputTypes;
  value: string;
}
