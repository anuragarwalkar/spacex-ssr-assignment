import * as React from 'react';
import { years, launch, landing } from '../../utils/constants'
import { useRouter } from 'next/router'
import { useState } from 'react';

export interface FilterProps {

}

const Filter: React.SFC<FilterProps> = () => {

    const router = useRouter();

    const [launchSuccessArray, setLaunchSuccessArray] = useState(launch);
    const [landSuccessArray, setLandSuccessArray] = useState(landing);
    const [launchYearsArray, setLaunchYearsArray] = useState(years);

    const filterHandler = (filter: string, value: string, id: number) => {
        const bool = value === 'true';

        const updateIsActive = (item: any) => {
            item.id === id ? item.isActive = true : item.isActive = false
            return item;
        }
        const query: any = { ...router.query };

        if (filter === 'launch_success') {
            const updateData = launchSuccessArray.map(updateIsActive)
            setLaunchSuccessArray(updateData);
            query.launch_success = bool;
        } else if (filter === 'land_success') {
            const updateData = landSuccessArray.map(updateIsActive);
            setLandSuccessArray(updateData);
            query.land_success = bool;
        } else if (filter === 'launch_year') {
            const updateData = years.map(updateIsActive);
            setLaunchYearsArray(updateData);
            query.launch_year = value;
        }

        router.push({ query });
    }

    return (
        <div className="filters">
            <span className="filtersTitle">Filters</span>
            <span className="filtersHeading">Successful Year</span>
            <div className="filtersContailer">
                {launchYearsArray.map(({ year, id, isActive }) => {

                    return <div onClick={() => filterHandler('launch_year', year.toString(), id)} key={id} className={isActive ? 'active' : ''} >
                        {year}
                    </div>
                })}
            </div>
            <span className="filtersHeading">Successful Launch</span>
            <div className="filtersContailer">
                {launchSuccessArray.map(({ value, id, isActive }) => {
                    return <div onClick={() => filterHandler('launch_success', value, id)} key={id} className={isActive ? 'active' : ''} >
                        {value}
                    </div>
                })}
            </div>
            <span className="filtersHeading">Successful Landing</span>
            <div className="filtersContailer">
                {landSuccessArray.map(({ value, id, isActive }) => {
                    return <div onClick={() => filterHandler('land_success', value, id)} key={id} className={isActive ? 'active' : ''} >
                        {value}
                    </div>
                })}
            </div>
        </div>
    );
}

export default Filter;