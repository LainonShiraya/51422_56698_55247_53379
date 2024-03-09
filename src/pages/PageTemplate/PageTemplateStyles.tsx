import { Container } from "@mui/material";

export const PageWrapper = ({children} : {children?: React.ReactNode}) => (
    <Container sx={{
        maxWidth:'100vw',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding:'0',
          '&.MuiContainer-root': {
            maxWidth: '100vw',
            padding: '0',
          },
    }}>
        {children}
    </Container>
)