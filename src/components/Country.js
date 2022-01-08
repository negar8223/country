import { useQuery } from "@apollo/client";
import { TopBar } from "./TopBar";
import { COUNTRYQUERY } from "../graphql/CountryQuery";
import { Grid, Paper, Typography } from "@mui/material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useParams } from "react-router-dom";
import LinearIndeterminate from './ProgressBar';

export function Country() {
  const {code}=useParams()
  const { data, loading } = useQuery(COUNTRYQUERY , {variables:{code}});
  if (loading) return <LinearIndeterminate/>;
  return (
    <>
      <TopBar />
      <Grid container>
        <Grid item xs={2} md={3}></Grid>
        <Grid item xs={8} md={6}>
          <Paper sx={{ marginTop: "60px" , paddingBottom:'20px'}}>
            <Grid item container>
              <Grid item md={1}></Grid>
              <Grid item xs={12} md={5} sx={{textAlign:'center'}}>
              <Typography
                  sx={{ mb: 1.5 ,marginTop: "40px"}}
                >
                  Emoji: {data.country.emoji}
                </Typography>
                <Typography
                   sx={{ mb: 1.5 ,marginTop: "40px"}}
                  color="text.secondary"
                >
                  Name: {data.country.name}
                </Typography>
                <Typography
                   sx={{ mb: 1.5 ,marginTop: "40px"}}
                >
                  Capital: {data.country.capital}
                </Typography>
               
                <Typography
                   sx={{ mb: 1.5 ,marginTop: "40px"}}
                  color="text.secondary"
                >
                  Phone: {data.country.phone}  <PhoneIphoneIcon className="phoneColor"/>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} sx={{textAlign:'center'}}>
               <Typography
                  sx={{ mb: 1.5 ,marginTop: "40px"}}
                  color="text.secondary"
                >
                  Language Name: {data.country.languages[0].name}
                </Typography> 
                <Typography
                  sx={{ mb: 1.5 ,marginTop: "40px"}}
                >
                  Language Native: {data.country.languages[0].native}
                </Typography> 
                <Typography
                   sx={{ mb: 1.5 ,marginTop: "40px"}}
                  color="text.secondary"
                >
                  Currency: {data.country.currency}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 ,marginTop: "40px"}}
                >
                  Native: {data.country.native}
                </Typography>
               
              </Grid>
              <Grid item md={1}></Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2} md={3}></Grid>
      </Grid>
    </>
  );
}
