import React from 'react'
import ReactDOM from 'react-dom'
import { AppBar, Checkbox, IconButton } from 'react-toolbox'
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox'
import { MainAppBar } from './components/header'

// import style from './style';

// Ripped out all the state from the React Toolbox demo, you're welcome
// to use Redux, Reactive-Dict or stateful components . .

Meteor.startup(function () {
    ReactDOM.render((
      <Layout>
        <NavDrawer>
            <p>
                Navigation, account switcher, etc. go here.
            </p>
        </NavDrawer>
        <Panel>
            <AppBar><IconButton icon='menu' inverse={ true } /></AppBar>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                <h1>Arrow</h1>
                <p>Main content goes here.</p>
                <Checkbox label='Pin drawer' />
                <Checkbox label='Show sidebar' />
            </div>
        </Panel>
        <Sidebar width={ 5 }>
            <div><IconButton icon='close' /></div>
            <div style={{ flex: 1 }}>
                <p>Supplemental content goes here.</p>
            </div>
        </Sidebar>
      </Layout>
    ), document.getElementById('app'));
});
