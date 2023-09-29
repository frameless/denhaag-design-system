import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading2, Heading3, Paragraph } from '../../../components/Typography/src';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic, HeaderLogicProps } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '../../../components/Sidenav/src';
import {
  ArchiveIcon,
  GridIcon,
  InboxIcon,
  UserIcon,
  ArrowRightIcon,
  HouseIcon,
  ParkingIcon,
} from '../../../components/Icons/src';
import { copyright, headerProps, footerLegalData, footerSocialData, newsletterData, contactData } from './util';
import { Link } from '../../../components/Link/src';

import './template-story.scss';

import { CaseCard } from '../../../components/Card/src';

import { Action } from '../../../components/Action/src';

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

let deadlineDate = new Date(new Date().setDate(new Date().getDate() + 2));

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
              <SidenavLink>
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
              <SidenavLink>
                <GridIcon />
                Erfpacht
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <UserIcon />
                Mijn gegevens
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
        </Sidenav>
        <main className="denhaag-page-content__main">
          <Heading2>Hallo Anne</Heading2>
          <Paragraph>
            In MijnDenHaag kunt u zelf uw persoonlijke zaken regelen wanneer het u uitkomt. U kunt bijvoorbeeld uw
            rekeningen betalen en zien wanneer uw aanvraag klaar is.
          </Paragraph>

          <Heading3>Wat ik moet regelen</Heading3>
          {/* Must not be a series of Action components, use another component */}
          <Action link="#example" deadline={deadlineDate} relativeDate>
            Geef informatie voor uw aanvraag subsidie geluidisolatie
          </Action>

          <Action link="#example" deadline={deadlineDate}>
            Betaal uw parkeerbon van € 74,90 voor parkeren bij Valeriusplein
          </Action>

          <Action link="#example">Verleng uw identiteitskaart</Action>

          <Heading3>Mijn lopende zaken</Heading3>
          <Paragraph>
            <Link href="#" icon={<ArrowRightIcon />}>
              Bekijk alle zaken
            </Link>
          </Paragraph>

          <CaseCard date={new Date('2020-10-17T00:00:00.000Z')} href="#" title="Aanvraag subsidie geluidsisolatie" />
          <CaseCard date={new Date('2020-08-01T00:00:00.000Z')} href="#" title="Aanvraag Ooievaarspas" />
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
