import { expect } from 'chai';
import axios from 'axios';

describe('Restful API', () => {

  describe('todo', () => {
    it('hello world', async () => {
      const res = await axios.put('http://localhost:3000/api/todo/helo_world', {
        user: 'vunb',
      });

      expect(res.status).to.equal(200);
      expect(res.data.user).to.be.eq('vunb');
      expect(res.data.msg).to.be.match(/^start: helo_world/i, 'action status');
    });
  });
});
