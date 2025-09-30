import { Request, Response } from 'express';
import HealthService from '../services/health-services';

class HealthController {
  static async health(req: Request, res: Response) {
    const health = await HealthService.health();
    res.json(health);
  }
}

export default HealthController;
