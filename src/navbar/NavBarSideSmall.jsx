import React from "react";
import { SideNav, Nav as BaseNav } from "react-sidenav";
import styled from "styled-components";
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation,
  ExampleBody as Body
} from "./Containers";
import { Icon as BaseIcon } from "react-icons-kit";

//import { print } from "react-icons-kit/fa/print";
import { ic_playlist_add } from "react-icons-kit/md/ic_playlist_add";
import { ic_playlist_play } from "react-icons-kit/md/ic_playlist_play";
import { ic_receipt } from "react-icons-kit/md/ic_receipt";
import ToBeImplemented from "../components/ToBeImplemented";
import Container from "../components/Container";
import ViewDocuments from "../components/ViewDocument";
import AddDocument from "../components/AddDocument";

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

const Navigation = styled(BaseNavigation)`
  background: #006a4d;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 120px;
  line-height: 22px;
`;

const IconCnt = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;

const Nav = styled(BaseNav)`
  flex-direction: column;
`;

const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20",
  selectionBgColor: "#00BCD4"
};

const Text = styled.div`
  font-size: 0.72em;
  text-transform: uppercase;
`;

const Icon = props => <BaseIcon size={32} icon={props.icon} />;

export class NavBarSideSmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPath: "1"
    };
  }

  onItemSelection = arg => {
    console.log(arg.path);
    this.setState({ selectedPath: arg.path });
  };

  content = () => {
    switch (this.state.selectedPath) {
      case "1":
        return <Container />;

      case "2":
        return <AddDocument />;

      case "3":
        return <ViewDocuments />;
      default:
        return <ToBeImplemented />;
    }
  };

  render() {
    var contentToDisplay = this.content();
    //this.state.selectedPath === "1" ? <Container /> : <ToBeImplemented />;

    return (
      <AppContainer>
        <Navigation>
          <SideNav
            defaultSelectedPath="1"
            theme={theme}
            onItemSelection={this.onItemSelection}
          >
            <Nav id="1">
              <IconCnt>
                <Icon icon={ic_receipt} />
              </IconCnt>
              <Text>Login</Text>
            </Nav>

            <Nav id="2">
              <IconCnt>
                <Icon icon={ic_playlist_add} />
              </IconCnt>
              <Text>Add Doc</Text>
            </Nav>

            <Nav id="3">
              <IconCnt>
                <Icon icon={ic_playlist_play} />
              </IconCnt>
              <Text>View Doc</Text>
            </Nav>
          </SideNav>
        </Navigation>
        <Body>{contentToDisplay}</Body>
      </AppContainer>
    );
  }
}
