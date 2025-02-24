import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTraker'
import { Box, Grid, Typography } from '@mui/material'
import { StarBorderOutlined } from '@mui/icons-material'

function OrderDetails() {
    return (
        <div className='px-5 lg:px-20'>
            <div>
                <Typography variant="h6" className='font-bold py-7'>
                    Delivery Address
                </Typography>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid container spacing={5} className='space-y-3'>
                {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                        <Grid item xs={12}  key={index} className='shadow-xl rounded-md border p-5'>
                            <Grid container  alignItems="center">
                                <Grid item xs={6}>
                                    <div className='flex'>
                                        <img
                                            className='w-[5rem] h-[5rem] object-cover object-top rounded-md'
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJx3X2-s9Cl1w_bc8TnEAgTUHlZ0ba4Lt9FmrckzHiEs6s0wlptLsPc8o&s"
                                            alt="product"
                                        />
                                        <div className='ml-5'>
                                            <Typography variant="body1" className='font-semibold'>
                                                Girls T-Shirt
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Size: M | Color: Blue
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Seller: Linaria
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ₹200.00
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6} container justifyContent="center" alignItems="center">
                                    <Box sx={{ color: "deepPurple[500]", display: "flex", alignItems: "center", cursor: "pointer" }}>
                                        <StarBorderOutlined sx={{ fontSize: "2rem", mr: 1 }} />
                                        <Typography variant="body2">Rate & Review Product</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default OrderDetails
