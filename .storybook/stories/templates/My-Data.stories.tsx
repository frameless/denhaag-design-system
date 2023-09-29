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
          <Table>
            <TableCaption>Contact</TableCaption>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableHeader className="heman">He-Man</TableHeader>
                <TableHeader className="skeletor">Skeletor</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableHeader scope="row">E-mailadres</TableHeader>
                <TableCell>anneklap@hotmail.com</TableCell>
                <TableCell>
                  <EditIcon></EditIcon> Aanpassen
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Telefoonnummer</TableHeader>
                <TableCell>-</TableCell>
                <TableCell>
                  {' '}
                  <EditIcon></EditIcon> Aanpassen
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableCaption>Persoonsgegevens</TableCaption>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableHeader className="heman">He-Man</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableHeader scope="row">Voornamen</TableHeader>
                <TableCell>Anne</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Geslachtsnaam</TableHeader>
                <TableCell>Klap</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Geslacht</TableHeader>
                <TableCell>Vrouw</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Burgerservicenummer</TableHeader>
                <TableCell>203674581</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Geboortedatum</TableHeader>
                <TableCell>05-12-1988</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Nationaliteit</TableHeader>
                <TableCell>Nederlandse</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableCaption>Adres</TableCaption>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableHeader className="heman">He-Man</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableHeader scope="row">Straat</TableHeader>
                <TableCell>Balistraat 44</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Postcode en plaats</TableHeader>
                <TableCell>2538 JH's-Gravenhage</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Aanvangsdatum</TableHeader>
                <TableCell>03-04-2002</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader scope="row">Aantal inwoners op woonadres</TableHeader>
                <TableCell>3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Paragraph>
            Staat er een ander aantal inwoners op uw adres ingeschreven dan u verwacht? Dan kunt u een
            <Link href="#"> adresonderzoek aanvragen </Link> bij de gemeente. U kunt een adresonderzoek ook intrekken.
          </Paragraph>
          <Table>
            <TableCaption>Inschrijving</TableCaption>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableHeader className="heman">He-Man</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableHeader scope="row">Indicatie geheim</TableHeader>
                <TableCell>Nee</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <List subheader={<ListSubheader>Inschrijving</ListSubheader>}>
            <Link href="#">
              <ListItem
                primaryText="Meer informatie over adresonderzoek"
                leftIcon={<ArrowRightIcon color="inherit"></ArrowRightIcon>}
              />
            </Link>
            <Link href="#">
              <ListItem
                primaryText="Gegevens in BRP laten corrigeren, wijzigen of verwijderen"
                leftIcon={<ArrowRightIcon color="inherit"></ArrowRightIcon>}
              />
            </Link>
            <Link href="#">
              <ListItem
                primaryText="Verhuizing doorgeven"
                leftIcon={<ArrowRightIcon color="inherit"></ArrowRightIcon>}
              />
            </Link>
            <Link href="#">
              <ListItem
                primaryText="Verandering naamgebruik aanvragen"
                leftIcon={<ArrowRightIcon color="inherit"></ArrowRightIcon>}
              />
            </Link>
            <Link href="#">
              <ListItem
                primaryText="Vermelding geslacht wijzigen (transgenders)"
                leftIcon={<ArrowRightIcon color="inherit"></ArrowRightIcon>}
              />
            </Link>
            <Link href="#">
              <ListItem
                primaryText="Geheimhouding persoonsgegevens aanvragen"
                leftIcon={<ArrowRightIcon color="inherit"></ArrowRightIcon>}
              />
            </Link>
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
