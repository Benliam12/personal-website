import Image from 'next/image'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="px-14 min-h-screen flex justify-center">
      <div className="flex flex-col lg:flex-row lg:gap-20 max-w-screen-xl w-full">
        <div className="min-h-screen pb-14 lg:sticky lg:top-0 flex flex-col lg:max-h-screen w-full lg:w-1/2 2xl:w-1/3 pt-24 justify-between">
          <div>
            <h1 className="tracking-tight w-full text-4xl text-center font-bold text-slate-200">William D'Anjou</h1>
            <h2 className="text-center mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">I'm a software developer based in Canada</h2>  
            <p className="text-center mt-4 text-slate-400">I create incredible apps for a variety of uses</p>
          </div>
          {/* Profile picture */}
          <div className=" justify-center flex my-12">
            <img className="rounded-full overflow-hidden max-h-64" src="profile.jpg" alt="Profile picture" />
          </div>

          {/* Footer */}
          <section>
              <div className='text-white flex justify-center gap-5'>
                <a href="https://www.linkedin.com/in/williamdanjou/" target='_blank' className='transition duration-200 hover:text-sky-500'>
                  <FontAwesomeIcon icon={faLinkedin} size='xl'/>
                </a>

                <a href="https://github.com/Benliam12" target='_blank' className='transition duration-200 hover:text-indigo-700'>
                  <FontAwesomeIcon icon={faGithub} size='xl'/>
                </a>
                
                <a href="mailto:contact@wdanjou.dev" target='_blank' className='transition duration-200 hover:text-sky-700'>
                  <FontAwesomeIcon icon={faEnvelope} size='xl'/>
                </a>
              </div>
          </section>
        </div>
        <div className="pt-0 lg:pt-24 pb-10 mt-10 lg:mt-0 w-full lg:w-1/2 2xl:w-2/3 text-slate-400 text-justify">
          {/*Presentation section*/}
          <section>
            <h2 className='font-bold text-xl text-slate-200'>About</h2>
            <p className="mb-6">
              I'm a software developer who is passionate about the technological industry. I've delved deeply into the complexities of computer science throughout my career, from algorithms to software engineering, and I'm passionate about pushing the envelope of what's possible. I'm a web enthusiast that enjoys designing beautiful, user-friendly websites outside of the screen. I welcome you to get in touch with me if you share my love of technology and web design so that we can start a journey of innovation and creativity together.
            </p>
          </section>

          {/*Studies section*/}

          <section>
            <h2 className='mt-3 font-bold text-xl text-slate-200'>Studies</h2>
            <Experience CompanyLink={"https://www.umontreal.ca/"} Date={'Sept 2020 - Dec 2023'} Company={'University of Montreal'} Content={'Bachelor in Computer Science with GPA of 3.23'} JobTitle={''}/>
          </section>

          {/*Experiences section*/}
          <section>
            <h2 className='mt-3 font-bold text-xl text-slate-200'>Experience</h2>

            <div className="mt-2 flex flex-col">
              <Experience CompanyLink={"https://www.prattwhitney.com/"} tags={['Webcon', 'SharePoint', 'Css']} Date={'May 2023-Present'} Company={'Pratt & Whitney Canada'} JobTitle={'Web Application Developer'} Content={'Deliver fully functional web applications that are powered by Webcon BPS. Help create a new, more modern design for the internal website.'} />
              <Experience CompanyLink={"https://tuiles3r.com/"} tags={['Angular', 'NodeJS', 'Ms Access', 'Thunderbird']} Date={'May 2022 - Dec 2022'} Company={'3R Tiles'} JobTitle={'Software Developer'} Content={'Deliver a CRM that has been completely customized to the needs of the business. This consists of a Web user interface, a server backend program, and a Thunderbird mail addon. Helped in the migration of the earlier system, which used MS Access, by offering support.'}  />
              <Experience CompanyLink={"https://griis.ca/"} tags={['JQuery', 'HTML', 'Css', 'Javascript']} Date={'May 2021 - Nov 2021'} Company={'University of Sherbrooke - GRIIS'} JobTitle={'Research Assistant'} Content={'Create a completely new design for an internal application that would be utilized by all of the province\'s hospitals.'} />
            </div>

          </section>

          {/*Projects section*/}
          <section>
            <h2 className='mt-3 font-bold text-xl text-slate-200'>Projects</h2>

            <div>
              <Projects CompanyLink={"https://immosdan-bes.com/"} Company={'Immos Dan-Bes'} Content={"Static website used for advertisement of rental appartment in the region of Sherbrooke, Canada."} tags={['HTML', 'Css', 'JQuery', 'Captcha']} LogoLink={'https://immosdan-bes.com/img/logo.png'}/>
            </div>

          </section>
        </div>
      </div>
    </main>
  )
}
