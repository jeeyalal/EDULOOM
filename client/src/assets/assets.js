import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'


export const assets = {
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "Harsh",
    "email": "user.Harsh@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'Imagify has been a game-changer in my daily workflow. Its intuitive interface and high-quality output make it my go-to tool for all image enhancements.'
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'As someone working on visual platforms, Imagify saves me hours each week. The simplicity and speed are unmatched, though I’d love to see more batch features.'
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'I was impressed by how seamlessly Imagify fits into our internal tools. It delivers clean results and works smoothly across devices. A great productivity booster!'
    }
];

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Liam Johnson",
                "imageUrl": "https://randomuser.me/api/portraits/men/12.jpg"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Sophia Martinez",
                "imageUrl": "https://randomuser.me/api/portraits/women/45.jpg"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Noah Brown",
                "imageUrl": "https://randomuser.me/api/portraits/men/28.jpg"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Ava Smith",
                "imageUrl": "https://randomuser.me/api/portraits/women/33.jpg"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Ethan Lee",
                "imageUrl": "https://randomuser.me/api/portraits/men/39.jpg"
            }
        }
    ],
    "totalCourses": 8
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "Aryan Mehta",
            "imageUrl": "https://randomuser.me/api/portraits/men/64.jpg"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "Sneha Sharma",
            "imageUrl": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "Kabir Rathi",
            "imageUrl": "https://randomuser.me/api/portraits/men/52.jpg"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "Ananya Das",
            "imageUrl": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
]

