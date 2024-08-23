import * as React from 'react';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';

type ProgressCircleProps = {
  completed: number;  
  total: number; 
};

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path d={`M ${cx} ${cy} L ${target.x} ${target.y}`} stroke="red" strokeWidth={3} />
    </g>
  );
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ completed, total }) => {
  const progressValue = (completed / total) * 100; 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <GaugeContainer width={200} height={200} startAngle={-110} endAngle={110} value={progressValue}>
        <GaugeReferenceArc stroke='lightgrey' strokeWidth={4} />
        <GaugeValueArc />
        <GaugePointer />
      </GaugeContainer>
      <p>{`${completed} / ${total} completed`}</p> 
    </div>
  );
};

export default ProgressCircle;
