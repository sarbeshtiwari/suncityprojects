'use client'
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface ProjectFAQsProps {
  faqs: FAQ[];
}

export default function ProjectFAQs({ faqs }: ProjectFAQsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-100 padding position-relative overflow-hidden bg-white">
      <p className="hidden-title" data-position="left">FAQs</p>
      <div className="container-lg">
        <div className="heading mx-auto text-center">
          <h2 className="title-xxl mb-0">FAQs</h2>
        </div>
        <ul className="accordion-list">
          {faqs.map((faq, index) => (
            <li key={index} onClick={() => toggleFAQ(index)}>
              <h5 
                
                style={{ cursor: 'pointer' }}
              >
                {faq.question}
              </h5>
              <div 
                className="answer" 
                style={{ display: activeIndex === index ? 'block' : 'none' }}
              >
                <p>{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
