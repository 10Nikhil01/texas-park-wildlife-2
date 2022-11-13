import React from 'react'
import {
    Stack,
    Divider,
    Typography,
    Input,
    InputAdornment,
    Box
  } from "@mui/material";
  import logo from "./assets/logo.png";
  import SearchIcon from "@mui/icons-material/Search";
function AppBarComp() {
  return (
    <Box
        sx={{
          bgcolor: "#3c3c3c",
          mb:3,
          pt: 1,
          py: 1,
          px: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <img src={logo} alt="Logo" width={80} />
        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              variant="middle"
              color="#919191"
              flexItem
              sx={{ color: "#b0b0b0" }}
            />
          }
          spacing={1}
          mx={2}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Parks
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Hunting
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Fishing
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Boating
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Game Warden
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Activities
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Wildlife
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Land
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Water
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#dcdcdc", py: 1, px: 0.2 }}
          >
            Media
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#dcdcdc", py: 1 }}>
            Calender
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#dcdcdc", py: 1 }}>
            Regulations
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#dcdcdc", py: 1 }}>
            Education
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#dcdcdc", py: 1 }}>
            Volunteer
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#dcdcdc", py: 1 }}>
            More...
          </Typography>
        </Stack>
        <div sx={{}}>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            sx={{
              border: "1px solid black",
              bgcolor: "white",
            }}
            placeholder="Search"
          />
        </div>
      </Box>
  )
}

export default AppBarComp;