import { Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import markerIcon from "../utils/marker_icon.png";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
const WorldMap = (countries: { countriesData: any }) => {
  const { countriesData } = countries;
  //   const customMarker = L.icon({
  //     // iconUrl: markerIcon,
  //     iconSize: [20, 25],
  //     iconAnchor: [15, 30],
  //   });

  return (
    <div>
      {countriesData?.map(
        (country: {
          countryInfo: {
            _id: Key | null | undefined;
            lat: number;
            long: number;
          };
          country:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          active:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          recovered:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          deaths:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        }) => (
          <Marker
            // icon={customMarker}
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>
                  Active Cases: {country.active} <br />
                  Recovered Cases: {country.recovered} <br />
                  Deaths: {country.deaths}
                </p>
              </div>
            </Popup>
          </Marker>
        )
      )}
    </div>
  );
};

export default WorldMap;
