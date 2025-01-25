import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        {/* Lua Scripts */}
        <section className="hero">
          <h1>Unlock Your Creativity with Lua</h1>
          <p>Experience the freedom of programming with Lua, the lightweight scripting language that powers game modding, embedded systems, and more. Whether you're a beginner or an experienced developer, Lua is your gateway to innovative projects.</p>
          <button className="cta">Get Started Now</button>
          <button className="secondary">Explore Documentation</button>
        </section>

        <section className="benefits">
          <h2>Why Choose Lua?</h2>
          <ul>
            <li><strong>Easy to Learn:</strong> Lua's simple syntax makes it perfect for beginners, allowing you to write and execute your first script in minutes.</li>
            <li><strong>Powerful Flexibility:</strong> Adaptable to various applications, Lua is the backbone of popular platforms like Roblox and various game mods.</li>
            <li><strong>Vibrant Community:</strong> Join a supportive community of developers eager to help you succeed and share your projects.</li>
          </ul>
        </section>

        <section className="applications">
          <h2>What Can You Create with Lua?</h2>
          <p>From game modifications to interactive applications, Lua empowers you to bring your ideas to life. Here are just a few possibilities:</p>
          <ul>
            <li>Game Modding: Enhance your favorite games with custom scripts.</li>
            <li>Roblox Development: Create your own worlds and experiences.</li>
            <li>Embedded Systems: Power devices with Lua's lightweight footprint.</li>
          </ul>
        </section>

        <section className="resources">
          <h2>Comprehensive Lua Documentation</h2>
          <p>Access in-depth guides, tutorials, and references tailored to every skill level. Dive deep into Lua's capabilities and master the language at your own pace.</p>
          <button className="cta">View Documentation</button>
        </section>

        <section className="merch">
          <h2>Show Your Lua Pride!</h2>
          <p>Check out our exclusive Lua merchandise. From t-shirts to accessories, wear your love for Lua and stand out in the community.</p>
          <button className="secondary">Shop Lua Merch</button>
        </section>

        <section className="community">
          <h2>Join the Lua Community</h2>
          <p>Connect with fellow Lua enthusiasts, share your projects, and gain insights from experienced developers. Together, we can create something amazing!</p>
          <button className="cta">Join Us Now</button>
        </section>
      </main>

    </Layout>
  );
}
