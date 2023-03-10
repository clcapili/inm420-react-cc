import React from 'react';
import { Link } from 'react-router-dom';

// images
import weatherApiImg from './../assets/img/project-weatherapi.jpg';
import responsiveGridImg from './../assets/img/project-responsivegrid.jpg';
import nxrImg from './../assets/img/project-nxrental.jpg';
import plusroomImg from './../assets/img/project-plusroom.jpg';

import icon from './../assets/img/icon-arrow-up-right.svg';
import iconLong from './../assets/img/icon-arrow-long-right.svg';

export default function Home() {
  return (
    <div className='pages home'>
      <div className='container'>
        <section className='hero-column'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>I design &amp; <span>build products.</span></h2>
            </div>
            <div className='col-md-5'>
              <div className='description'>
                <p>My expertise includes full-stack development, responsive design, CMS and RestAPI implementation, and intuitive and user-centered design.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='row featured-projects'>
          <div className='col-md-5'>
            <div className='featured-project'>
              <Link to='/'>
                <img src={weatherApiImg} className='project-img' alt='WeatherAPI project using RestAPI' />

                <div className='project-details'>
                  <div className='project-name'>
                    <h6>WeatherAPI</h6>
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </div>

                  <small>Code / Personal</small>
                </div>
                
                <p>A web app that displays current weather data for a specified location.</p>
              </Link>
            </div>
          </div>

          <div className='col-md-7'>
            <div className='featured-project'>
              <Link to='/'>
                <img src={responsiveGridImg} className='project-img' alt='Responsive Page project using CSS Grid' />

                <div className='project-details'>
                  <div className='project-name'>
                    <h6>Grid Responsive Page</h6>
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </div>

                  <small>UI / Design / Code / Personal</small>
                </div>
                
                <p>A web design which I utilized the CSS Grid system to create a flexible and responsive layout for different screen sizes and devices</p>
              </Link>
            </div>
          </div>
        </section>

        <section className='row'>
          <div className='col-md-7'>
            <div className='featured-project'>
              <Link to='/'>
                <img src={nxrImg} className='project-img' alt='Northern Xscape Rentals App UI/UX project' />

                <div className='project-details'>
                  <div className='project-name'>
                    <h6>Northern Xscape Rentals App</h6>
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </div>

                  <small>UI/UX / Design / Personal</small>
                </div>
                
                <p>A user-centered designed mobile app for Jet-ski and Snowmobile rentals.</p>
              </Link>
            </div>
          </div>

          <div className='col-md-5'>
            <div className='featured-project'>
              <Link to='/'>
                <img src={plusroomImg} className='project-img' alt='PlusRoom App UI/UX project' />

                <div className='project-details'>
                  <div className='project-name'>
                    <h6>PlusRoom App</h6>
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </div>

                  <small>UI/UX / Design / Personal</small>
                </div>
                
                <p>An intuitive mobile app designed for students providing interactive learning experiences.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className='row'>
          <Link to='/projects' className='bottom-link'>
            <h2>View All Projects</h2>
            <img src={iconLong} alt='Icon arrow long right for next page links' />
          </Link>
        </section>
      </div>
    </div>
  );
}