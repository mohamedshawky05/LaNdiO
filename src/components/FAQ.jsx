import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaQuestionCircle } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      title: "Consectetur adipiscing elit pellentesque habitant morbi tristique?",
      text: "Mauris augue neque gravida in fermentum et sollicitudin ac orci. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Sed felis eget velit aliquet sagittis id consectetur purus ut.",
    },
    {
      title: "Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae?",
      text: "Tellus elementum sagittis vitae et leo duis ut diam quam. Sed enim ut sem viverra aliquet eget sit amet tellus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.",
    },
    {
      title: "Tempor commodo ullamcorper a lacus vestibulum sed arcu non?",
      text: "Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Turpis massa tincidunt dui ut ornare lectus. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.",
    },
    {
      title: "Dignissim sodales ut eu sem integer vitae justo eget magna?",
      text: "Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Ornare massa eget egestas purus viverra accumsan.",
    },
    {
      title: "Elementum sagittis vitae et leo duis ut diam quam nulla?",
      text: "Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Eget est lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Bibendum neque egestas congue quisque egestas diam in arcu?",
      text: "Fermentum dui faucibus in ornare quam viverra orci sagittis eu. At quis risus sed vulputate odio ut enim blandit volutpat. Mattis pellentesque id nibh tortor id aliquet lectus proin.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 mb-4 bg-white rounded-4 shadow-sm d-flex align-items-start"
          >
            <div className="me-3 text-primary fs-3">
              <FaQuestionCircle />
            </div>
            <div>
              <h5 className="fw-bold">{faq.title}</h5>
              <p className="text-muted mb-0">{faq.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
