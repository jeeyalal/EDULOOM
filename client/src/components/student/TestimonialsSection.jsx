import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-20 px-8 md:px-36'>
      {/* Header */}
      <div className='text-center'>
        <h2 className='text-3xl font-semibold text-gray-800'>What Our Learners Say</h2>
        <p className='md:text-base text-sm text-gray-500 mt-3 max-w-2xl mx-auto'>
          Hear from our learners as they share their journeys of transformation and success — 
          and how our platform has made a real difference in their lives.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col justify-between'
          >
            {/* Header */}
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-100'>
              <img
                className='h-12 w-12 rounded-full object-cover'
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h3 className='text-lg font-medium text-gray-800'>{testimonial.name}</h3>
                <p className='text-gray-600 text-sm'>{testimonial.role}</p>
              </div>
            </div>

            {/* Content */}
            <div className='p-5'>
              <div className='flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                    className='h-4'
                  />
                ))}
              </div>
              <p className='text-gray-600 text-sm mt-4 line-clamp-4'>
                {testimonial.feedback}
              </p>
            </div>

            {/* Read More */}
            <a
              href='#'
              className='text-blue-600 text-sm font-medium px-5 pb-4 hover:underline'
            >
              Read Full Story →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
