import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading2, Paragraph } from '../../../components/Typography/src';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic, HeaderLogicProps } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '../../../components/Sidenav/src';
import { ArchiveIcon, FavoriteIcon, GridIcon, UserIcon } from '../../../components/Icons/src';
import { footerLegalData, footerSocialData, newsletterData, contactData } from '../templates/util';

import './story-login.css';

// import { List, ListItem, ListItemText, ListItemIcon } from '../../../components/List/src';
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableRow,
  TableCell,
  TableHeader,
} from '../../../components/Table/src';

import { EditIcon } from '../../../components/Icons/src';
import { List, ListSubheader, ListItem } from '../../../components/List/src';
import { ArrowRightIcon } from '../../../components/Icons/src';
import { Link } from '../../../components/Link/src';

const meta = {
  title: 'Templates',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

export default meta;

const myDataHeaderProps: HeaderLogicProps = {
  breadcrumbs: {
    navigationPath: [
      { label: 'Home', href: 'https://denhaag.nl/' },
      { label: 'MijnDenHaag' },
      { label: 'Mijn gegevens' },
    ],
  },
};
type Story = StoryObj<typeof meta>;

const copyright = '© 2022 Gemeente Den Haag';
export const myDataPage: Story = {
  render: () => (
    <Page>
      <PageHeader>
        <HeaderLogic {...myDataHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <Sidenav>
          <SidenavList>
            <SidenavItem>
              <SidenavLink current={true}>
                <GridIcon />
                Overzicht
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <ArchiveIcon />
                Lopende zaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <FavoriteIcon />
                Thema's
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <UserIcon />
                Mijn account
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
        </Sidenav>
        <main className="denhaag-page-content__main">
          <Heading2>Mijn gegevens</Heading2>
          <Paragraph>
            In MijnDenHaag kunt u zelf u persoonlijke zaken regelen wanneer u het uitkomt. Denk aan zaken zoals het zien
            wanneer uw aanvraag klaar is of het bijkopen van extra parkeertegoed.
          </Paragraph>
          {/* <List>
            <ListItem primaryText="test">
              <ListItemText>
                <ListItemIcon></ListItemIcon>
              </ListItemText>
            </ListItem>
          </List> */}
          </List>
        </main>
      </ResponsiveContent>
      <PageFooter>
        <Footer
          newsletterData={newsletterData}
          contactData={contactData}
          legalData={footerLegalData}
          copyrightLabel={copyright}
          socialData={footerSocialData}
        />
      </PageFooter>
    </Page>
  ),
};
