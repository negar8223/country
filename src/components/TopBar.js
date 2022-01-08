import {
  AppBar,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import CottageIcon from "@mui/icons-material/Cottage";

export function TopBar() {
  const navigate = useNavigate();
  const handleClickCapsules = () => {
    navigate("/capsules");
  };
  const handleClickHome = () => {
    navigate("/");
  };
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'rgb(49, 138, 133)'}}>
        <Grid container>
          <Grid item xs={3}>
            <IconButton
              sx={{ backgroundColor: "rgb(217, 233, 232)", color: "black", margin: "5px" }}
              id="buttonHover"
              onClick={handleClickHome}
            >
              <CottageIcon />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </Stack>
  );
}
