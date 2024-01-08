"use client"
import { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function TableChakra() {
    const [tabIndex, setTabIndex] = useState(0)
  
    const handleSliderChange = (event: any) => {
      setTabIndex(parseInt(event.target.value, 10))
    }
  
    const handleTabsChange = (index: any) => {
      setTabIndex(index)
    }
  
    return (
      <div className='flex items-center flex-col'>
        <input
          type='range'
          min='0'
          max='2'
          value={tabIndex}
          onChange={handleSliderChange}
        />
  
        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <TabList color={'white'} fontWeight={'bold'}>
            <Tab>Primeiro</Tab>
            <Tab>Segundo</Tab>
            <Tab>Terceiro</Tab>
          </TabList>
          <TabPanels color={'white'} fontSize={'2xl'}>
            <TabPanel>
              <p>Primeiro Conteúdo</p>
            </TabPanel>
            <TabPanel>
              <p>Segundo Centeúdo</p>
            </TabPanel>
            <TabPanel>
              <p>Terceiro Conteúdo</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    )
  }