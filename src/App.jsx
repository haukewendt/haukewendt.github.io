import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import Button from "@mui/material/Button";
import { Container, Grid, Card, Typography, CardMedia, Box, ButtonGroup } from '@mui/material';
import { makeStyles } from '@mui/material';




// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

// const useStyles = makeStyles((theme)=>({container:{backgroundColor: theme.palette.background.paper}}))

const buttons = [
    <Button style={{padding:"20px 36px"}} key="one">Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum </Button>,
    <Button key="two">Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum </Button>,
    <Button key="three">Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</Button>,
  ];

const App = () => {
    // const classes = useStyles();
    return (
        // <div>
        //     <h1>Website incoming...</h1>
        // </div>

        

        
        <Container maxWidth="xl">

            

            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Button variant="contained" color="primary"> Website incoming</Button>
                </Grid>
                <Grid item xs={8}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Card variant="outlined">{
                                <Container maxWidth="fixed">

                                    <Button variant="contained" color="primary"> Website incoming</Button>
                                    <Typography variant="h1" component="h2">
                                    h1. Heading
                                    </Typography>
                                </Container>
                              
                            }</Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">{
                                <Container maxWidth="fixed">

                                    <Button variant="contained" color="primary"> Website incoming</Button>
                                    <Typography variant="h1" component="h2">
                                    h1. Heading
                                    </Typography>
                                </Container>
                              
                            }</Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">{
                                <Container maxWidth="fixed">

                                    <Button variant="contained" color="primary"> Website incoming</Button>
                                    <Typography variant="h1" component="h2">
                                    h1. Heading
                                    </Typography>
                                </Container>
                              
                            }</Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">{
                                <Container maxWidth="fixed">

                                    <Button variant="contained" color="primary"> Website incoming</Button>
                                    <Typography variant="h1" component="h2">
                                    h1. Heading
                                    </Typography>
                                    
                                </Container>
                              
                            }</Card>
                        </Grid>
                    </Grid>  
                </Grid>
            </Grid>
            
            {/* <div className={classes.container}> */}
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>


                <Box sx={{display: 'flex','& > *': {m: 1,},}}>
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical outlined button group"
>


                                {buttons}

                                <Card variant="outlined">{

                                // <Typography variant="h4" component="h2"> h1. Heading </Typography>
                                <Typography variant="h5"> 

                                    h1. Heading 
                                    
                                    <Typography variant="subtitle1"> h1. Heading </Typography>

                                </Typography>



                                }</Card>
                            </ButtonGroup>
                            
                    </Box>
                    
                   
                </Grid>

                <Grid item xs={8}>
                {/* sx={{ maxWidth: 345 }} */}
                    <Card>
                        <CardMedia
                            component="img"
                            height="400"
                            image="logo-hw.png"
                            alt="logo"
                        />
                    </Card>
                </Grid>
                
            </Grid>

            {/* </div> */}

        </Container>

        



                         
    );
}

export default App;


