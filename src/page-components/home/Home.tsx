import { MainLayout } from '@/layouts'
import { Box, Button, Center, Flex } from '@chakra-ui/react'
import { useState } from 'react'

const Home = () => {
  const [data, setData] = useState([
    {
      details: {
        id: String,
      },
    },
  ])
  const lead = {
    company: 'abc',
    firstName: 'aaaa',
    lastName: 'bbb',
    email: 'new@gmail.com',
  }

  return (
    <MainLayout className="container" theme="dark">
      <Center>
        <Flex w="500px" h="500px" bgColor="blue">
          <Button
            onClick={async () => {
              const data = await fetch('/api/zoho/uploadLead', {
                method: 'POST',
                body: JSON.stringify({ lead }),
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              const result = await data.json()
              setData(result.data)
            }}
          >
            Click here
          </Button>

          <Box>
            {() => {
              {
                data.map((lead, index) => {
                  return <Box key={index}>{lead.details.id}</Box>
                })
              }
            }}
          </Box>
        </Flex>
      </Center>
    </MainLayout>
  )
}

export default Home
