import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

export default function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Photoshop'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'C'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Extra Cover'} span={'Extra Cover'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'My layouts will work on any device, big or small'}
                />
                <ServicesSection image={intelligence} title={'Intuitive'} 
                text={'Strong preference for easy to use, intuitive UX/UI.'}
                />
                <ServicesSection image={gamedev} title={'Dynamic'} 
                text={'Websites do not have to be static, I love making pages come to life.'}
                />

                
            </div>

        </div>
    )
}
