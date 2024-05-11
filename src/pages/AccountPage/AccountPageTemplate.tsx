import { Grid } from '@mui/material';
import PageTemplate from '../PageTemplate/PageTemplate';
import AccountMenu from './AccountMenu/AccountMenu';

const AccountPageTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageTemplate>
      <Grid container spacing={2} alignItems="flex-start" sx={{ marginTop: '4rem' }}>
        <Grid item xs={3} sx={{ flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <AccountMenu />
        </Grid>
        <Grid item xs={9} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        {children}
        </Grid>
      </Grid>
    </PageTemplate>
  );
};

export default AccountPageTemplate;
