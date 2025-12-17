import React, { useEffect } from 'react';
import Head from 'next/head';

export default function PlayPage() {
  useEffect(() => {
    // This allows your HTML buttons to find the functions
    window.shareButton = () => {
      if (navigator.share) {
        navigator.share({ title: document.title, url: window.location.href });
      } else { alert("Not supported"); }
    };
    
    // Attach other functions like vlc_player, mx_player here similarly
    window.vlc_player = () => { /* your VLC logic */ };

  }, []);

  return (
    <div className="bg-dark text-light">
      <Head>
        <title>Stream Page</title>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
      </Head>
      
      {/* Your Video Player HTML goes here */}
      <video id="myVideo" playsInline controls></video>
      
      <button onClick={() => window.shareButton()} className="btn btn-primary">Share</button>
    </div>
  );
}

