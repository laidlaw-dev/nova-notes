import { describe, it, expect, vi } from 'vitest';
import HealthService from './health-services';

describe('HealthService', () => {
  it('should return health status', async () => {
    // use fake timers to control DateTime.now()
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

    const health = await HealthService.health();
    expect(health).toEqual({
      status: 'ok',
      timestamp: '2024-01-01T00:00:00.000Z',
    });

    vi.useRealTimers();
  });
});
