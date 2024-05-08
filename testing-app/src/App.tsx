import React from 'react';
import logo from './logo.svg';
import Saslogo from '@sastrix-app/asteroids/dist/5a0d86345be93dc6ca78.svg'
import './App.css';
import { Button as MuiButton, Typography, Box, styled } from '@mui/material';
import { AvatarWithBadge, AsteroidsButton, AsteroidsNavigation, NavigationItemType } from '@sastrix-app/asteroids';
// import { Button, ButtonMap, Navigation, NavigationItemType } from '@sastrix-app/asteroids';

// const Buttn = styled(ButtonMap)();
const navHeaderList: NavigationItemType[] = [
  {
    iconName: 'dashboard',
    key: 'overview',
    name: 'Overview',
    selected: true,
  },
  {
    expanded: true,
    iconName: 'layers',
    items: [
      { key: 'company_tools', name: 'Company Tools' },
      { key: 'discovered', name: 'Discovered' },
      { key: 'tool_store', name: 'Tool Store' },
      { key: 'tool_request', name: 'Tool Request' },
      { key: 'archive', name: 'Archive' },
    ],
    key: 'tools',
    name: 'Tools',
  },
  {
    iconName: 'savings',
    items: [
      { key: 'potential_savings', name: 'Potential' },
      { key: 'achieved_savings', name: 'Achieved' },
    ],
    key: 'savings',
    name: 'Savings',
  },
  {
    iconName: 'quiz',
    key: 'support',
    name: 'Support',
  },
  {
    iconName: 'account_balance',
    key: 'academy',
    name: 'SaaS Academy',
  },
];

const navSettingsList: NavigationItemType[] = [
  {
    iconName: 'settings',
    items: [
      { key: 'workflow', name: 'Workflow' },
      { key: 'connect', name: 'Connect' },
      { key: 'users', name: 'Users' },
      { key: 'authentication', name: 'Authentication' },
    ],
    key: 'settings',
    name: 'Settings',
  },
];

function App() {
  return (
    <div className="App" style={{ position: 'relative'}}>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>           */}
        {/* </header> */}
        <div>
        <AsteroidsNavigation
          companyName='Xentral GmbH'
          email='Matt.Stevens@xentral.com'
          initials='SL'
          items={navHeaderList}
          settings={navSettingsList}
          src='https://ca.slack-edge.com/T01HNLBD132-U01GJ284EJ3-c121c1aec6b8-512'
        />
        </div> 
        {/* <div style={{ position: 'absolute', bottom: '50%', right: '50%'}}> */}
        {/* <Saslogo /> */}
        <object aria-label={'alt'} data={Saslogo} type='image/svg+xml' />
        <MuiButton>Primary Mui</MuiButton>
        <MuiButton color="success">Success Mui</MuiButton>
        <AsteroidsButton text="Asteroids Primary" variant="text" />
        <AvatarWithBadge src='https://ca.slack-edge.com/T01HNLBD132-U01GJ284EJ3-c121c1aec6b8-512' />
        <Typography variant="h1">REady to win</Typography>  
        {/* </div> */}
    </div>
  );
}

export default App;
