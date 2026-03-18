import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Components } from './pages/Components';
import { FullApps } from './pages/FullApps';
import { Libraries } from './pages/Libraries';
import { Tools } from './pages/Tools';
import { MCP } from './pages/MCP';
import { Accordions } from './pages/components/Accordions';
import { Animations } from './pages/components/Animations';
import { AppShells } from './pages/components/AppShells';
import { Badge } from './pages/components/Badge';
import { Buttons } from './pages/components/Buttons';
import { ButtonGroup } from './pages/components/ButtonGroup';
import { Calendars } from './pages/components/Calendars';
import { Cards } from './pages/components/Cards';
import { Drawer } from './pages/components/Drawer';
import { Dropdowns } from './pages/components/Dropdowns';
import { Gallery } from './pages/components/Gallery';
import { Modals } from './pages/components/Modals';
import { NavigationBars } from './pages/components/NavigationBars';
import { SidebarComponent } from './pages/components/SidebarComponent';
import { Steppers } from './pages/components/Steppers';
import { Tabs } from './pages/components/Tabs';
import { Toggles } from './pages/components/Toggles';
import { InputFields } from './pages/components/InputFields';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Components },
      { path: 'components/accordions', Component: Accordions },
      { path: 'components/animations', Component: Animations },
      { path: 'components/app-shells', Component: AppShells },
      { path: 'components/badge', Component: Badge },
      { path: 'components/buttons', Component: Buttons },
      { path: 'components/button-group', Component: ButtonGroup },
      { path: 'components/calendars', Component: Calendars },
      { path: 'components/cards', Component: Cards },
      { path: 'components/drawer', Component: Drawer },
      { path: 'components/dropdowns', Component: Dropdowns },
      { path: 'components/gallery', Component: Gallery },
      { path: 'components/modals', Component: Modals },
      { path: 'components/navigation-bars', Component: NavigationBars },
      { path: 'components/sidebar', Component: SidebarComponent },
      { path: 'components/steppers', Component: Steppers },
      { path: 'components/tabs', Component: Tabs },
      { path: 'components/toggles', Component: Toggles },
      { path: 'components/input-fields', Component: InputFields },
      { path: 'full-apps', Component: FullApps },
      { path: 'libraries', Component: Libraries },
      { path: 'tools', Component: Tools },
      { path: 'mcp', Component: MCP },
    ],
  },
]);