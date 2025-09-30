import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
function App() {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t('application.name')}</div>
      <div>{t('application.copyright', { year: DateTime.now().year })}</div>
    </div>
  );
}

export default App;
