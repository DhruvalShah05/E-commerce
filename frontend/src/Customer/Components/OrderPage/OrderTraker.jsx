import { Stepper, Step, StepLabel } from '@mui/material'
import React, { useState } from 'react'

const steps = [
    "Placed",
    "Ordered",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

function OrderTracker({activeStep}) {
 

  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
                <Step key={index}>
                    <StepLabel sx={{color:"#9155FD",fontSize:"45px"}}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
  )
}

export default OrderTracker
