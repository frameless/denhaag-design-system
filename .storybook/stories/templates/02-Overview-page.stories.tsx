import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading2, Paragraph } from '../../../components/Typography/src';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic, HeaderLogicProps } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '../../../components/Sidenav/src';
import { ArchiveIcon, FavoriteIcon, GridIcon, UserIcon } from '../../../components/Icons/src';
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

import { ArrowRightIcon, AlertTriangleFilledIcon } from '../../../components/Icons/src';

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
          <Heading2>Hallo, Anne Klap!</Heading2>
          <Paragraph>
            In MijnDenHaag kunt u zelf u persoonlijke zaken regelen wanneer u het uitkomt. Denk aan zaken zoals het zien
            wanneer uw aanvraag klaar is of het bijkopen van extra parkeertegoed.
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
                   {/* <AlertTriangleFilledIcon color="inherit"></AlertTriangleFilledIcon> */}
                   nog 2 dagen <ArrowRightIcon color="inherit"></ArrowRightIcon></TableCell>

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
          <Table></Table>
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
