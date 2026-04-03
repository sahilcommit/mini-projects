
import Card from './components/Card';
import { Bookmark, Dice1 } from 'lucide-react';
const App = () => {
  const jobOpenings = [
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
      "companyName": "Google",
      "datePosted": "1 day ago",
      "post": "Director of Application Engineering",
      "tag1": "Full-time",
      "tag2": "Senior Level",
      "pay": "$185/hr",
      "location": "Bengaluru, India"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/3840px-Amazon_logo.svg.png",
      "companyName": "Amazon",
      "datePosted": "1 day ago",
      "post": "Support Engineer II, Payment Services",
      "tag1": "Full-time",
      "tag2": "Mid Level",
      "pay": "$65/hr",
      "location": "Bengaluru, India"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      "companyName": "Apple",
      "datePosted": "3 days ago",
      "post": "Test Design Lead - Hardware Engineering",
      "tag1": "Full-time",
      "tag2": "Senior Level",
      "pay": "$115/hr",
      "location": "Bengaluru, India"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      "companyName": "Microsoft",
      "datePosted": "2 days ago",
      "post": "Software Engineer II (Security)",
      "tag1": "Full-time",
      "tag2": "Junior Level",
      "pay": "$82/hr",
      "location": "Noida, India"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      "companyName": "Meta",
      "datePosted": "2 days ago",
      "post": "Consumer Marketing Manager, APAC",
      "tag1": "Full-time",
      "tag2": "Mid Level",
      "pay": "$95/hr",
      "location": "Mumbai, India"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      "companyName": "Netflix",
      "datePosted": "2 days ago",
      "post": "Compensation Manager",
      "tag1": "Full-time",
      "tag2": "Senior Level",
      "pay": "$130/hr",
      "location": "Mumbai, India"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      "companyName": "NVIDIA",
      "datePosted": "1 week ago",
      "post": "Deep Learning Engineer",
      "tag1": "Full-time",
      "tag2": "Mid Level",
      "pay": "$145/hr",
      "location": "Hyderabad, India"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      "companyName": "Tesla",
      "datePosted": "3 days ago",
      "post": "Autopilot Software Engineer",
      "tag1": "Full-time",
      "tag2": "Senior Level",
      "pay": "$160/hr",
      "location": "Bengaluru, India"
    },
    {
      "brandLogo": "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
      "companyName": "Adobe",
      "datePosted": "Today",
      "post": "Senior Frontend Developer",
      "tag1": "Full-time",
      "tag2": "Senior Level",
      "pay": "$98/hr",
      "location": "Noida, India"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      "companyName": "Salesforce",
      "datePosted": "2 days ago",
      "post": "Technical Architect",
      "tag1": "Full-time",
      "tag2": "Senior Level",
      "pay": "$125/hr",
      "location": "Hyderabad, India"
    }
  ];
  
  return (
    
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
                  <Card logo={elem.brandLogo} company={elem.companyName}  date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}  />
               </div>
        
      })}
     
    </div>
  )
}

export default App
