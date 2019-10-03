import { expect } from 'chai';
import axios from 'axios';

describe('DMBangMa API', () => {

  describe('getNextMa', () => {
    it('get new ma by domain', async () => {
      const res = await axios.post('http://localhost:3000/api/dmbangma/DON_TIEP_KB/next?domain=test');
      const res2 = await axios.post('http://localhost:3000/api/dmbangma/DON_TIEP_KB/next?domain=test');

      expect(res.status).to.equal(200);
      expect(res.data.ma).to.be.eq('DON_TIEP_KB');
      expect(res.data.domain).to.be.eq('test');
      expect(res.data.maSinhHienTai).to.be.eq('00000001');

      expect(res2.status).to.equal(200);
      expect(res2.data.maSinhHienTai).to.be.eq('00000002');
    });
  });
});
