import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button'

class Fosterform extends Component {
    //  state = {
        
    // };
    // handleInputChange = event => {
    //         const { name, value } = event.target;

    //         this.setState({
    //           [name]: value
    //         });
    //       };
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     Api.saveCat({
            
    //     })
    // }
  render () {
    return (
      <React.Fragment>

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
          <Grid item xs={6}>
            <TextField
                            // value={this.state.description}
                            // onChange={this.handleInputChange}
              id='Description '
              name='description '
              label='Write Description  '
              fullWidth
              autoComplete='Write Description'
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

          <Button variant='contained' color='primary' onClick={this.handleFormSubmit}>
                        Submit{' '}
          </Button>
        </Grid>
      </React.Fragment>
    )
  }
}
export default Fosterform
