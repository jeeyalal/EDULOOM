import { createContext, useEffect, useState } from "react"
import App from './../App';
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext()

export const AppContextProvider = (props) => {


    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()


    const [allCourses, setallCourses] = useState([])
    const [isEducator, setisEducator] = useState(true)
    const [enrolledCourses, setenrolledCourses] = useState([])

    // fetch all course
    const fecAllcourses = async () => {
        setallCourses(dummyCourses)

    }


    // funtion calucate average rationf of course

    const caculateRating = (course) => {
        if (course.courseRatings.length == 0) {
            return 0
        }
        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length
    }


    // function to calculate course chapter time

    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })

    }

    // function to calculate course duration

    const calculateCourseDuration = (course) => {
        let time = 0;

        course.courseContent.map((chapter) => chapter.chapterContent.map((lectures) => time += lectures.lectureDuration))
        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })

    }

    // total number of lecturs in course

    const calculateNumberOfLectures = (course) => {
        let totalLecture = 0;
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLecture += chapter.chapterContent.length
            }

        });
        return totalLecture;
    }

    // fetch user enrilled courses
    const fetchenrolledCourses = async ()=>{
        setenrolledCourses(dummyCourses)
    }

    useEffect(() => {
        fecAllcourses()
        fetchenrolledCourses()
    }, [])


    const value = {
        currency, allCourses, navigate, caculateRating, isEducator, setisEducator, calculateNumberOfLectures, calculateCourseDuration, calculateChapterTime , enrolledCourses ,fetchenrolledCourses
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}