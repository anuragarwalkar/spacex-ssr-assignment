import React, { useEffect } from 'react';
import { years, launch, landing } from '../../utils/constants'
import { useRouter } from 'next/router'
import { useState } from 'react';

export interface FilterProps {
    query: any
}

const Filter: React.SFC<FilterProps> = ({query}) => {

    const router = useRouter();

    useEffect(()=> {
        const { query: {launch_success, land_success, year} } = router;


    }, [query])

    const [launchSuccessArray, setLaunchSuccessArray] = useState(launch);
    const [landSuccessArray, setLandSuccessArray] = useState(landing);
    const [launchYearsArray, setLaunchYearsArray] = useState(years);

    const filterHandler = (filter: string, value: string, id: number) => {
        debugger
        const bool = value === 'true';
       
        let query: any = { ...router.query };

        query = mapFiltersArray(filter, bool, value, id, query);

        router.push({ query });
    }

    const updateIsActive = (id: number) => {
        return (item: any ) => {
            item.id === id ? item.isActive = true : item.isActive = false
            return item;
        }
    }

    const mapFiltersArray = (filterType: string, bool: boolean ,value: string, id: number,query?: any) => {
        if (filterType === 'launch_success') {
            const updateData: any [] = launchSuccessArray.map(updateIsActive(id))
            setLaunchSuccessArray(updateData);
            query ? query.launch_success = bool : null;
        } else if (filterType === 'land_success') {
            const updateData: any [] = landSuccessArray.map(updateIsActive(id));
            setLandSuccessArray(updateData);
            query ? query.land_success = bool : null;
        } else if (filterType === 'launch_year') {
            const updateData: any []  = years.map(updateIsActive(id));
            setLaunchYearsArray(updateData);
            query ? query.launch_year = value : null;
        }

        return query ? query : {};
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