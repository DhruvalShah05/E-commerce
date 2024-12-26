import { Button, Grid, Typography } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";


function Footer() {
  return (
    <>
      <div className="w-full">
        <Grid
          container
          className="bg-black text-white text-center mt-10"
          spacing={2}
          justifyContent="center"
        >
          <Grid item xs={12} sm={6} md={3} className="pb-5 ">
            <div className="flex justify-center items-center mt-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6CntfYYa7Tav29Es9FC0u2rHdhB754ithw&s"
                alt="Company Logo"
                className="mr-2"
                style={{ width: "90px", height: "90px" }}
              />
            </div>
            
            <div className="flex justify-center mt-5">
              <Facebook fullWidth className="pb-2" fontSize="large" />
              <Twitter className="pb-2" fontSize="large" />
              <Instagram className="pb-2" fontSize="large" />
              <LinkedIn className="pb-2" fontSize="large" />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              Company
            </Typography>
            <Button fullWidth className="pb-5" variant="h6">
              About Us
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Careers
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Press
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Privacy Policy
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Terms & Conditions
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              Shop
            </Typography>
            <Button fullWidth className="pb-5" variant="h6">
              New Arrivals
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Best Sellers
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Discounts
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Gift Cards
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Track Order
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              Customer Service
            </Typography>
            <Button fullWidth className="pb-5" variant="h6">
              FAQ
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Contact Us
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Returns & Exchanges
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Shipping Info
            </Button>
            <Button fullWidth className="pb-5" variant="h6">
              Order Support
            </Button>
          </Grid>
        </Grid>
      </div>

      <div className="bg-black text-white text-center">
        <div>
          <p className="text-white text-md py-4">
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
