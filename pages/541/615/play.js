import React, { useEffect } from 'react';
import Head from 'next/head';

export default function PlayPage() {
  useEffect(() => {
    // These functions need to be attached to 'window' so your HTML buttons can find them
    window.openReport = () => document.getElementById("myForm").style.display = "block";
    window.closeReport = () => document.getElementById("myForm").style.display = "none";
    window.closeLinkModal = () => document.getElementById("link-modal").style.display = "none";

    window.shareButton = () => {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          text: "Watch high-quality videos here!",
          url: window.location.href
        }).catch(e => console.log(e));
      } else {
        alert("Sharing not supported");
      }
    };

    // Initialize Plyr only on the client side
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://cdn.plyr.io/3.7.8/plyr.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        new Plyr("#myVideo");
      };
      document.body.appendChild(script);
    }
    
    // Theme Logic
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("bg-dark");
            document.body.classList.toggle("text-light");
        });
    }
  }, []);

  return (
    <div className="bg-dark text-light" style={{ minHeight: '100vh' }}>
      <Head>
        <title>Stream Page | PriMe SpoT</title>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
      </Head>

      <div className="container py-4">
        <video id="myVideo" playsInline controls>
          <source src="https://path-to-your-video.mp4" type="video/mp4" />
        </video>

        <div className="mt-3 text-center">
          <button id="theme-toggle-btn" className="btn btn-light me-2">Toggle Theme</button>
          <button onClick={() => window.shareButton()} className="btn btn-primary">Share</button>
        </div>

        <div id="myForm" style={{ display: 'none', padding: '20px', border: '1px solid white' }}>
          <h3>Report Issue</h3>
          <button onClick={() => window.closeReport()} className="btn btn-danger">Close</button>
        </div>
      </div>
    </div>
  );
}
