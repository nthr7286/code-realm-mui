import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import withWidth from '@material-ui/core/withWidth'


export default withWidth()(
  ({ muscles, category, onSelect, width }) => {
    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0
  
    const onIndexSelect = (e, index) =>
      onSelect(index === 0 ? '' : muscles[index-1])
    return <AppBar position='static'>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor='secondary'
        textColor='secondary'
        variant={width === 'xs'
          ? 'scrollable'
          : 'fullWidth'
          }
        centered={ width !== 'xs' }
      >
        <Tab label="All" />
        {muscles.map(group =>
          <Tab 
            key={group} 
            label={group} 
          />
        )}
      </Tabs>
    </AppBar>
  }
)
