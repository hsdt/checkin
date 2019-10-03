import { Injectable, Inject } from '@kites/common';
import { CMTuDien, CMTuDienModel } from '../models';
import { KITES_INSTANCE, KitesInstance } from '@kites/core';

@Injectable()
export class CMTuDienService {

  constructor(
    @Inject(KITES_INSTANCE) private kites: KitesInstance,
  ) { }

  create(data: {
    domain: string,
    ma: string,
    ten: string,
    ghiChu?: string,
    uuTien?: number,
  }) {
    return CMTuDienModel.create([data]);
  }

  /**
   * Tunoff bang ma by inactive it
   * @param ma
   * @param domain
   */
  setInActive(ma: string, domain: string) {
    return CMTuDienModel.findOneAndUpdate({
      ma, domain, active: 1,
    }, {
      active: false,
    });
  }

}
