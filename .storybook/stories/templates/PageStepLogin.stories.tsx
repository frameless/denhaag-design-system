import { Meta, Canvas, Story } from '@storybook/addon-docs';
import { Heading1, Heading2, Paragraph } from '/components/Typography/src';
import Alert from '/components/Alert/src';
import { Page, PageHeader, PageFooter } from '/components/Page/src';
import { HeaderLogic } from '/components/Header/src';
import HeaderLogo from '/components/HeaderLogo/src';
import Footer from '/components/Footer/src';
import ResponsiveContent from '/components/ResponsiveContent/src';
import Breadcrumb from '/components/Breadcrumb/src';
import { AuthenticationCardGroup } from '/components/CardGroup/src/story-template';
import {
  ArchiveIcon,
  FavoriteIcon,
  GridIcon,
  UserIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  CloseIcon,
  ArrowRightIcon,
} from '/components/Icons/src';

import clsx from 'clsx';

import './story-login.css';

import { Meta, StoryObj } from '@storybook/react';
import {
  ButtonLink,
  Heading1,
  Heading2,
  Link,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Separator,
} from '@utrecht/component-library-react';
import {
  UtrechtBreadcrumb,
  UtrechtDigidButton,
  UtrechtIconArrow,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';

const meta = {
  title: 'Template/Login page',
  id: 'template-form-pages-login',
  component: Page,
} satisfies Meta<typeof Page>;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  render: () => <Page></Page>,
};
