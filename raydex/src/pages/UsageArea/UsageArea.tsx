import { useParams } from 'react-router-dom';
import { usageDescription } from '../../lib/usage';

export const UsageArea = () => {
  const params = useParams();
  const { area } = params;

  return <>{area && usageDescription(area)}</>;
};
