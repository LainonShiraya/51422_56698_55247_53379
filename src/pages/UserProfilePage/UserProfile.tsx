import React, { useEffect, useState } from 'react';
import { Avatar, Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import PageTemplate from '../PageTemplate/PageTemplate';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { Id } from '../../../convex/_generated/dataModel';
import userIcon from '../../assets/user-icon.png';



const UserProfile = () => {
    const { user, isAuthenticated } = useAuth0();
    const getConvexUser = useMutation(api.users.getConvexUser);
    const [userConvex, setUserConvex] = useState<{
        cart: {
          productId: Id<'products'>;
          count: number;
        }[];
        legoPoints: number;
        favorites: {
          productId: Id<'products'>;
          count: number;
        }[];
      } | null>({ legoPoints: 0, cart: [], favorites: [] });
      
    useEffect(() => {
        async function createOrUpdateUser() {
          return await getConvexUser();
        }
        if (isAuthenticated) {
          createOrUpdateUser()
            .then((savedUser) => setUserConvex(savedUser))
            .catch(console.error);
        }
      }, [getConvexUser, isAuthenticated]);
    
return (
    <PageTemplate>
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, margin: '0 auto', backgroundColor: '#f9f9f9' }}>
            <Box textAlign="center">
                <Avatar src={userIcon} alt="Avatar" sx={{ width: 100, height: 100, margin: '0 auto', marginBottom: 2 }} />
                <Typography variant="h5" component="h2">
                    {user?.given_name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Email: {user?.email}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Punkty: {userConvex?.legoPoints}
                </Typography>
            </Box>
            <Box marginTop={3}>
                {/* <Typography variant="h6" component="h3">
                    Ostatnie zamówienia
                </Typography>
                <List>
                    {user.orders.map((order, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={order} />
                        </ListItem>
                    ))}
                </List> */}
            </Box>
        </Paper>
    </PageTemplate>
);

};
export default UserProfile;
