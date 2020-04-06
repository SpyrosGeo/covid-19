import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";
export default function CountryPicker({handleCountryChange}) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialFetchedCountries = await fetchCountries();
      setFetchedCountries(initialFetchedCountries);
    };
    fetchAPI()
  },[setFetchedCountries]);

  return (
    <FormControl className={styles.formcontrol}>
    {/* pass the country to the app.js */}
      <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
        <option value="">Global</option>
  {fetchedCountries.map(((country,i)=><option key={i} value={country}>{country}</option>))}
      </NativeSelect>
    </FormControl>
  );
}
