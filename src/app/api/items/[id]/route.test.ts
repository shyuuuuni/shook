/**
 * @jest-environment node
 */
import { matchers } from 'jest-json-schema';
import { testApiHandler } from 'next-test-api-route-handler';
import * as appHandler from './route';
expect.extend(matchers);

it('should return data with status 200', async () => {
  await testApiHandler({
    appHandler,
    params: {
      id: '1',
    },
    test: async ({ fetch }) => {
      const response = await fetch({ method: 'GET' });
      const json = await response.json();

      const schema = {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
        },
        required: ['id', 'name'],
      };

      expect(response.status).toBe(200);
      expect(json).toMatchSchema(schema);
    },
  });
});

it('should return error with status 404 when item not found', async () => {
  await testApiHandler({
    appHandler,
    params: {
      id: '3',
    },
    test: async ({ fetch }) => {
      const response = await fetch({ method: 'GET' });
      const json = await response.json();

      expect(response.status).toBe(404);
      expect(json.error).toEqual(expect.any(String));
    },
  });
});
