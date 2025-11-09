import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import Profile from './Profile';
import Projects from './Projects';
import ResumeDownload from './ResumeDownload';
import Contacts from './Contacts';


function App() {
 return (
 <BrowserRouter>
   <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
     <Header/>
     <main className="flex-grow-1">
      <Routes>
         <Route path='/' element={<Homepage />} />
         <Route path='/profile' element={<Profile />} />
         <Route path='/projects' element={<Projects />} />
         <Route path='/resume' element={<ResumeDownload />} />
         <Route path='/contact' element={<Contacts />} />
      </Routes>
     </main>
     <Footer/>
   </div>
   </BrowserRouter>
  );
}

export default App;