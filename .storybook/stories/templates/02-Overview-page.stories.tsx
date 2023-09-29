import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading2, Paragraph } from '../../../components/Typography/src';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic, HeaderLogicProps } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '../../../components/Sidenav/src';
import { ArchiveIcon, GridIcon, InboxIcon, UserIcon, ArrowRightIcon, HouseIcon, ParkingIcon, AlertTriangleIcon } from '../../../components/Icons/src';
import { copyright, headerProps, footerLegalData, footerSocialData, newsletterData, contactData } from './util';

import './template-story.scss';

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableRow,
  TableCell,
  TableHeader,
} from '../../../components/Table/src';

import { CaseCard } from '../../../components/Card/src';




const meta = {
  title: 'Templates/OverviewPage',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

export default meta;

const overviewHeaderProps: HeaderLogicProps = {
  ...headerProps,
  breadcrumbs: {
    navigationPath: [{ label: 'Home', href: 'https://denhaag.nl/' }, { label: 'MijnDenHaag' }],
  },
};
type Story = StoryObj<typeof meta>;

export const OverviewPage: Story = {
  render: () => (
    <Page>
      <PageHeader>
        <HeaderLogic {...overviewHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <Sidenav>
          <SidenavList>
            <SidenavItem>
              <SidenavLink current={true}>
                <InboxIcon />
                Overzicht
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <ArchiveIcon />
                Mijn lopende zaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink >
                <GridIcon />
                Belastingzaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <HouseIcon />
                WOZ
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <ParkingIcon />
                Parkeren
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink >
                <GridIcon />
                Erfpacht
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink >
                <UserIcon />
                Mijn gegevens
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
        </Sidenav>
        <main className="denhaag-page-content__main">
          <Heading2>Hallo, Anne Klap!</Heading2>
          <Paragraph>
In MijnDenHaag kunt u zelf uw persoonlijke zaken regelen wanneer het u uitkomt. U kunt bijvoorbeeld uw rekeningen betalen en zien wanneer uw aanvraag klaar is.
          </Paragraph>
          <Table>
            <TableCaption>Wat ik moet regelen</TableCaption>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableHeader className="heman">He-Man</TableHeader>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableHeader scope="row">Geef informatie voor uw aanvraag subsidie geluidisolatie</TableHeader>
                <TableCell>
                   <AlertTriangleIcon></AlertTriangleIcon>

                   nog 2 dagen!! <ArrowRightIcon color="inherit"></ArrowRightIcon></TableCell>

              </TableRow>
              <TableRow>
                <TableHeader scope="row">Betaal uw parkeerbon van € 74,90 voor parkeren bij Valeriusplein </TableHeader>
                <TableCell>vóór 1 maart 2023<ArrowRightIcon color="inherit"></ArrowRightIcon></TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Verleng uw identiteitskaart</TableHeader>
                <TableCell><ArrowRightIcon color="inherit"></ArrowRightIcon></TableCell>

              </TableRow>
            </TableBody>
          </Table>
          <CaseCard
  date={new Date("2020-10-17T00:00:00.000Z")}
  href="#"
  title="Aanvraag subsidie geluidsisolatie"

/>
<CaseCard
  date={new Date("2020-08-01T00:00:00.000Z")}
  href="#"
  title="Aanvraag Ooievaarspas"
/>

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
