import { Option } from "components/SelectComponent/types";
import { PropertyOption } from "shared/constants";
import { SEARCH } from "uicontainers/SearchInputContainer/types";

export interface Inputs {
    [SEARCH.TEXT]: string;
    [SEARCH.OPTION]: PropertyOption;
  }

  export type InputTypes =
  | SEARCH.TEXT
  | SEARCH.OPTION;

export interface InputChangeAction {
  key: SEARCH.TEXT;
  value: string;
}

export interface OptionChangeAction {
  key: SEARCH.OPTION;
  value: PropertyOption;
}
