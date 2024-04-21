import React from "react";
import TeamCard from "../components/TeamCard.jsx";

const DataTeamImages = [
  {
    id: 1,
    name : "Ajinkya Bobade",
    src: "https://i.postimg.cc/Z5JyZN9p/ajinkya.jpg",
    linkedInId : "https://www.linkedin.com/in/abhishek-bhosale-423abb1ba/",
    githubId : "https://github.com/AbhishekBhosale46"
  },

  {
    id: 2,
    name : "Geetesh Chaudhary",
    src: "https://i.postimg.cc/JhnDHW5h/gitrdh.jpg",
    linkedInId : "https://www.linkedin.com/in/maheshwar-bhosale-b44267231/",
    githubId : "https://github.com/Maheshwar098"
  },

  {
    id: 3,
    name : "Sarang Shukla",
    src: "https://i.postimg.cc/kMx444Pc/sarang.jpg",
    linkedInId : "https://www.linkedin.com/in/shreyaschandolkar/",
    githubId : "https://github.com/Chandolkar001"
  },

  {
    id: 4,
    name : "Shreyas Shirwadkar",
    src: "https://i.postimg.cc/NfDj6zM2/shreyas.jpg",
    linkedInId : "https://www.linkedin.com/in/harshbhat/" ,
    githubId : "https://github.com/Harususan"  
  },

  {
    id: 5,
    name : "Aditya Senapati",
    src: "https://i.postimg.cc/g0XcPcK3/aditya.jpg",
    linkedInId : "https://www.linkedin.com/in/devrajshetake/",
    githubId : "https://github.com/devrajshetake"
  },
  {
    id: 6,
    name : "Vedant Agrawal",
    src: "https://i.postimg.cc/5y3bmXxW/piyush.jpg",
    linkedInId : "https://www.linkedin.com/in/devrajshetake/",
    githubId : "https://github.com/devrajshetake"
  },

]

const TechTeamImages = [
    {
        id:1,
        name : "Abhishek Bhosale",
        src:"https://i.postimg.cc/Qdwm4LmY/Abhishek.jpg"
    },

    {
        id:2,
        name:"Maheshwar Bhosale",
        src: "https://i.postimg.cc/4xVsyGYp/IMG-20240312-WA0009.jpg"
    }

]

const OurTeam = () => {
  return (
    <div>
      <div className="container ">
        <div className="h3 ourTeamTitle mb-4 mb-sm-3 text-center mt-5">Data Team</div>
        <div className="row g-1 g-sm-1 gy-4 align-items-center justify-content-center">
          {
            DataTeamImages.map(
              (img) => (
                <div className="col-sm-4">
                  <TeamCard key={img.id} src={img.src} name = {img.name} linkedInId={img.linkedInId} githubId={img.githubId}/>
                </div>
              )
            )
          }
        </div>
      </div>  
      <div className="container ">
        <div className="h3 ourTeamTitle mb-4 mb-sm-3 text-center mt-5">Tech Team</div>
        <div className="row g-1 g-sm-1 gy-4 align-items-center justify-content-center">
          {
            TechTeamImages.map(
              (img) => (
                <div className="col-sm-4">
                  <TeamCard key={img.id} src={img.src} name = {img.name} linkedInId={img.linkedInId} githubId={img.githubId}/>
                </div>
              )
            )
          }
        </div>
        <br />
      </div>  
    </div>
  );
};

export default OurTeam;
