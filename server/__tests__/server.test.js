import request from 'supertest';
import app from '../server.js';

describe('Server Tests', () => {
  describe('GET /health', () => {
    it('should return health check', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('OK');
      expect(response.body.timestamp).toBeDefined();
    });
  });

  describe('GET /api/hello', () => {
    it('should return hello message', async () => {
      const response = await request(app).get('/api/hello');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Hello from the API!');
    });
  });
});