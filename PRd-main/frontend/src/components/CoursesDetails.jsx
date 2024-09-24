import React from 'react';
import './CoursesDetails.css';

function CoursesDetails() {
  const courseContent = [
   
        {
            "id":"content1",
          "title": "Hello World",
          "url": "https://legacy.reactjs.org/docs/hello-world.html"
        },
        {
          "id":"content2",
          "title": "Introducing JSX",
          "url": "https://legacy.reactjs.org/docs/introducing-jsx.html"
        },
        {
            "id":"content3",
          "title": "Rendering Elements",
          "url": "https://legacy.reactjs.org/docs/rendering-elements.html"
        },
        {
            "id":"content4",
          "title": "Components and Props",
          "url": "https://legacy.reactjs.org/docs/components-and-props.html"
        },
        {
            "id":"content5",
          "title": "State and Lifecycle",
          "url": "https://legacy.reactjs.org/docs/state-and-lifecycle.html"
        },
        {
            "id":"content6",
          "title": "Handling Events",
          "url": "https://legacy.reactjs.org/docs/handling-events.html"
        },
        {
            "id":"content7",
          "title": "Conditional Rendering",
          "url": "https://legacy.reactjs.org/docs/conditional-rendering.html"
        },
        {
            "id":"content8",
          "title": "Lists and Keys",
          "url": "https://legacy.reactjs.org/docs/lists-and-keys.html"
        },
        {
            "id":"content9",
          "title": "Forms",
          "url": "https://legacy.reactjs.org/docs/forms.html"
        },
        {
            "id":"content10",
          "title": "Lifting State Up",
          "url": "https://legacy.reactjs.org/docs/lifting-state-up.html"
        },
        {
            "id":"content11",
          "title": "Composition vs Inheritance",
          "url": "https://legacy.reactjs.org/docs/composition-vs-inheritance.html"
        }
    ];

  return (
    <div className='course-details'>
      <div className='course-details-name'>React </div>
      <div className='course-details-content'>
        {courseContent.map((content) => (
          <div className='course-details-resources' key={content.id}>
            <h2>{content.title}</h2>
            <div className='course-details-resources-btn'>
              <a href={content.url} target="_blank" rel="noopener noreferrer">
                <button>Resource</button>
              </a>
              <button><input type="checkbox" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesDetails;
