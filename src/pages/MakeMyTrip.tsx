import DayListBar from 'components/DayListBar/DayListBar';
import useDaysData from 'hooks/useDaysData';
import Map from 'components/Map';
import MyTripHeader from 'components/MyTrip/MyTripHeader';
import SearchAddress from 'components/SideBar/SearchAddress';
import MakeTripLayout from 'components/UI/MakeTripLayout';
import React, { useRef, useState, useEffect } from 'react';
import { useAppSelect } from 'store/configureStore.hooks';
import * as Misc from 'services/misc';

const MakeMyTrip: React.FC = () => {
  const { fromDate, toDate, updateData } = useAppSelect(
    state => state.placeInfo,
  );
  const [pickedDay, setPickedDay] = useState(1);
  const [daysData, setDaysData, removeDaysData, setInitDaysData] = useDaysData(
    Misc.diffDay(fromDate, toDate),
  );
  const mapRef = useRef<any>();
  const handleChangeRef = (map: any) => {
    mapRef.current = map;
  };
  console.log(updateData);
  useEffect(() => {
    if (updateData.length > 0) {
      setInitDaysData([...updateData]);
    }
  }, []);
  console.log(daysData);
  return (
    <MakeTripLayout
      header={<MyTripHeader daysData={daysData} />}
      nav={
        <DayListBar
          daysData={daysData}
          pickedDay={pickedDay}
          setPickedDay={setPickedDay}
          removeDaysData={removeDaysData}
        />
      }
      searchPlace={
        <SearchAddress
          map={mapRef}
          pickedDay={pickedDay}
          onSetDaysData={setDaysData}
        />
      }
      map={<Map mapRef={mapRef} setMapRef={handleChangeRef} />}
    />
  );
};

export default MakeMyTrip;
