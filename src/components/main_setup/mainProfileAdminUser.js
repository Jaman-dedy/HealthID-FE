import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// MATERIAL UI COMPONENTS
import {
  Grid,
  Paper,
  Button,
  Typography,
  TextField,
} from '@material-ui/core';

// IMAGES AND ICONS
import ArrowBack from '@material-ui/icons/ArrowBack';
import Avatar from '../../assets/images/settingsAvatar.png';

// SHARED COMPONENTS
import Dashboard from '../shared/Dashboard/Dashboard';
import { MainProfileStyles as styles, SetupHeader } from '../../assets/styles/setup';

const MainSetup = ({ session }) => {
  const { me: data } = session;
  return (
    <Fragment>
      <Dashboard isActive="grid9" session={session} />
      <Grid container style={styles.container}>
        <Grid item xs={1} style={SetupHeader.backBox}>
          <Button style={SetupHeader.backButton}>
            <Link to="/main_setup" style={SetupHeader.link}>
              <ArrowBack fontSize="large" />
            </Link>
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Grid style={styles.profileHeader}>
            <Typography variant="h5">
              Admin Profile
            </Typography>
          </Grid>
          <Paper style={styles.paper}>
            <Grid item style={styles.profileBox}>
              <Grid item xs={4} style={styles.formRow}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={data && data.firstName ? data.firstName : 'Not Available'}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Username"
                  value={data && data.username ? data.username : 'Not Available'}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  value={data && data.email ? data.email : 'Not Available'}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Phone #"
                  value={data && data.phone ? data.phone : 'Not Available'}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={4} style={styles.formRow}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={data && data.lastName ? data.lastName : 'Not Available'}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Role"
                  value={data && data.role.name ? data.role.name : 'Not Available'}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Secondary Email"
                  value={data && data.secondaryEmail ? data.secondaryEmail : 'Not Available'}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Secondary Phone #"
                  value={data && data.secondaryPhone ? data.secondaryPhone : 'Not Available'}
                  margin="normal"
                  style={styles.textField}
                  InputProps={{ disableUnderline: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={4} style={styles.avatarIconBox}>
                <img src={Avatar} alt="User" style={styles.avatarIcon} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

MainSetup.propTypes = {
  session: PropTypes.shape({
    me: PropTypes.shape({
      outlets: PropTypes.array
    })
  }).isRequired,
};

export default MainSetup;
