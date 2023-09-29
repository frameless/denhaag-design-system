import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading2, Paragraph } from '../../../components/Typography/src';
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
import { footerLegalData, footerSocialData, newsletterData, contactData } from '../templates/util';

// import './story-login.css'; <-vroegere oplossing niet meer valid
import './template-story.scss';

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

import { Link } from '../../../components/Link/src';
import { DescriptionList } from '../../../components/DescriptionList/src';

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
      { label: 'MijnDenHaag', href: 'https://denhaag.nl/' },
      { label: 'Mijn gegevens' },
    ],
  },
};
type Story = StoryObj<typeof meta>;

export const items = [
  { title: 'E-mailadres', detail: 'anneklap@hotmail.com' },
  { title: 'Telefoonnummer', detail: '-' },
];

export const items2 = [
  { title: 'Voornamen', detail: 'Anne' },
  { title: 'Geslachtsnaam', detail: 'Klap' },
  { title: 'Geslacht', detail: 'Vrouw' },
  { title: 'Burgerservicenummer', detail: '203674581' },
  { title: 'Geboortedatum', detail: '05-12-1988' },
  { title: 'Nationaliteit', detail: 'Nederlandse' },
];

export const items3 = [
  { title: 'Straat', detail: 'Balistraat 44' },
  { title: 'Postcode en plaats', detail: '2538 JH ‘s-Gravenhage' },
  { title: 'Aanvangsdatum', detail: '03-04-2002' },
  { title: 'Aantal inwoner op woonadres', detail: '3' },
];

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
                <InboxIcon />
                Label
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
          <Heading2>Mijn gegevens</Heading2>

          <DescriptionList caption="Contact" items={items} />
          <DescriptionList caption="Persoonsgegevens" items={items2} />
          <DescriptionList caption="Adres" items={items3} />

          <nav className="denhaag-list__wrapper">
            <p className="denhaag-list__subheader">Wijzigingen en aanvragen BRP</p>
            <ul className="denhaag-list">
              <li className="denhaag-list__item">
                <Link component={Link} href="/" icon={<ArrowRightIcon />} iconAlign="start">
                  Meer informatie over adresonderzoek
                </Link>
              </li>
              <li className="denhaag-list__item">
                <Link component={Link} href="/" icon={<ArrowRightIcon />} iconAlign="start">
                  Gegevens in BRP laten corrigeren, wijzigen of verwijderen
                </Link>
              </li>
              <li className="denhaag-list__item">
                <Link component={Link} href="/nl" icon={<ArrowRightIcon />} iconAlign="start">
                  Verhuizing doorgeven
                </Link>
              </li>
              <li className="denhaag-list__item">
                <Link component={Link} href="/nl" icon={<ArrowRightIcon />} iconAlign="start">
                  Verandering naamgebruik aanvragen
                </Link>
              </li>
              <li className="denhaag-list__item">
                <Link component={Link} href="/nl" icon={<ArrowRightIcon />} iconAlign="start">
                  Vermelding geslacht wijzigen (transgenders)
                </Link>
              </li>
              <li className="denhaag-list__item">
                <Link component={Link} href="/nl" icon={<ArrowRightIcon />} iconAlign="start">
                  Geheimhouding persoonsgegevens aanvragen
                </Link>
              </li>
            </ul>
          </nav>
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
