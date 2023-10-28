import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  // toolbar
  toolbar: {
    height: '70px',
  },
  // content
  content: {
    flexGrow: 1,
    padding: '2em',
  }
}));
