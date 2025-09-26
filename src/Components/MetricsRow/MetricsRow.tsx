import React, { useState } from 'react';

interface MetricsRowProps {
  MetricsName: string;
  value: number;
  explanation?: string;
}

const MetricsRow: React.FC<MetricsRowProps> = ({ MetricsName, value, explanation }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <li 
      className="metrics-row"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="metrics">{value.toFixed(2)}</div>
      <div className="content">
        <p className="metrics-name">{MetricsName}</p>
        {explanation && showTooltip && (
          <div className="tooltip">
            <div className="tooltip-content">
              {explanation}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default MetricsRow;
