import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Vender_Select ({ handleChange,option_First }) {
  // const [selectOne, setSelectOne] = React.useState("");

  // const handleChange = (event) => {
  //   setSelectOne(event.target.value);
  // };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: '97%' }}>
        {/* <InputLabel id="demo-simple-select-standard-label">Select</InputLabel> */}
        <Select
        fullWidth={true}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // defaultValue={"public"}
          name="privacy"
          defaultValue={"public"}
          onChange={handleChange}
        
        >
          {/* <MenuItem disabled>Select Privacy</MenuItem> */}
          <MenuItem value={"public"}>{option_First}</MenuItem>
          <MenuItem value={"private"}>Private</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
