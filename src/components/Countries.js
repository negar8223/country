import { useQuery } from "@apollo/client";
import { IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { COUNTRIESQUERY } from "../graphql/CountriesQuery";
import { useNavigate } from "react-router-dom";
import { TopBar } from './TopBar';
import LinearIndeterminate from './ProgressBar';


export default function Countries() {
    const navigate = useNavigate();
  const handleClickCountries=(code)=>{
    navigate ('/country/' + code)
  }
  const { data, loading } = useQuery(COUNTRIESQUERY);
  if (loading) return  <LinearIndeterminate/>;
  return (
    <>
    <TopBar/>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
        <h1 style={{textAlign:'center'}}>COUNTRIES</h1>
          <Paper elevation={3} sx={{marginTop:'30px' , marginBottom:'50px' , textAlign:'center'}}>
            <Grid item container>
              {data.countries.map((country) => {
                return (
                  <Grid key={country.code} item xs={2} justifyContent='center'>
                    
                    <IconButton color="primary" size="large" onClick={()=>handleClickCountries(country.code)} title={country.name}>
                    {country.emoji}
                    </IconButton>
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}
