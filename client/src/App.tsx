import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import { Camera } from 'lucide-react';

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <div className="bg-primary text-on-primary p-1">
        {t('application.name')}
      </div>
      <div className="bg-secondary text-on-secondary p-1">
        {t('application.copyright', { year: DateTime.now().year })}
      </div>
      <div>
        <Camera className="text-primary" />
      </div>
    </div>
  );
}

export default App;
