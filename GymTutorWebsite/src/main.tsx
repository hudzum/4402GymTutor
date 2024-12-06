import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './homepage/homepage.tsx'
import DemoPage from './dashboard/dash-page.tsx'
import { MemberForm } from './homepage/newMemberForm.tsx'
import { ClassCard } from './ClassPage/class-card.tsx'
import { ClassList } from './ClassPage/class-page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <h1>View our Classes</h1>
    <ClassList/>
    <h1>Manager View</h1>
    <DemoPage/>
    
  </StrictMode>,
)
