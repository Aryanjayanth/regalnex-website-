import React from 'react';
import './TwitterClientsScroll.css';

const TwitterClientsScroll = () => {
  const twitterClients = [
    {
      name: "Twitter",
      logo: "/lovable-uploads/twitter-logo.svg",
      handle: "@Twitter"
    },
    {
      name: "Elon Musk",
      logo: "/lovable-uploads/elon-musk.svg",
      handle: "@elonmusk"
    },
    {
      name: "Tesla",
      logo: "/lovable-uploads/tesla-logo.svg",
      handle: "@Tesla"
    },
    {
      name: "SpaceX",
      logo: "/lovable-uploads/spacex-logo.svg",
      handle: "@SpaceX"
    },
    {
      name: "X Corp",
      logo: "/lovable-uploads/x-corp-logo.svg",
      handle: "@X"
    },
    {
      name: "Starlink",
      logo: "/lovable-uploads/starlink-logo.svg",
      handle: "@Starlink"
    }
  ];

  return (
    <div className="twitter-scroll-container">
      <div className="twitter-scroll-content">
        {/* First set of logos */}
        <div className="twitter-scroll-group">
          {twitterClients.map((client, index) => (
            <div key={index} className="twitter-client-card">
              <div className="twitter-client-logo">
                <img src={client.logo} alt={client.name} />
              </div>
              <div>
                <div className="twitter-client-name">{client.name}</div>
                <div className="twitter-client-handle">{client.handle}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless scrolling */}
        <div className="twitter-scroll-group">
          {twitterClients.map((client, index) => (
            <div key={`duplicate-${index}`} className="twitter-client-card">
              <div className="twitter-client-logo">
                <img src={client.logo} alt={client.name} />
              </div>
              <div>
                <div className="twitter-client-name">{client.name}</div>
                <div className="twitter-client-handle">{client.handle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwitterClientsScroll;