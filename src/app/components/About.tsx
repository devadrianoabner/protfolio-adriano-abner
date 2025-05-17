import React from 'react';

export default function About() {
  return (
    <section className="py-20 px-4 md:px-20 bg-background text-text">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary text-sm font-mono mb-2">Sobre mim</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem sou eu?</h2>
        <p className="text-lg leading-relaxed text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
      </div>
    </section>
  );
}
