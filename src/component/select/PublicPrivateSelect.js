import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PublicPrivateSelect({ handleChange }) {
  // const [selectOne, setSelectOne] = React.useState("");

  // const handleChange = (event) => {
  //   setSelectOne(event.target.value);
  // };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // defaultValue={"public"}
          name="privacy"
          defaultValue={"public"}
          onChange={handleChange}
          label="Age"
        >
          {/* <MenuItem disabled>Select Privacy</MenuItem> */}
          <MenuItem value={"public"}>Public</MenuItem>
          <MenuItem value={"private"}>Private</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
