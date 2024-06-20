import React from 'react';
import './Popup.css';

const Popup: React.FC = () => {
  const reloadPage = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id!);
    });
  };

  return (
    <div className="popup">
      <h2>Codeforces Rank Sorter</h2>
      <button onClick={reloadPage}>Reload Submissions</button>
    </div>
  );
};

export default Popup;
