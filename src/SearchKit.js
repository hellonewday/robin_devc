import { TextField, Button } from "@material-ui/core";
import React from "react";

export function SearchKit() {
  return (
    <div style={{ padding: 40, position: "relative" }}>
      <TextField label="Tìm kiếm" variant="outlined" fullWidth />
      <Button
        color="secondary"
        variant="outlined"
        style={{ position: "absolute", right: 50, bottom: 50 }}
      >
        Tìm kiếm
      </Button>
    </div>
  );
}
