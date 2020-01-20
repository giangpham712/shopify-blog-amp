import {AppProvider} from "@shopify/polaris";
import translations from '@shopify/polaris/locales/en.json';
import {Provider} from "@shopify/app-bridge-react";
import Cookies from "js-cookie";

export default function Layout({ children }) {

  const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
  return (
    <AppProvider i18n={translations}>
    {children}
    </AppProvider>
  )
}
