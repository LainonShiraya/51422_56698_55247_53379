import { Grid } from '@mui/material';
import PageTemplate from '../PageTemplate/PageTemplate';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import AccountMenu from './AccountMenu/AccountMenu';
// import ReccomendedSets from './ReccomendedSets/ReccomendedSets';
// import WeeklyPicked from './WeeklyPicked/WeeklyPicked';

const AccountPage = () => {
  return (
    <PageTemplate>
      <Grid container spacing={2} alignItems="flex-start" sx={{marginTop: '4rem'}}>
        <Grid
          item
            xs={3}
          sx={{
           // display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem',
           
          }}
        >
      <AccountMenu />
      </Grid>
      <Grid
          item
            xs={9}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
      <GeneralInfo />
      </Grid>
      </Grid>
    </PageTemplate>
  );
 };

export default AccountPage;