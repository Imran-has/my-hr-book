/**
 * Layout Provider - Wraps entire Docusaurus app with providers
 *
 * AuthProvider is added here to make auth state available everywhere.
 */

import React, {type ReactNode} from 'react';
import {composeProviders} from '@docusaurus/theme-common';
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common/internal';
import {DocsPreferredVersionContextProvider} from '@docusaurus/plugin-content-docs/client';
import type {Props} from '@theme/Layout/Provider';
import {AuthProvider} from '@site/src/contexts/AuthContext';

const Provider = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
]);

export default function LayoutProvider({children}: Props): ReactNode {
  // AuthProvider wraps everything so useAuth() works in all components
  return (
    <AuthProvider>
      <Provider>{children}</Provider>
    </AuthProvider>
  );
}
