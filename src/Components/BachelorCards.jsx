import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons';

function BachelorCards() {

  const [popupVisible1, setPopupVisible1] = useState(false);
  const [popupVisible2, setPopupVisible2] = useState(false);
  const [popupVisible3, setPopupVisible3] = useState(false);
  const [popupVisible4, setPopupVisible4] = useState(false);

  const openPopup1 = () => {
    setPopupVisible1(true);
     document.body.style.overflow = 'hidden';
  };

  const closePopup1 = () => {
    setPopupVisible1(false);
    document.body.style.overflow = 'auto';
  };

  const openPopup2 = () => {
    setPopupVisible2(true);
     document.body.style.overflow = 'hidden';
  };

  const closePopup2 = () => {
    setPopupVisible2(false);
    document.body.style.overflow = 'auto';
  };
  const openPopup3 = () => {
    setPopupVisible3(true);
     document.body.style.overflow = 'hidden';
  };

  const closePopup3 = () => {
    setPopupVisible3(false);
    document.body.style.overflow = 'auto';
  };
  const openPopup4 = () => {
    setPopupVisible4(true);
     document.body.style.overflow = 'hidden';
  };

  const closePopup4 = () => {
    setPopupVisible4(false);
    document.body.style.overflow = 'auto';
  };

  return ( 
    <div className="  w-full h-auto flex flex-wrap flex-row items-center justify-center bg-customWhite">



  {popupVisible1 && (
          <div className="fixed top-[3%] left-[10%] transform -translate-x-1/2 -translate-y-1/2    z-50">
            <div className="popup-overlay rounded-xl h-[85vh] shadow-2xl bg-[#e3e3e4] w-[50vw] m-auto absolute">
              <div className="popup-content text-center scrollable-content">
                <div className="bg-gray-100 min-h-screen">
                 
                 
                </div>
                <button
                  className="right-5 top-0 absolute text-5xl"
                  onClick={closePopup1}
                >
                  ×
                </button>
 


              </div>
            </div>
          </div>
        )}

  
  <div className="sm:w-3/4 h-[470px] md:w-1/3 lg:w-1/4 w-full p-4 shadow-lg m-3 bg-white">

    <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro2.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold text-customblue">Bachelor of Arts</h3>
        <p className='text-customblue mb-2 text-xs'>(Tourism Administration)</p>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500">Know More</button>
      </div>
    </div>
  </div>
   
   <div className="sm:w-3/4 h-[470px] md:w-1/3 lg:w-1/4 w-full p-4  m-3 bg-white">
    <div className="overflow-hidden">
      <img className="h-[250px] w-full object-cover  " src="../../Images/pro1.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue"> Computer Applications</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500">Know More</button>
      </div>
    </div>
  </div>

  <div className="sm:w-3/4 h-[470px] md:w-1/3 lg:w-1/4 w-full  p-4  m-3 bg-white">
    <div className="overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/download_1.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue">Bachelor of Business Administration</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500">Know More</button>
      </div>
    </div>
  </div>
    
  
     
  <div className="sm:w-3/ h-[470px] md:w-1/3 lg:w-1/4 w-full p-4  m-3 bg-white">
    <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro3.jpeg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue">Bachelor of Commerce</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500">Know More</button>
      </div>
    </div>
  </div>
     
  <div className="sm:w-3/4 h-[470px] md:w-1/3 lg:w-1/4 w-full p-4 m-3 bg-white">
    <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro4.avif" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold  text-customblue">Bachelor of Arts</h3>
        <p className='text-customblue mb-2 text-xs'>(Journalism And Mass Comminication)</p>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500">Know More</button>
      </div>
    </div>
  </div>
    
  <div className="sm:w-3/4 h-[470px] md:w-1/3 lg:w-1/4 w-full p-4  m-3 bg-white">
    <div className="overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro5.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue">Bachelor of Arts</h3>
        <p className='text-customblue mb-2 text-xs'>( Mass Communication)</p>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500">Know More</button>
      </div>
    </div>
  </div>
   </div>  
 
 
  

  )
}

export default BachelorCards



