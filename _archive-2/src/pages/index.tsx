import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" />
      </Head>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <main>
          {/* lua Scripts */}
          <section className="hero">
            <h1>Unlock Your Creativity with lua</h1>
            <p>Experience the freedom of programming with lua, the lightweight scripting language that powers game modding, embedded systems, and more. Whether you're a beginner or an experienced developer, lua is your gateway to innovative projects.</p>
            <button className="cta">Get Started Now</button>
            <button className="secondary">Explore Documentation</button>
          </section>

          <section className="benefits">
            <h2>Why Choose lua?</h2>
            <ul>
              <li><strong>Easy to Learn:</strong> lua's simple syntax makes it perfect for beginners, allowing you to write and execute your first script in minutes.</li>
              <li><strong>Powerful Flexibility:</strong> Adaptable to various applications, lua is the backbone of popular platforms like Roblox and various game mods.</li>
              <li><strong>Vibrant Community:</strong> Join a supportive community of developers eager to help you succeed and share your projects.</li>
            </ul>
          </section>

          <section className="applications">
            <h2>What Can You Create with lua?</h2>
            <p>From game modifications to interactive applications, lua empowers you to bring your ideas to life. Here are just a few possibilities:</p>
            <ul>
              <li>Game Modding: Enhance your favorite games with custom scripts.</li>
              <li>Roblox Development: Create your own worlds and experiences.</li>
              <li>Embedded Systems: Power devices with lua's lightweight footprint.</li>
            </ul>
          </section>

          <section className="resources">
            <h2>Comprehensive lua Documentation</h2>
            <p>Access in-depth guides, tutorials, and references tailored to every skill level. Dive deep into lua's capabilities and master the language at your own pace.</p>
            <button className="cta">View Documentation</button>
          </section>

          <section className="merch">
            <h2>Show Your lua Pride!</h2>
            <p>Check out our exclusive lua merchandise. From t-shirts to accessories, wear your love for lua and stand out in the community.</p>
            <button className="secondary">Shop lua Merch</button>
          </section>

          <section className="community">
            <h2>Join the lua Community</h2>
            <p>Connect with fellow lua enthusiasts, share your projects, and gain insights from experienced developers. Together, we can create something amazing!</p>
            <button className="cta">Join Us Now</button>
          </section>
        </main>

      </Layout>
    </>
  );
}
