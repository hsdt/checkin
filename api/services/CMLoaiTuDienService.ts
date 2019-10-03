import { Injectable, Inject } from '@kites/common';
import { CMLoaiTuDienModel } from '../models';
import { KITES_INSTANCE, KitesInstance } from '@kites/core';

@Injectable()
export class CMLoaiTuDienService {

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
    return CMLoaiTuDienModel.create([data]);
  }

  /**
   * setInActive
   * @param ma
   * @param domain
   */
  setInActive(ma: string) {
    return CMLoaiTuDienModel.findOneAndUpdate({
      ma,
      active: 1,
    }, {
      active: false,
    });
  }

}
