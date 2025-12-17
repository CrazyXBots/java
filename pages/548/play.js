import React, { useEffect } from 'react';
import Head from 'next/head';

export default function PlayPage() {
  useEffect(() => {
    // Put your player functions (vlc_player, shareButton, etc.) here
    window.shareButton = () => { /* share logic */ };
  }, []);

  return (
    <div className="bg-dark text-light">
      <Head>
        <title>Video Player</title>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
      </Head>
      <video id="myVideo" controls></video>
      <button onClick={() => window.shareButton()}>Share</button>
    </div>
  );
}

