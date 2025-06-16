// src/data/jobData.js
import img1 from '../assets/CareerImgFresher1.jpg';
import img2 from '../assets/CareerImgFresher2.jpg';
import img3 from '../assets/CareerImgFresher3.jpg';
import img4 from '../assets/CareerImgFresher4.jpg';

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Build amazing user interfaces with React and Tailwind.",
    location: "Remote",
    department: "Engineering",
    image: img1,  // use imported image here
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description: "Create stunning and intuitive designs.",
    location: "New York",
    department: "Design",
    image: img2,
  },
  {
    id: 3,
    title: "Marketing Specialist",
    description: "Drive marketing campaigns to boost brand awareness.",
    location: "San Francisco",
    department: "Marketing",
    image: img3,
  },
  {
    id: 4,
    title: "Sales Executive",
    description: "Close deals and build strong customer relationships.",
    location: "Chicago",
    department: "Sales",
    image: img4,
  }
];

export default jobData;
