import { useState } from "react";

function ProjectSlideshow() {
  const slides = [
    "/strema-slide-1.png",
    "/strema-slide-2.png",
    "/strema-slide-3.png",
    "/strema-slide-4.png"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
    }
    };

    const previousSlide = () => {
    if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
    }
    };

  return (
    <div className="project-showcase">

      {/* Presentation Preview */}
      <div className="project-preview">

        <img
            key={currentSlide}
            src={slides[currentSlide]}
            alt={`STREMA presentation slide ${currentSlide + 1}`}
        />

      </div>


      {/* Slide Navigation */}
      <div className="project-slide-nav">

        <button
            onClick={previousSlide}
            disabled={currentSlide === 0}
            >
            ←
        </button>

        <span>
          {currentSlide + 1} / {slides.length}
        </span>

        <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            >
            →
        </button>

      </div>


      {/* Project Information */}
      <div className="project-info">

        <div className="project-description">

          <h2>
            STREMA: Stress Detection
            <br />
            and Management System
          </h2>

          <p>
            A CNN-based stress detection and management system
            using facial expressions and physiological signals.
          </p>

        </div>


        <div className="project-links">

          <a
            href="https://drive.google.com/file/d/1lefqPL8gbeSubkV1xlXP3BnwZy23Gjtq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View thesis paper
            <span>→</span>
          </a>

          <a
            href="https://github.com/Calign/STREMA"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
            <span>↗</span>
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectSlideshow;