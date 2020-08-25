import React, { useEffect } from 'react';
import { years, launch, landing } from '../../utils/constants'
import { useRouter } from 'next/router'
import { useState } from 'react';

export interface FilterProps {
    query: any
}

const Filter: React.SFC<FilterProps> = (props) => {

    const router = useRouter();

    useEffect(() => {
        let { query: queryArray } = router;
        const { query: { launch_success, land_success, launch_year } } = router;

        if (launch_success || land_success || launch_year) {
            const queryArrayKeys = Object.keys(queryArray) as any;
            const queryArrayValues = Object.values(queryArray) as any;

            queryArrayKeys.forEach((query: string, index: number) => {
                mapFiltersArray(query, queryArrayValues[index]);
            });
        }
    }, [])

    const [launchSuccessArray, setLaunchSuccessArray] = useState(launch);
    const [landSuccessArray, setLandSuccessArray] = useState(landing);
    const [launchYearsArray, setLaunchYearsArray] = useState(years);

    const filterHandler = (filter: string, value: string) => {
        let query: any = { ...router.query };

        query = mapFiltersArray(filter, value, query);

        router.push({ query });
    }

    const updateIsActive = (value: any) => {
        return (item: any) => {
            item.value == value ? item.isActive = true : item.isActive = false
            return item;
        }
    }

    const mapFiltersArray = (filterType: string, value: string, query?: any) => {
        if (filterType === 'launch_success') {
            const updateData: any[] = launchSuccessArray.map(updateIsActive(value))
            setLaunchSuccessArray(updateData);
            query ? query.launch_success = value === 'true' : null;
        } else if (filterType === 'land_success') {
            const updateData: any[] = landSuccessArray.map(updateIsActive(value));
            setLandSuccessArray(updateData);
            query ? query.land_success = value === 'true' : null;
        } else if (filterType === 'launch_year') {
            const updateData: any[] = years.map(updateIsActive(value));
            setLaunchYearsArray(updateData);
            query ? query.launch_year = value : null;
        }

        return query ? query : {};
    }

    if(!props.query) {
        return null;
    }

    return (
        <div className="filters" data-test-id="filters">
            <span className="filtersTitle">Filters</span>
            <span className="filtersHeading">Successful Year</span>
            <div className="filtersContailer" data-test-id="filtersContailer">
                {launchYearsArray.map(({ value, id, isActive }) => {

                    return <div onClick={() => filterHandler('launch_year', value.toString())} key={id} className={isActive ? 'active' : ''} >
                        {value}
                    </div>
                })}
            </div>
            <span className="filtersHeading">Successful Launch</span>
            <div className="filtersContailer" data-test-id="filtersContailer">
                {launchSuccessArray.map(({ value, id, isActive }) => {
                    return <div onClick={() => filterHandler('launch_success', value)} key={id} className={isActive ? 'active' : ''} >
                        {value}
                    </div>
                })}
            </div>
            <span className="filtersHeading">Successful Landing</span>
            <div className="filtersContailer"data-test-id="filtersContailer">
                {landSuccessArray.map(({ value, id, isActive }) => {
                    return <div onClick={() => filterHandler('land_success', value)} key={id} className={isActive ? 'active' : ''} >
                        {value}
                    </div>
                })}
            </div>
        </div>
    );
}

export default Filter;