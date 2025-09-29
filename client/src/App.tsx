import { useEffect, useState } from 'react';
import { checkHealth } from '@/api/health';
function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    const fetchHealth = async () => {
      const health = await checkHealth();
      console.log('Health check:', health);
      setHealth(health);
    };

    fetchHealth();
  }, []);

  return <div>{health ? 'Healthy' : 'Unhealthy'}</div>;
}

export default App;
