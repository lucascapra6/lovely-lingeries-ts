import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { AutocompleteProps } from "@mui/material/Autocomplete";
import React from "react";
interface IDefaultAutoCompleteProps
  extends AutocompleteProps<any, any, any, any> {}

const DefaultAutoComplete = ({
  options,
  renderInput,
  ...defaultProps
}: IDefaultAutoCompleteProps) => {
  return (
    <Autocomplete
      renderInput={renderInput}
      options={options}
      {...defaultProps}
    />
  );
};
export default DefaultAutoComplete;
