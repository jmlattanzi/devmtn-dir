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
            showInput: false,
            newForm: {
                name: '',
                from: '',
                funFact: '',
                cityOrCountry: '',
                indoorsOrOutdoors: '',
                travel: '',
                food: '',
                dogOrCat: '',
            },
        }

        this.handlePrevClick = this.handlePrevClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
        this.deleteStudent = this.deleteStudent.bind(this)
        this.showForm = this.showForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.addStudent = this.addStudent.bind(this)
        this.editStudent = this.editStudent.bind(this)
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

    handleChange(e) {
        let obj = {
            ...this.state.newForm,
            [e.target.name]: e.target.value,
        }

        this.setState({
            newForm: obj,
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.newForm)

        let arr = this.state.students.slice()
        arr.push(this.state.newForm)

        this.setState({ students: arr })
    }

    editStudent() {
        // edit lol
        let obj = this.state.students[this.state.currentIndex]
        console.log(obj)
    }

    deleteStudent() {
        if (this.state.students.length > 1) {
            let arr = [...this.state.students]
            arr.splice(this.state.currentIndex, 1)

            this.setState({ students: arr })
        } else {
            return false
        }
    }

    showForm() {
        this.setState({ showInput: !this.state.showInput })
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
                    <button onClick={this.editStudent}>edit</button>
                    <button onClick={this.deleteStudent}>delete</button>
                    <button onClick={this.showForm}>new</button>
                    <button onClick={this.handleNextClick}>next &gt;</button>
                </div>

                <form
                    className={
                        this.state.showInput ? styles.InputForm : styles.Hidden
                    }
                    onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type='text'
                        name='from'
                        placeholder='from'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type='text'
                        name='funFact'
                        placeholder='fun fact'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type='text'
                        name='cityOrCountry'
                        placeholder='city or country'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type='text'
                        name='indoorsOrOutdoors'
                        placeholder='indoors or outdoors'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type='text'
                        name='travel'
                        placeholder='travel or stay at home'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type='text'
                        name='food'
                        placeholder='tops or subway'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type='text'
                        name='dogOrCat'
                        placeholder='dog or cat'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default Container
