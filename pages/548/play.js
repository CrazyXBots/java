import React, { useEffect } from 'react';
import Head from 'next/head';

export default function PlayPage() {
  useEffect(() => {
    // Put your player logic here so it only runs in the browser
    window.vlc_player = () => { /* logic */ };
  }, []);

  return (
    <div>
      <Head>
        <title>Video Player</title>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
      </Head>
      <video id="myVideo" controls></video>
    </div>
  );
}

