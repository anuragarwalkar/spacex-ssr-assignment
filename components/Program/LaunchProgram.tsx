import React, { useState, useEffect } from 'react';
import { getLaunchPrograms } from '../../services/launchProgramService';
import styles from './LaunchProgram.module.scss';
import { useRouter } from 'next/router'

export interface LaunchProgramProps {
    query: any
}

const LaunchProgram: React.SFC<LaunchProgramProps> = ({query}) => {

    const [programs, setPrograms] = useState([]);

    const router = useRouter();

    useEffect(() => {
        (async () => {
            const programs = await getLaunchPrograms(router.asPath);
            setPrograms(programs);
        })();
    }, [query])

    if(!query) {
        return null;
    }

    return (<article  className={styles.launchProgramContainer} data-test-id="launchProgram"> 
        {programs.map((program: any) => {
            const { flight_number, mission_name, launch_year,
                links: { mission_patch_small }, launch_success, rocket} = program as any;
            return <article key={flight_number} className={styles.launchProgramDiv} data-test-id="launchProgramArticle">
                <div className={styles.launchProgramImgDiv}>
                    <img src={mission_patch_small} />
                </div>
                <h4>
                    {`${mission_name} #${flight_number}`}
                </h4>
                {program.mission_id.length > 0 ?
                    <div className='mb-05'>
                        <span className={styles.title}>Mission Ids:</span>
                        <ul>
                            {program.mission_id.map((missionId: string) => {
                                return <li key={missionId}>{missionId}</li>
                            })}
                        </ul>
                    </div> : null}
                <div className='mb-05'>
                    <span className={styles.title}>Launch Year: </span>
                    <span>{launch_year}</span>
                </div>
                <div className='mb-05'>
                    <span className={styles.title}>Successful Launch: </span>
                    <span>{launch_success?.toString()}</span>
                </div>
                <div className='mb-05'>
                    <span className={styles.title}>Successful Landing: </span>
                    {rocket.first_stage.cores[0].land_success ? 'true' : 'false'}
                </div>
            </article>
            
        }
        )}
    </article>);
}


export default LaunchProgram;