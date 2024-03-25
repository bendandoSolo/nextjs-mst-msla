import React from 'react';

const EnvVariablesDisplay = () => {
  return (
    <div>
      <h2>Environment Variables</h2>
      <ul>
        <li><strong>Client ID:</strong> {process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID}</li>
        <li><strong>Tenant:</strong> {process.env.NEXT_PUBLIC_AZURE_AD_TENANT}</li>
        <li><strong>Audience:</strong> {process.env.NEXT_PUBLIC_AZURE_AD_AUDIENCE}</li>
        <li><strong>Base URL:</strong> {process.env.NEXT_PUBLIC_BASE_URL}</li>
      </ul>
    </div>
  );
};

export default EnvVariablesDisplay;