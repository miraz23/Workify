import React, {useState} from 'react'

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    const faq=[{
        question: "How do I apply for a job?",
        answer: "You can apply for a job by clicking on the job listing and following the application instructions provided."
      }, {
        question: "Are these jobs remote or on-site?",
        answer: "We offer a mix of remote, on-site, and hybrid job opportunities. Please check the job details for specific information."
      }, {
        question: "Is there a fee to apply for jobs?",
        answer: "No, applying for jobs through our platform is completely free."
      }, {
        question: "How often are new jobs posted?",
        answer: "New jobs are posted daily, so make sure to check back regularly for the latest opportunities."
    }]

    return (
        <div className='faq-sectionp-6 mt-16 text-center rounded-3xl'>
            <h2 className='text-5xl pb-14 custom-text'>Frequently Asked Questions</h2>
            <div className='max-w-3xl mx-auto'>
            {
                faq.map((faq, index) => (
                    <div key={index} className='mb-4 border text-left border-gray-300 rounded-lg'>
                    
                        <button className='w-full text-left px-4 py-2 text-xl font-semibold rounded-lg flex justify-between items-center' onClick={() => toggleFAQ(index)}>
                          {faq.question}
                          <span>{activeIndex === index ? "-" : "\u002B"}</span>
                        </button>   

                        {activeIndex === index && (
                          <div className='px-4 py-2 text-lg rounded-b-lg'>
                            {faq.answer}
                          </div>
                        )}
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Faq