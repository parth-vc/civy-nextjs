import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Address from "./address";
import { useDispatch } from "react-redux";
import { GetUserFeedback } from "./action";
import ReCAPTCHA from "react-google-recaptcha";
import { FormattedMessage } from "react-intl";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  labelRoot: {
    fontSize: "0.93rem"
  },
  selectLabel: {
    fontSize: "0.93rem"
  },
  formWarpper: {
    overflow: "hidden",
    position: "relative",
    alignItems: "flex-start",
    display: "flex",
    padding: "0 0 80px"
  },
  fromLeftContent: {
    padding: 0,
    alignItems: "flex-start",
    display: "flex"
  },
  fromRightContent: {
    paddingLeft: 68
  },
  formheading: {
    marginTop: 0,
    marginBottom: 30,
    letterSpacing: 2,
    fontWeight: 700
  },
  MuiFormControl_root: {
    display: "flex"
  },
  listItems: {
    justifyContent: "space-between"
  },
  listItemsChild: {
    marginBottom: 50
  },
  errorMsg: {
    color: "red"
  },
  "@media (max-width: 1024px)": {
    formheading: {
      marginBottom: 15
    },
    fromRightContent: {
      paddingLeft: 20
    },
    listItemsChild: {
      maxWidth: "48%",
      flexBasis: "48%"
    }
  },
  "@media (max-width: 991px)": {
    formWarpper: {
      paddingBottom: 50,
      minHeight: "auto",
      alignItems: "inherit",
      "&::before": {
        display: "none"
      }
    }
  },
  "@media (max-width: 767px)": {
    listItemsChild: {
      maxWidth: "100%",
      flexBasis: "100%"
    },
    formWarpper: {
      paddingBottom: 50
    },
    fromRightContent: {
      paddingLeft: 0
    },
    checkBoxWarpper: {
      margin: "10px 0 17px -9px"
    }
  }
}));

const usertype = [
  {
    name: (
      <FormattedMessage
        id="landing_contactus_usertype1"
        defaultMessage="Resident"
      />
    ),
    value: "resident"
  },
  {
    name: (
      <FormattedMessage
        id="landing_contactus_usertype2"
        defaultMessage="City"
      />
    ),
    value: "city"
  },
  {
    name: (
      <FormattedMessage
        id="landing_contactus_usertype3"
        defaultMessage="Government Agency"
      />
    ),
    value: "government"
  },
  {
    name: (
      <FormattedMessage
        id="landing_contactus_usertype4"
        defaultMessage="University"
      />
    ),
    value: "University"
  },
  {
    name: (
      <FormattedMessage
        id="landing_contactus_usertype5"
        defaultMessage="Other"
      />
    ),
    value: "Other"
  }
];

