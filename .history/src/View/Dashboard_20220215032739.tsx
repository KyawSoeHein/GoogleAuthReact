import { Container, Grid } from "@mui/material";
import MenuSelection from "../Components/MenuSelection";
import UserInfo from "../Components/UserInfo";
import CoverAndProfilePhoto from "../Components/CoverAndProfilePhoto";
import { flexbox } from "@mui/system";

const Dashboard = () => {
  const dividerSpace = 16;

  return (
    <Grid>
      <Container>
        <p>Hello</p>
        <div
          style={{
            marginTop: dividerSpace,
            display: "flex",
            flexDirection: "row-reverse",
            marginRight: dividerSpace,
          }}
        >
          <MenuSelection />
        </div>

        <div style={{ marginTop: 2 * dividerSpace }}>
          <CoverAndProfilePhoto />
        </div>

        <div style={{ marginTop: 2 * dividerSpace }}>
          <UserInfo />
        </div>
      </Container>
    </Grid>
  );
};

export default Dashboard;
