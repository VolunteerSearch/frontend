import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div id={styles.welcomeImageAndTextWrapper}>
          <div id={styles.welcomeImageWrapper}>
            <div id={styles.textOverlay}>
              {/* <h3>VolunteerSearch</h3> */}
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h1>Welcome to VolunteerSearch!</h1>
          <p>Are you passionate about making a difference? Looking to give back to your community?
            You&apos;ve come to the right place! At VolunteerSearch, we connect eager volunteers with meaningful opportunities.
            Whether you have a few hours or a few months, there&apos;s a perfect fit for you here.</p>
          
          <h1>Why Volunteer with Us?</h1>
          <ul>
            <li><p>Diverse Opportunities: From environmental projects to helping at local shelters, there&apos;s something for everyone.</p></li>
            <li><p>Flexible Scheduling: Volunteer on your terms. We offer opportunities that fit your schedule.</p></li>
            <li><p>Make an Impact: Your time and skills can make a real difference in someone&apos;s life.</p></li>
          </ul>
          
          <h1>How It Works</h1>
            <ul>
              <li><p>Sign Up: Create a free account in just a few clicks.</p></li>
              <li><p>Browse Projects: Explore a wide range of volunteer opportunities.</p></li>
              <li><p>Get Involved: Sign up for a project and start making a difference!</p></li>
            </ul>

            <p>Join VolunteerSearch today and be part of a community dedicated to making the world a better place. Together, we can achieve great things!</p>
        </div>
      </main>
    </>
  );
}
