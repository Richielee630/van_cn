import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/AgentSlideshow.css'; // Import the custom AgentSlideshow CSS file

import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player'; // Import the audio player component
import '../styles/custom-audio-player.css'; 

const AgentSlideshow = () => {
  const agents = [
    {
      name: 'Richie.Van_CN',
      photo: '/assets/images/agent1.jpg',
      description: 'Richie is a highly skilled sniper and team leader at VAN_CN. With unwavering precision and a calm demeanor, he excels in high-pressure situations. His sharp instincts and ability to assess complex scenarios make him an invaluable asset to the agency. Richie\'s steady hand and sharpshooting skills have saved numerous lives during critical missions. His colleagues admire his intuitive decision-making and the sense of calm he brings to the team, even in the face of adversity. Richie\'s dedication, discipline, and unwavering focus make him an exceptional agent within VAN_CN.',
      audioUrl: '/assets/audio/agent1-audio.wav',
    },
    {
      name: 'Clint.Van_CN',
      photo: '/assets/images/agent2.jpg',
      description: 'Clint is a seasoned support agent at VAN_CN with a deep technical expertise. With years of experience under his belt, he specializes in handling intricate technological systems crucial for mission success. Clint\'s vast knowledge in encryption, hacking, and network security makes him an invaluable asset to the agency\'s operations. Whether it\'s infiltrating highly secure systems or providing crucial tech support in the field, Clint\'s technical prowess ensures smooth operations and information security. His ability to adapt to rapidly evolving technologies and solve complex problems has earned him a reputation as the go-to person for all things technical at VAN_CN.',
      audioUrl: '/assets/audio/agent2-audio.wav',
    },
    {
      name: 'Super.Van_CN',
      photo: '/assets/images/agent3.jpg',
      description: 'Super, known by his codename, is a formidable attacker within the ranks of VAN_CN. With exceptional physical strength and agility, Super possesses unparalleled combat skills. His training in martial arts combined with his natural athleticism allows him to overpower adversaries with ease. Super\'s raw power, combined with his strategic thinking, makes him a force to be reckoned with on the field. Despite his impressive physical capabilities, Super is also known for his relentless work ethic and dedication to honing his skills. His unwavering determination to protect the innocent and uphold justice makes him a vital asset in VAN_CN\'s fight against crime and terrorism.',
      audioUrl: '/assets/audio/agent3-audio.wav', 
    },
    {
      name:'Sebie.Van_CN',
      photo: '/assets/images/agent4.jpg',
      description: 'Sebie is a head officer for VAN_CN\'s GERMAN department. With expertise in assassination, he is a highly skilled and meticulous agent. Sebie operates in a covert and discreet manner, always maintaining an air of mystery. His ability to blend into any environment and execute precise missions without detection makes him an invaluable asset to VAN_CN. Sebie\'s calm and composed demeanor allows him to make quick decisions under pressure, ensuring the success of critical operations. His colleagues respect his dedication, professionalism, and unwavering commitment to protecting the agency\'s interests.',
      audioUrl: '/assets/audio/agent4-audio.wav',
    },
    {
      name:'Zy3.Van_CN',
      photo: '/assets/images/agent5.jpg',
      description:'Zy3 is a key member of VAN_CN\'s quick response unit. Working closely with Clint, he provides tactical support during missions. Zy3\'s expertise lies in strategizing and executing rapid responses in dynamic situations. His quick thinking and adaptability make him an asset when faced with unpredictable challenges. Despite the high-pressure nature of his role, Zy3 maintains an easygoing and humorous disposition. His ability to lighten the mood and boost team morale during intense missions is greatly appreciated by his colleagues. Zy3\'s dedication, teamwork, and tactical prowess make him an invaluable member of the VAN_CN agency.',
      audioUrl: '/assets/audio/agent5-audio.wav',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const audioRef = useRef(null);

  const handleCardChange = (index) => {
    setActiveIndex(index);
    pauseAudio();
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.audio.current.pause();
    }
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => handleCardChange(next),
  };

  return (
    <div className="agent-slideshow-container">
      <Slider {...settings}>
        {agents.map((agent, index) => (
          <div key={index} className={`agent-card ${index === activeIndex ? 'active' : ''}`}>
            <div className="agent-info">
              <img src={agent.photo} alt={agent.name} className="agent-photo" />
              <div className="agent-details">
                <p className="agent-name">{agent.name}</p>
                <p className="agent-description">{agent.description}</p>
              </div>
            </div>
            <div className="agent-audio">
              <AudioPlayer
                ref={audioRef}
                src={agent.audioUrl}
                autoPlay={false}
                controls
                loop={false}
                preload="metadata"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AgentSlideshow;
