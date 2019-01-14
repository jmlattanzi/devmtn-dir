import React, { Component } from 'react'
import Student from './Student'
import { students } from '../StudentInfo'
import styles from '../styles/Container.module.scss'

class Container extends Component {
    constructor() {
        super()

        this.state = {
            students: students,
            currentIndex: 0,
        }

        this.handlePrevClick = this.handlePrevClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
    }

    handlePrevClick() {
        if (this.state.currentIndex !== 0) {
            let index = this.state.currentIndex - 1
            this.setState({ currentIndex: index })
        } else {
            return false
        }
    }

    handleNextClick() {
        if (this.state.currentIndex < this.state.students.length - 1) {
            let index = this.state.currentIndex + 1
            this.setState({ currentIndex: index })
        } else {
            return false
        }
    }

    render() {
        return (
            <div className={styles.Container}>
                <Student
                    student={this.state.students[this.state.currentIndex]}
                    page={this.state.currentIndex}
                    lastPage={this.state.students.length}
                />
                <div className={styles.Controls}>
                    <button onClick={this.handlePrevClick}>&lt; prev</button>
                    <button onClick={this.handleNextClick}>next &gt;</button>
                </div>
            </div>
        )
    }
}

export default Container
