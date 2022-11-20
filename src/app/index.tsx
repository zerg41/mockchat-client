import { FC } from 'react';
// components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Button } from '@mui/material';

const Copyright: FC = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/zerg41/mockchat-client'>
        The Loop Messenger
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

const App: FC = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 4 }} style={{ height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' component='h1' textAlign='center' gutterBottom>
          The Loop Web Messenger
        </Typography>
        <Logo />
        <Button variant='contained'>Start Messaging</Button>
        <Copyright />
      </Box>
    </Container>
  );
};

export default App;
