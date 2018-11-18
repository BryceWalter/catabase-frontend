import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import classNames from 'classnames';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class ShelterForm extends Component {
     state = {
         name:"",
         address:"",
         phoneNumber:"",
         email:"",
         shelterContact:"",
        
    };
    handleInputChange = event => {
            const { name, value } = event.target;

            this.setState({
              [name]: value
            });
          };
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     Api.saveCat({
            
    //     })
    // }
  render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {/* <CssBaseline />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                <CameraIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    Toronto Cat Rescue
                </Typography>
                </Toolbar>
            </AppBar> */}

        <Grid container spacing={24}>

          <Grid item xs={6} sm={6}>
            <TextField
              required
                            // value={this.state.age}
                            // onChange={this.handleInputChange}
              id='name'
              name='name'
              label='name'
              fullWidth
              autoComplete='name'
                        />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
                            // value={this.state.sex}
                            // onChange={this.handleInputChange}
              id='address'
              name='address'
              label='address'
              fullWidth
              autoComplete='address'
                        />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
                            // value={this.state.serialNumber}
                            // onChange={this.handleInputChange}
              id='phoneNumber'
              name='phoneNumber'
              label='phoneNumber'
              fullWidth
              autoComplete='phoneNumber'
                        />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                            // value={this.state.shelterTableID}
                            // onChange={this.handleInputChange}
              id='email'
              name='email'
              label='email'
              fullWidth
                        />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
                            // value={this.state.serialNumber}
                            // onChange={this.handleInputChange}
              id='shelterContact'
              name='shelterContact'
              label='shelterContact'
              fullWidth
              autoComplete='shelterContact'
                        />
          </Grid>

          <Button 
                variant='contained' 
                color='primary' 
                onClick={this.handleFormSubmit}>Submit{' '}
          </Button>
        </Grid>

        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            Toronto Cat Rescue
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Copyright 2018 by DreamTeam
            </Typography>
       </footer>

      </React.Fragment>
    )
  }
}
export default ShelterForm;
