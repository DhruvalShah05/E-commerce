import { Avatar, Box, Grid2, Rating } from '@mui/material'
import React from 'react'

function Product_ReviewCard() {
  return (
    <div>
      <Grid2 container spacing={2} gap={1}>
        <Grid2 item xs={1}>
          <Box>
            <Avatar className="text-white w-14 h-14 rounded-full " sx={{bgcolor : "#9155fd"}}>
              D
            </Avatar>

          </Box>

        </Grid2>
        <Grid2 item xs={9}>
          <div className='space-y-2'>
            <p className='font-semibold text-lg'>Ram</p>
            <p className='opacity-70'>April 5,2024</p>
            <Rating value={4.5} name='Half-rating' readOnly precision={0.5} />
            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          </div>
        </Grid2>
       
      </Grid2>
    </div>
  )
}

export default Product_ReviewCard
