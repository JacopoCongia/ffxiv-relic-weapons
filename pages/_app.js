import "../styles/styles.css";
import { WeaponsDataProvider } from "@/context/weaponsData";

export default function MyApp({ Component, pageProps }) {
  return (
    <WeaponsDataProvider>
      <Component {...pageProps} />;
    </WeaponsDataProvider>
  );
}
