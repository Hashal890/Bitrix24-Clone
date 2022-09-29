import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./HomeFooter.module.css";
const upbx = [
  {
    head: 'BITRIX', subtl: ['Bitrix24', 'Pricing', 'Media kit', 'Contact us', 'In the press']
  },
  {
    head: 'SUPPORT', subtl: ['Helpdesk', 'Webinars', 'How-to videos', 'Submit a ticket', 'Schedule a demo', 'Bitrix24 Status page']
  },
  {
    head: 'RESOURCES', subtl: ['Blog', 'Solutions', 'Testimonials', 'Alternatives', 'Uses', 'Guides', 'Research']
  },
  {
    head: 'ON-PREMISE', subtl: ['On-premise edition', 'Download', 'Documentation']
  },
  {
    head: 'APPS', subtl: ['Market', 'Mobile app', 'Desktop app', 'API/developers']
  },
  {
    head: 'PARTNERS', subtl: ['Find a partner', 'Become a partner', 'Partner login']
  }

]
const HomeFooter = () => {
  return <Box p="50px" mt="100px" bg="#3fc0f0">
    <Box>
      <Flex justify="space-around">
        {
          upbx.map((bx) => <Stack key={bx.head}>
            <Text className={styles.txhd}>{bx.head}</Text>
            {
              bx.subtl.map((stl) => <Text className={styles.txsbtl}>{stl}</Text>)
            }

          </Stack>)
        }
      </Flex>
    </Box>
    <Divider/>
    <Box>
      <Flex>
        <Box>

        </Box>
        <Box>

        </Box>
      </Flex>
    </Box>
  </Box>
};

export default HomeFooter;
