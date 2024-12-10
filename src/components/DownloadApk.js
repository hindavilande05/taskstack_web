import React from "react";
import apkFile from "../apk/taskstakApk.apk";

import "../styles/DownloadApk.css";

const DownloadApk = () => {
  return (
    <section id="download" className="download">
      <h2>Download APK</h2>
      <a href={apkFile} download>
        <button className="download-btn">Download APK</button>
      </a>
    </section>
  );
};

export default DownloadApk;
