import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Grid } from "@mui/material";
function MainComp() {
  return (
    <>
      <Grid
        container
        columnSpacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Grid container md={11} px={2}>
          <Grid item md={3}>
            <List sx={{ mx: 1  }}>
              <ListItem
                sx={{ borderBottom: "2px dotted #afafaf9f", py: 0, my: 0 }}
              >
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    mx: 0,
                  }}
                >
                  Angler Education
                </Button>
              </ListItem>
              <ListItem
                sx={{
                  borderBottom: "2px dotted #afafaf9f",
                  py: 0,
                  my: -1,
                  py: 0,
                  alignItems: "center",
                }}
              >
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Archery
                </Button>
              </ListItem>
              <ListItem
                sx={{ borderBottom: "2px dotted #afafaf9f", py: 0, py: 0 }}
              >
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    my: 0,
                  }}
                >
                  Becoming an Outdoors-Woman
                </Button>
              </ListItem>
              <ListItem
                sx={{
                  borderBottom: "2px dotted #afafaf9f",
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  py: 0,
                }}
              >
                <Button
                  startIcon={
                    <ArrowDropDownIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Boater Education
                </Button>
                <List sx={{ my: -3, mb: -1 }}>
                  <ListItem sx={{ my: -1.5, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Boater Education
                    </Button>
                  </ListItem>
                  <ListItem sx={{ my: -3.5, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Print a Certification Card
                    </Button>
                  </ListItem>
                  <ListItem sx={{ my: -3.5, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Online Courses
                    </Button>
                  </ListItem>
                  <ListItem sx={{ my: -2.5, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Boater Education FAQ
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: 0, py: 0 }}>
                    <Button
                      startIcon={
                        <ArrowRightIcon
                          sx={{
                            color: "grey",
                            width: "2rem",
                            height: "2rem",
                            mr: -1.5,
                          }}
                        />
                      }
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Instructor Information
                    </Button>
                  </ListItem>
                  <ListItem sx={{ my: -1.5, py: 0, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Classroom Resources
                    </Button>
                  </ListItem>
                  <ListItem sx={{ py: 0, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Educational Resources
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0 }}>
                    <Button
                      startIcon={
                        <ArrowRightIcon
                          sx={{
                            color: "grey",
                            width: "2rem",
                            height: "2rem",
                            mr: -1.5,
                          }}
                        />
                      }
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Additional Resources
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        wordWrap: "noWrap",
                      }}
                    >
                      Boater ED Certification
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Boater Education Publications
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Texas Water Safety Act
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Life Jackets
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Become a Boater Instructor
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1, py: 0, ml: 3 }}>
                    <Button
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        color: "grey",
                      }}
                    >
                      Instructor Application Request
                    </Button>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Educational Resources
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Get Outsides
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Hunter Education
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Project Wild
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    ml: 3,
                    my: 0,
                  }}
                >
                  Texas Buffalo Soldiers
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    ml: 3,
                  }}
                >
                  Education
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={9}>
            <Typography variant="h3" sx={{ fontSize: "900", mt: 7, ml: 3 }}>
              Instructor Application Request
            </Typography>
            <Typography variant="h6" sx={{ ml: 3, mt: 6 }}>
              Please send me an application to become a Boater Education
              Instructor. Note - items marked with red square are required.
            </Typography>
            <Box sx={{display:"flex",alignItems:"center", gap:1}}>
             <Typography
                  variant="h6"
                  sx={{ mt: 3, ml: 3, }}
                >
                  Subject:
                </Typography>
                <Box
                  sx={{
                    width: 8,
                    mt:4,ml:1,
                    height: 8,
                    backgroundColor: "red",
                  }}
                />
                </Box>
            <TextField
              id="outlined-basic"
              size="small"
              InputProps={{
                style: { fontSize: "1.6rem", margin: 0, padding: 0 },
              }}
              sx={{
                width: "480px",
                "& .MuiInputBase-root": {
                  height: 40,
                },
                ml: 3,
                padding: 0,
                fontSize: "2rem",
                borderRadius: "none",
              }}
              variant="outlined"
              value="Boater Education Instructor Application Request"
            />
            <Box sx={{display:"flex",alignItems:"center"}}>
             <Typography
                  variant="h6"
                  sx={{ mt: 3, ml: 3, }}
                >
                  First Name:
                </Typography>
                <Box
                  sx={{
                    width: 8,
                    mt:4,ml:1,
                    height: 8,
                    backgroundColor: "red",
                  }}
                />
                </Box>
            <TextField
              id="outlined-basic"
              size="small"
              InputProps={{
                style: { fontSize: "1.6rem", margin: 0, padding: 0 },
              }}
              sx={{
                width: "480px",
                "& .MuiInputBase-root": {
                  height: 40,
                },
                ml: 3,
                padding: 0,
                fontSize: "2rem",
                borderRadius: "none",
              }}
              variant="outlined"
            />
            <Typography variant="h6" sx={{ mt: 2, ml: 3 }}>
              Middle Initial:
            </Typography>
            <TextField
              id="outlined-basic"
              size="small"
              InputProps={{
                style: { fontSize: "1.6rem", margin: 0, padding: 0 },
              }}
              sx={{
                width: "200px",
                "& .MuiInputBase-root": {
                  height: 40,
                },
                ml: 3,
                padding: 0,
                fontSize: "2rem",
                borderRadius: "none",
              }}
              variant="outlined"
            />
           <Box sx={{display:"flex",alignItems:"center"}}>
             <Typography
                  variant="h6"
                  sx={{ mt: 3, ml: 3, }}
                >
                  Last Name:
                </Typography>
                <Box
                  sx={{
                    width: 8,
                    mt:4,ml:1,
                    height: 8,
                    backgroundColor: "red",
                  }}
                />
                </Box>
            <TextField
              id="outlined-basic"
              size="small"
              InputProps={{
                style: { fontSize: "1.6rem", margin: 0, padding: 0 },
              }}
              sx={{
                width: "480px",
                "& .MuiInputBase-root": {
                  height: 40,
                },
                ml: 3,
                padding: 0,
                fontSize: "2rem",
                borderRadius: "none",
              }}
              variant="outlined"
            />
           <Box sx={{display:"flex",alignItems:"center"}}>
             <Typography
                  variant="h6"
                  sx={{ mt: 3, ml: 3, }}
                >
                  Date of Birth:
                </Typography>
                <Box
                  sx={{
                    width: 8,
                    mt:4,ml:1,
                    height: 8,
                    backgroundColor: "red",
                  }}
                />
                </Box>
            <Typography variant="h6" sx={{ ml: 3, color: "grey" }}>
              Please enter your date of birth in following format (MM/DD/YYYY)
            </Typography>
            <TextField
              id="outlined-basic"
              size="small"
              InputProps={{
                style: { fontSize: "1.6rem", margin: 0, padding: 0 },
              }}
              sx={{
                width: "480px",
                "& .MuiInputBase-root": {
                  height: 40,
                },
                ml: 3,
                padding: 0,
                fontSize: "2rem",
                borderRadius: "none",
              }}
              variant="outlined"
            />
            <Box sx={{display:"flex",alignItems:"center"}}>
             <Typography
                  variant="h6"
                  sx={{ mt: 3, ml: 3, }}
                >
                  Current Address:
                </Typography>
                <Box
                  sx={{
                    width: 8,
                    mt:4,ml:1,
                    height: 8,
                    backgroundColor: "red",
                  }}
                />
                </Box>
            <TextField
              id="outlined-basic"
              size="small"
              InputProps={{
                style: { fontSize: "1.6rem", margin: 0, padding: 0 },
              }}
              sx={{
                width: "480px",
                "& .MuiInputBase-root": {
                  height: 40,
                },
                ml: 3,
                padding: 0,
                fontSize: "2rem",
                borderRadius: "none",
              }}
              variant="outlined"
            />
            <Grid container justifyContent="flex-start" alignItem="flex-end">
              <Grid item md={.8}>
                <Typography
                  variant="h6"
                  sx={{ mt: 3, ml: 3, display: "block" }}
                  noWrap
                >
                  City:
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Box
                  sx={{
                    width: 8,
                    mt:4,ml:1,
                    height: 8,
                    backgroundColor: "red",
                  }}
                />
              </Grid>
            </Grid>
            <TextField
              id="outlined-basic"
              size="small"
              InputProps={{
                style: { fontSize: "1.6rem", margin: 0, padding: 0 },
              }}
              sx={{
                width: "480px",
                "& .MuiInputBase-root": {
                  height: 40,
                },
                ml: 3,
                padding: 0,
                fontSize: "2rem",
                borderRadius: "none",
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MainComp;
