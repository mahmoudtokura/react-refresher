import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

export default function Countries({ cities, loading }) {
  if (loading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return <Message message="Click on the map to add a country" />;
  }
  const countries = Array.from(
    cities
      .reduce((map, city) => map.set(city.country, city), new Map())
      .values()
  );

  // console.log({ countries });
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}
