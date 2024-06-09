import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { ForkLeft } from '@mui/icons-material';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={1}>
      <Avatar sx={{
        width:50,height:50
      }} src='https://freepngimg.com/thumb/star/156588-vector-star-gold-free-transparent-image-hd.png' alt="Star" />
    </Stack>
  );
}