function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit, register, errors, control } = useForm();
  const [typeOfUser, setTypeOfUser] = useState();
  const [capcha, setCapcha] = useState(null);
  const handleCapcha = () => {
    setCapcha(capcha);
  };

  useEffect(() => {
    register(
      { name: "reCapcha" },
      {
        required: true
      }
    );
  }, [register]);

  useEffect(() => {
    register(
      { name: "userType" },
      {
        required: true
      }
    );
  }, [register]);

  const successCB = () => {
    history.replace("/");
  };

  const onSubmit = values => {
    values.reCapcha = undefined;
    dispatch(GetUserFeedback(values, successCB));
  };

  return (
    <div className={classes.formWarpper}>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.fromLeftContent}>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Address />
          </Grid>

          <Grid item xs={12} md={6} lg={9} xl={9}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.fromRightContent}>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  className={classes.formheading}
                >
                  <FormattedMessage
                    id="landing_contactus_title"
                    defaultMessage="GET IN TOUCH"
                  />
                </Typography>
                <Grid container spacing={0} className={classes.listItems}>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    md={5}
                    lg={5}
                    xl={5}
                    className={classes.listItemsChild}
                  >
                    <TextField
                      label={
                        <FormattedMessage
                          id="landing_contactus_name"
                          defaultMessage="Name*"
                        />
                      }
                      name="name"
                      fullWidth
                      autoComplete="off"
                      inputRef={register({
                        required: true
                      })}
                      helperText={
                        errors.name ? (
                          <span className={classes.errorMsg}>
                            <FormattedMessage
                              id="landing_contactus_name_error"
                              defaultMessage="*Name is required"
                            />
                          </span>
                        ) : null
                      }
                      InputLabelProps={{
                        classes: {
                          root: classes.labelRoot
                        }
                      }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={5}
                    md={5}
                    lg={5}
                    xl={5}
                    className={classes.listItemsChild}
                  >
                    <TextField
                      label={
                        <FormattedMessage
                          id="landing_contactus_email"
                          defaultMessage="Email*"
                        />
                      }
                      fullWidth
                      autoComplete="off"
                      name="email"
                      inputRef={register({
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i
                        }
                      })}
                      helperText={
                        errors.email && errors.email.type === "required" ? (
                          <span className={classes.errorMsg}>
                            <FormattedMessage
                              id="landing_contactus_email_error"
                              defaultMessage="*Email is required"
                            />
                          </span>
                        ) : errors.email && errors.email.type === "pattern" ? (
                          <span className={classes.errorMsg}>
                            <FormattedMessage
                              id="landing_contactus_email_error2"
                              defaultMessage="*Please Enter Valid Email address"
                            />
                          </span>
                        ) : null
                      }
                      InputLabelProps={{
                        classes: {
                          root: classes.labelRoot
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} className={classes.listItemsChild}>
                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel className={classes.selectLabel}>
                        <FormattedMessage
                          id="landing_contactus_select"
                          defaultMessage="Are You*"
                        />
                      </InputLabel>
                      <Controller
                        name="userType"
                        control={control}
                        defaultValue=""
                        onChange={([selected]) => {
                          setTypeOfUser(selected.target.value);
                          return selected.target.value;
                        }}
                        as={
                          <Select>
                            {usertype.map(({ name, value }) => (
                              <MenuItem key={value} value={value}>
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                        }
                      />
                      <FormHelperText>
                        {errors.userType && (
                          <span className={classes.errorMsg}>
                            <FormattedMessage
                              id="landing_contactus_select_error"
                              defaultMessage="*Please select one option"
                            />
                          </span>
                        )}
                      </FormHelperText>
                    </FormControl>
                  </Grid>

                  {typeOfUser === "resident" && (
                    <>
                      <Grid item xs={12} className={classes.listItemsChild}>
                        <FormControl className={classes.formControl} fullWidth>
                          <FormLabel className={classes.selectLabel}>
                            <FormattedMessage
                              id="landing_contactus_feedback"
                              defaultMessage="Type of Feedback*"
                            />
                          </FormLabel>
                          <Controller
                            name="type"
                            control={control}
                            defaultValue="Good"
                            onChange={([checked]) => {
                              return checked.target.value;
                            }}
                            as={
                              <RadioGroup>
                                <FormControlLabel
                                  value="Good"
                                  control={<Radio />}
                                  label={
                                    <FormattedMessage
                                      id="landing_contactus_feedback_good"
                                      defaultMessage="Good"
                                    />
                                  }
                                />
                                <FormControlLabel
                                  value="Bad"
                                  control={<Radio />}
                                  label={
                                    <FormattedMessage
                                      id="landing_contactus_feedback_bad"
                                      defaultMessage="Bad"
                                    />
                                  }
                                />
                                <FormControlLabel
                                  value="other"
                                  control={<Radio />}
                                  label={
                                    <FormattedMessage
                                      id="landing_contactus_feedback_other"
                                      defaultMessage="Other"
                                    />
                                  }
                                />
                              </RadioGroup>
                            }
                          />
                        </FormControl>
                      </Grid>
                    </>
                  )}

                  <Grid item xs={12} className={classes.listItemsChild}>
                    <TextField
                      label={
                        <FormattedMessage
                          id="landing_contactus_feedback_message"
                          defaultMessage="Your message*"
                        />
                      }
                      name="comment"
                      fullWidth
                      autoComplete="off"
                      inputRef={register({
                        required: true
                      })}
                      helperText={
                        errors.comment ? (
                          <span className={classes.errorMsg}>
                            <FormattedMessage
                              id="landing_contactus_message_error"
                              defaultMessage="*Message is required"
                            />
                          </span>
                        ) : null
                      }
                      InputLabelProps={{
                        classes: {
                          root: classes.labelRoot
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} className={classes.listItemsChild}>
                    <Controller
                      name="reCapcha"
                      control={control}
                      defaultValue=""
                      as={
                        <ReCAPTCHA
                          onChange={handleCapcha}
                          render="explicit"
                          ref={React.createRef()}
                          sitekey="6Leh89kUAAAAACGW6SMJoM31W_1eiuG5O8zpVzPW"
                          theme="light"
                          required
                        />
                      }
                    />
                    <FormHelperText>
                      {errors.reCapcha && (
                        <span className={classes.errorMsg}>
                          <FormattedMessage
                            id="landing_contactus_capcha_error"
                            defaultMessage="*Please validate captcha checkbox I'm not a robot"
                          />
                        </span>
                      )}
                    </FormHelperText>
                  </Grid>
                </Grid>

                <Button
                  className={classes.siteButton}
                  variant="outlined"
                  color="primary"
                  type="submit"
                >
                  <FormattedMessage
                    id="landing_contactus_send_button"
                    defaultMessage="Send Message"
                  />
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Form;
