import { Meta, StoryObj } from '@storybook/react';
import { Heading2, Heading3 } from '../../../components/Typography/src';
import { Sidenav, SidenavList, SidenavItem, SidenavLink } from '../../../components/Sidenav/src';
import { BadgeCounter } from '../../../components/BadgeCounter/src';
import { DescriptionList } from '../../../components/DescriptionList/src';
import { File } from '../../../components/File/src';
import { ProcessSteps } from '../../../components/ProcessSteps/src';
import { ContactTimelineMobile } from '../../../components/ContactTimelineMobile/src';
import { ArchiveIcon, CircleInformationIcon, InboxIcon, UserIcon } from '../../../components/Icons/src';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic, HeaderLogicProps } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { headerProps, footerLegalData, footerSocialData, newsletterData, contactData, copyright } from './util';
import React from 'react';

import './template-story.scss';

const meta = {
  title: 'Templates/Case Request Page',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

export default meta;

const itemFileDate = new Date('2022-03-25');

const items = [
  {
    title: 'Datum aanvraag',
    detail: '17 oktober 2022',
  },
  {
    title: 'Zaaknummer',
    detail: '11234899818',
  },
];

const loginHeaderProps: HeaderLogicProps = {
  ...headerProps,
  breadcrumbs: {
    navigationPath: [{ label: 'Home', href: 'https://denhaag.nl/' }, { label: 'MijnDenHaag' }],
  },
  userprofileMenu: {
    label: 'Welkom Anne Klap',
    authorisedLoginLabel: 'Ingelogd namens Jason Verploeg',
    navigationGroups: [
      {
        label: 'MijnDenHaag',
        navigation: [
          { label: 'Overzicht', href: '' },
          { label: 'Lopende zaken', href: '' },
          { label: "Thema's", href: '' },
          { label: 'Mijn account', href: '' },
        ],
      },
    ],
  },
};

// Login page

type Story = StoryObj<typeof meta>;

export const CaseRequestPage: Story = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <HeaderLogic {...loginHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content">
        <Sidenav>
          <SidenavList>
            <SidenavItem>
              <SidenavLink current href="/#">
                <InboxIcon />
                Label
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <ArchiveIcon />
                Mijn lopende zaken
                <BadgeCounter>2</BadgeCounter>
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <CircleInformationIcon />
                Belastingzaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <CircleInformationIcon />
                WOZ
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <CircleInformationIcon />
                Parkeren
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <CircleInformationIcon />
                Erfpacht
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <UserIcon />
                Mijn gegevens
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
        </Sidenav>
        <main className="denhaag-page-content__main">
          <Heading2>Aanvraag subsidie geluidsisolatie</Heading2>
          <Heading3>Status</Heading3>
          <ProcessSteps
            steps={[
              {
                id: 'deelname',
                marker: 1,
                status: 'checked',
                steps: [
                  {
                    id: 's1-1',
                    status: 'checked',
                    title: 'Aanmelding ontvangen',
                  },
                ],
                title: 'Deelname aan geluidsonderzoek',
              },
              {
                id: 'onderzoek',
                marker: 2,
                status: 'current',
                steps: [
                  {
                    id: 's2-1',
                    status: 'checked',
                    title: 'Sub step label',
                    // TODO: Adding meta and date attribute for substeps
                    // meta: 'Afspraak gemaakt voor het kijken welke verbeteringen nodig zijn aan de woning De afspraak is op woensdag 5 januari 2023',
                    // date: '10-11-2022',
                  },
                  {
                    date: 'aug - sept 2023',
                    id: 'ontwerpen',
                    title: 'Sub step label',
                    // TODO: Adding meta and date attribute for substeps
                    // meta: 'Eindelijk tijd om concreet te worden! we schetsen de plannen en leggen het voor om samen tot een beslissing te komen.',
                    // status: 'current',
                  },
                ],
                title: 'Onderzoek naar geluidsoverlast',
              },
              {
                id: 'uitvoeren',
                marker: 3,
                title: 'Uitvoeren van woningverbeteringen',
              },
              {
                id: 'klaar',
                marker: 4,
                title: 'Woningverbeteringen zijn uitgevoerd',
                meta: 'Verwacht klaar op 20 mei 2023',
              },
            ]}
          />
          <Heading3>Details</Heading3>
          <DescriptionList items={items} />
          <Heading3>Documenten</Heading3>
          <File
            extension="pdf"
            lastUpdated={itemFileDate}
            link="test.pdf"
            name="Antwoordformulier-deelname-onderzoek"
            size={658}
          />
          <Heading3>Eerdere contactmomenten</Heading3>
          {/* <ContactTimelineMobile
            items={[
              {
                channel: 'mail',
                id: '1',
                isoDate: 'vandaag',
                title: 'Herinnering: Geef informatie',
              },
              {
                channel: 'mail',
                id: '2',
                isoDate: '2023-01-23T14:13:12.848Z',
                title: 'Herinnering: Geef informatie',
              },
              {
                channel: 'mail',
                id: '3',
                isoDate: '2023-01-06T09:17:03.137Z',
                title: 'Geef informatie',
              },
              {
                channel: 'mail',
                id: '4',
                isoDate: '2023-01-06T09:17:03.137Z',
                title: 'U heeft recht op extra subsidie',
              },
              {
                channel: 'mail',
                id: '5',
                isoDate: '2022-12-01T09:17:03.137Z',
                title: 'Status is veranderd',
              },
              {
                channel: 'vraag',
                id: '6',
                isoDate: '2022-11-29T09:17:03.137Z',
                title: 'Mijn vraag',
              },
              {
                channel: 'telefoon',
                id: '7',
                isoDate: '2022-11-12T09:17:03.137Z',
                title: 'Gesprek over afspraak met adviseur',
              },
              {
                channel: 'brief',
                id: '8',
                isoDate: '2022-11-10T09:17:03.137Z',
                title: 'Kosten onderzoek en verbeteringen',
              },
              {
                channel: 'mail',
                id: '9',
                isoDate: '2022-11-08T09:17:03.137Z',
                title: 'Status is veranderd',
              },
              {
                channel: 'balie',
                id: '10',
                isoDate: '2022-10-30T09:17:03.137Z',
                title: 'Bezoek voor het inscannen van documenten',
              },
              {
                channel: 'mail',
                id: '11',
                isoDate: '2022-10-17T09:17:03.137Z',
                title: 'Aanvraag ontvangen',
              },
              {
                channel: 'brief',
                id: '12',
                isoDate: '2022-10-01T09:17:03.137Z',
                title: 'Actie woningverbetering verkeersgeluid bewoner',
              },
            ]}
            todayLabel="vandaag"
          /> */}
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