export const dummyCourses = [
    {
        "_id": "605c72efb3f1c2b1f8e4e1a1",
        "courseTitle": "Introduction to JavaScript",
        "courseDescription": "<h2>Master the Essentials of JavaScript</h2><p>JavaScript is one of the most widely-used programming languages, essential for developing interactive and dynamic web applications. This beginner-friendly course will guide you through the core concepts of JavaScript including syntax, variables, control flow, functions, and more.</p><p>By the end of this course, you’ll be confident in writing JavaScript code and building functional web pages from scratch.</p><ul><li>Gain hands-on experience with real coding exercises</li><li>Understand how JavaScript interacts with the browser</li><li>Build interactive web applications with ease</li></ul>",
        "coursePrice": 499.99,
        "isPublished": true,
        "discount": 20,
        "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg",
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_1a23example45678xyz",
            "user_2b34example56789abc",
            "user_3c45example67890def",
            "user_4d56example78901ghi",
            "user_5e67example89012jkl",
            "user_6f78example90123mno",
            "user_7g89example01234pqr"
        ],
        "courseRatings": [
            {
                "userId": "user_1a23example45678xyz",
                "rating": 5,
                "_id": "6773e37360cb0ab974342111"
            },
            {
                "userId": "user_2b34example56789abc",
                "rating": 4,
                "_id": "6773e37360cb0ab974342112"
            },
            {
                "userId": "user_3c45example67890def",
                "rating": 4.5,
                "_id": "6773e37360cb0ab974342113"
            },
            {
                "userId": "user_4d56example78901ghi",
                "rating": 3.5,
                "_id": "6773e37360cb0ab974342114"
            },
            {
                "userId": "user_5e67example89012jkl",
                "rating": 4,
                "_id": "6773e37360cb0ab974342115"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is JavaScript?",
                        "lectureDuration": 16,
                        "lectureUrl": "https://youtu.be/CBWnBi-awSA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "How JavaScript Runs in the Browser",
                        "lectureDuration": 14,
                        "lectureUrl": "https://youtu.be/PkZNo7MFNFg",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Setting Up the Development Environment",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/4l87c2aeB4I",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Understanding Variables (var, let, const)",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/ajdRvxDWH4w",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "JavaScript Data Types",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Type Conversion and Coercion",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/nivdPhnO1ow",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Operators and Expressions",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Arithmetic and Logical Operators",
                        "lectureDuration": 13,
                        "lectureUrl": "https://youtu.be/yc2olxLgKLk",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Assignment, Comparison & Ternary Operator",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/fju9ii8YsGs",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Control Flow",
                "chapterContent": [
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "If-Else Conditions",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/I7dwkY-SKp4",
                        "isPreviewFree": false,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Switch Case Statement",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/CvCiNeLnZ00",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Loops in JavaScript (for, while, do-while)",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/LgzXwpePTTU",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Functions and Scope",
                "chapterContent": [
                    {
                        "lectureId": "lecture12",
                        "lectureTitle": "Function Declaration vs Expression",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/MGJYv8d0Y9c",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture13",
                        "lectureTitle": "Arrow Functions in ES6",
                        "lectureDuration": 14,
                        "lectureUrl": "https://youtu.be/h33Srr5J9nY",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture14",
                        "lectureTitle": "Scope and Lexical Environment",
                        "lectureDuration": 16,
                        "lectureUrl": "https://youtu.be/iJKCj8uAHz8",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }
        ]
    }
    ,

    // pyhton 
    {
        "_id": "675ac1512100b91a6d9b8b24",
        "courseTitle": "Advanced Python Programming",
        "courseDescription": "<h2>Deep Dive into Python Programming</h2><p>Advance your Python skills with this in-depth course designed for developers who already understand the basics. You’ll explore sophisticated features like decorators, generators, and OOP (Object-Oriented Programming) that will make your code more efficient, scalable, and Pythonic.</p><p>With real-world examples and best practices, this course will take you beyond syntax into professional Python development.</p><ul><li>Master advanced data structures like sets and dictionaries</li><li>Build reusable, modular, and scalable code with OOP</li><li>Learn to utilize Python libraries and powerful features</li></ul>",
        "coursePrice": 599.99,
        "isPublished": true,
        "discount": 15,
        "courseThumbnail": "https://img.youtube.com/vi/HdLIMoQkXFA/maxresdefault.jpg",
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_1abcAdvancePy001",
            "user_2defAdvancePy002",
            "user_3ghiAdvancePy003",
            "user_4jklAdvancePy004",
            "user_5mnoAdvancePy005",
            "user_6pqrAdvancePy006"
        ],
        "courseRatings": [
            {
                "userId": "user_1abcAdvancePy001",
                "rating": 5,
                "_id": "6776369244daad0f313d9001"
            },
            {
                "userId": "user_2defAdvancePy002",
                "rating": 4.5,
                "_id": "6776369244daad0f313d9002"
            },
            {
                "userId": "user_3ghiAdvancePy003",
                "rating": 4,
                "_id": "6776369244daad0f313d9003"
            },
            {
                "userId": "user_4jklAdvancePy004",
                "rating": 5,
                "_id": "6776369244daad0f313d9004"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:47:54.446Z",
        "__v": 3,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced Data Structures",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Lists and Tuples in Python",
                        "lectureDuration": 19,
                        "lectureUrl": "https://youtu.be/PQsB49MY4hQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Dictionaries & Sets Deep Dive",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/qVyvmzFxF_o",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Object-Oriented Programming",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Classes and Objects",
                        "lectureDuration": 45,
                        "lectureUrl": "https://youtu.be/Ej_02ICOIgs",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Inheritance and Polymorphism",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/f0TrMH9s-VE",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ]
    }
    ,

    // cyber 
    {
        "_id": "605c72efb3f1c2b1f8e4e1ae",
        "courseTitle": "Cybersecurity Basics",
        "courseDescription": "<h2>Protect Systems and Networks</h2><p>This hands-on course introduces cybersecurity from the ground up. You'll explore key topics such as threat modeling, password safety, network protection, and ethical hacking basics.</p><p>By completing this course, you will be able to identify digital vulnerabilities and adopt defensive mechanisms to secure both personal and organizational data.</p><ul><li>Recognize and analyze cyber threats</li><li>Practice safe password and network policies</li><li>Explore CTF and penetration testing basics</li></ul>",
        "coursePrice": 699.99,
        "isPublished": true,
        "discount": 15,
        "courseThumbnail": "https://img.youtube.com/vi/v7BNtpw53AA/maxresdefault.jpg",
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_cyber001",
            "user_cyber002",
            "user_cyber003",
            "user_cyber004",
            "user_cyber005"
        ],
        "courseRatings": [
            {
                "userId": "user_cyber001",
                "rating": 5
            },
            {
                "userId": "user_cyber003",
                "rating": 4.5
            },
            {
                "userId": "user_cyber004",
                "rating": 4
            }
        ],
        "createdAt": "2024-12-27T11:30:00.000Z",
        "updatedAt": "2024-12-31T04:14:49.773Z",
        "__v": 2,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Cybersecurity",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cybersecurity?",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/Yr0xPVFcf-U",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Types of Cyber Threats",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/aRbKFCY4tjE",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Basic Security Practices",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Password Management Best Practices",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/YoTN5S6dwSM",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Network Security Essentials",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/9K_22QkEY-8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Capture The Flag (CTF) Introduction",
                "chapterContent": [
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "What is CTF in Cybersecurity?",
                        "lectureDuration": 14,
                        "lectureUrl": "https://youtu.be/nl-hTx30j9Y",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ]
    }
    ,


    // react 
    {
        "_id": "605c72efb3f1c2b1f8e4e1a7",
        "courseTitle": "Master React",
        "courseDescription": "<h2>Master React for Front-End Development</h2><p>Learn React from the ground up in this comprehensive course tailored for aspiring frontend developers. You'll cover React fundamentals like JSX, components, props, hooks, and state management.</p><p>By the end, you'll be building responsive and production-ready single-page applications (SPAs).</p><ul><li>Create interactive UIs with React</li><li>Utilize useState, useEffect, and useRef</li><li>Build and deploy real-world projects</li></ul>",
        "coursePrice": 999.99,
        "isPublished": true,
        "discount": 25,
        "courseThumbnail": "https://img.youtube.com/vi/b9eMGE7QtTk/maxresdefault.jpg",
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_react001",
            "user_react002",
            "user_react003",
            "user_react004",
            "user_react005"
        ],
        "courseRatings": [
            {
                "userId": "user_react001",
                "rating": 4.5
            },
            {
                "userId": "user_react003",
                "rating": 5
            },

        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "__v": 2,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "HTML & CSS in React",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to React: JSX & HTML",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/qp6e0tucEhw",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Styling in React with CSS",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/SZcGD2P6Kcc",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "JavaScript & DOM in React",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "JavaScript Basics for React",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/bMknfKXIFA8",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Manipulating DOM using useRef",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/2JNRq2nPR4A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ]
    }
    ,

    //clocud
    {
        "_id": "605c72efb3f1c2b1f8e4e1ac",
        "courseTitle": "Cloud Computing Essentials",
        "courseDescription": "<h2>Master Cloud Fundamentals</h2><p>Learn the foundations of cloud computing and explore popular cloud platforms like AWS, Azure, and Google Cloud. This course is ideal for IT professionals and developers looking to transition to cloud-based solutions.</p><p>By the end of this course, you will understand cloud services, deployment models, and best practices for using cloud resources efficiently.</p><ul><li>Understand cloud architecture</li><li>Learn to work with AWS, Azure, and GCP</li><li>Explore serverless computing and storage solutions</li></ul>",
        "coursePrice": 649.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cloud Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cloud Computing?",
                        "lectureDuration": 6,
                        "lectureUrl": "https://youtu.be/M988_fsOSWo",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Cloud Service Models (IaaS, PaaS, SaaS)",
                        "lectureDuration": 11,
                        "lectureUrl": "https://youtu.be/RWgW-CgdIk0",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Exploring AWS",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "AWS Basics: Compute, S3, EC2",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/UmQnenLf_Cs",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "AWS Tutorial for Beginners (2025)",
                        "lectureDuration": 14,
                        "lectureUrl": "https://youtu.be/Nzv-tzU-UAw",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Exploring Google Cloud & Azure",
                "chapterContent": [
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Google Cloud Introduction",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/o1TlRF3jms8",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Azure Fundamentals Overview",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/ksDAQX6MbeE",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_a1b2c3d4e5",
            "user_x9y8z7w6v5",
            "user_newStudent001",
            "user_cloudMaster2025"
        ],
        "courseRatings": [
            { "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w", "rating": 4, "_id": "678001" },
            { "userId": "user_a1b2c3d4e5", "rating": 5, "_id": "678002" },
            { "userId": "user_x9y8z7w6v5", "rating": 4, "_id": "678003" },
            { "userId": "user_cloudMaster2025", "rating": 3, "_id": "678004" }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:32:55.357Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/dmGybCohHsw/maxresdefault.jpg",

    },

    // data science
    {
        "_id": "605c72efb3f1c2b1f8e4e1ad",
        "courseTitle": "Data Science with Python",
        "courseDescription": "<h2>Start Your Data Science Journey</h2><p>Data Science is one of the most in-demand fields in the world. This course teaches you the essentials of data analysis, visualization, and machine learning using Python. Learn libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.</p><p>By the end of this course, you will be equipped to work on real-world data projects and gain insights from data.</p><ul><li>Data cleaning and preprocessing</li><li>Exploratory Data Analysis (EDA)</li><li>Build predictive models</li></ul>",
        "coursePrice": 789.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Python for Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Python Basics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/QUT1VHiLmmI",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Working with NumPy",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/8Mpc9ukltVA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Data Visualization",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to Matplotlib",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/FN78JowwpSY",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Advanced Visualizations with Seaborn",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/6GUZXDef2U0",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Bonus: Pandas Introduction",
                "chapterContent": [
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Getting Started with Pandas",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/zak2QokV-Vg",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_dataNinja42",
            "user_dsBeginner101",
            "user_pythoLover88"
        ],
        "courseRatings": [
            { "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w", "rating": 5, "_id": "678101" },
            { "userId": "user_dataNinja42", "rating": 4, "_id": "678102" },
            { "userId": "user_dsBeginner101", "rating": 5, "_id": "678103" },
            { "userId": "user_pythoLover88", "rating": 4, "_id": "678104" }
        ],
        "createdAt": "2024-12-27T10:00:00.000Z",
        "updatedAt": "2024-12-31T09:57:48.992Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/mkv5mxYu0Wk/maxresdefault.jpg"
    },

    //ml
    {
        "_id": "605c72efb3f1c2b1f8e4e1aa",
        "courseTitle": "Data Science and Machine Learning",
        "courseDescription": "<h2>Unlock the Power of Data</h2><p>This course provides a comprehensive introduction to data science and machine learning. You will learn how to analyze data, build predictive models, and apply machine learning algorithms to real-world problems.</p><p>By the end of this course, you will have a solid understanding of data manipulation, visualization, and machine learning techniques, enabling you to make data-driven decisions.</p><ul><li>Understand data analysis and visualization</li><li>Learn machine learning algorithms and their applications</li><li>Work with popular data science libraries like Pandas and Scikit-Learn</li></ul>",
        "coursePrice": 899.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Data Science?",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/_f1bbwY1j2k",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Data Collection and Cleaning",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/Uhjg.v5kH-A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Machine Learning Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Supervised vs Unsupervised Learning",
                        "lectureDuration": 13,
                        "lectureUrl": "https://youtu.be/Hcw1cDvF2wc",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Building Your First Model",
                        "lectureDuration": 14,
                        "lectureUrl": "https://youtu.be/7eh4d6sabA0",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Model Evaluation & Tuning",
                "chapterContent": [
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Evaluating Model Performance",
                        "lectureDuration": 11,
                        "lectureUrl": "https://youtu.be/tvFkbtL3q3o",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Hyperparameter Tuning Explained",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/N3Mo6-AJsh4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_dataNinja42",
            "user_dsBeginner101",
            "user_pythoLover88"
        ],
        "courseRatings": [
            { "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w", "rating": 5, "_id": "678101" },
            { "userId": "user_dataNinja42", "rating": 4, "_id": "678102" },
            { "userId": "user_dsBeginner101", "rating": 5, "_id": "678103" },
            { "userId": "user_pythoLover88", "rating": 4, "_id": "678104" }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:53:59.753Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/jgPChUZP57I/maxresdefault.jpg"
    },

    //cyber
    {
        "_id": "605c72efb3f1c2b1f8e4e1ab",
        "courseTitle": "Introduction to Cybersecurity",
        "courseDescription": "<h2>Protect the Digital World</h2><p>This course covers the essentials of cybersecurity, including understanding threats, vulnerabilities, and how to secure systems against cyber-attacks. Ideal for beginners, this course will prepare you for a career in cybersecurity.</p><p>By the end of this course, you will be able to identify and mitigate risks, implement security best practices, and understand the fundamentals of encryption and network security.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 599.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cybersecurity Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Cybersecurity",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/jw_Kp2mP2nw",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding Cyber Threats",
                        "lectureDuration": 7,
                        "lectureUrl": "https://youtu.be/inWWhr5tnEA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Network Security Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Securing Networks",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/ndSJZzRjARs",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Firewalls and VPNs",
                        "lectureDuration": 11,
                        "lectureUrl": "https://youtu.be/L-fbdxP6LnQ",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_1abcAdvancePy001",
            "user_2defAdvancePy002",
            "user_3ghiAdvancePy003",
            "user_4jklAdvancePy004",
            "user_5mnoAdvancePy005",
            "user_6pqrAdvancePy006"
        ],
        "courseRatings": [
            
            {
                "userId": "user_2defAdvancePy002",
                "rating": 4.5,
                "_id": "6776369244daad0f313d9002"
            },
            {
                "userId": "user_3ghiAdvancePy003",
                "rating": 4,
                "_id": "6776369244daad0f313d9003"
            },
            {
                "userId": "user_4jklAdvancePy004",
                "rating": 5,
                "_id": "6776369244daad0f313d9004"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/njPY7pQTRWg/maxresdefault.jpg"
    }
]