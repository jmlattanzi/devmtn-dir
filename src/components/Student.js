import React from 'react'
import styles from '../styles/Student.module.scss'

const student = (props) => {
    return (
        <div className={styles.Container}>
            <div className={styles.header}>
                <h1>{props.student.name}</h1>
                <p>
                    {props.page + 1} of {props.lastPage}
                </p>
            </div>
            <br />
            <div className={styles.fromFact}>
                <p>
                    <strong>From: </strong> {props.student.from}
                </p>
                <p>
                    <strong>Fun fact: </strong> {props.student.funFact}
                </p>
            </div>
            <br />
            <h3>Would you rather...</h3>
            <div className={styles.wouldYouRather}>
                <p className={styles.wyr}>
                    <strong>...live in the city or country? </strong>{' '}
                    {props.student.cityOrCountry}
                </p>
                <p className={styles.wyr}>
                    <strong>...be indoors or outdoors? </strong>{' '}
                    {props.student.indoorsOrOutdoors}
                </p>
                <p className={styles.wyr}>
                    <strong>...travel every day or never leave home? </strong>{' '}
                    {props.student.travel}
                </p>
                <p className={styles.wyr}>
                    <strong>...eat at Top's or Subway? </strong>{' '}
                    {props.student.food}
                </p>
                <p className={styles.wyr}>
                    <strong>...have a dog or cat? </strong>{' '}
                    {props.student.dogOrCat}
                </p>
            </div>
        </div>
    )
}

export default student
