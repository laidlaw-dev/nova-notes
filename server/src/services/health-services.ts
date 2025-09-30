import { DateTime } from 'luxon';
import type { HealthDto } from '../types';

class HealthService {
  static async health(): Promise<HealthDto> {
    return await Promise.resolve({
      status: 'ok',
      timestamp: DateTime.now().toUTC().toISO(),
    });
  }
}

export default HealthService;
