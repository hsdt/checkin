import { Controller, Get, Put, RequestParam, Delete, Post, RequestBody, QueryParam } from '@kites/rest';
import { Inject } from '@kites/common';
import { KITES_INSTANCE, KitesInstance } from '@kites/core';
import { DMBangMaService } from '../services';

@Controller('/dmbangma')
export class DMBangMaController {

  constructor(
    @Inject(KITES_INSTANCE) private kites: KitesInstance,
    private svBangMa: DMBangMaService,
  ) { }

  @Get('/')
  async list(
    @QueryParam('domain') domain,
    @QueryParam('pageIndex') pageIndex,
    @QueryParam('pageSize') pageSize,
  ) {
    this.kites.logger.info('Get DMBangMa with pagination %s', { domain, pageIndex, pageSize });
    const vResult = await this.svBangMa.getList(domain, pageIndex, pageSize);
    return vResult;
  }

  @Get('/:ma')
  async info(
    @RequestParam('ma') ma,
    @QueryParam('domain') domain,
  ) {
    const vResult = await this.svBangMa.getByMa(ma, domain);
    this.kites.logger.debug('Get ma info: ' + ma);
    return vResult.find(x => true) || 'Not found';
  }

  /**
   * Get mã tiếp theo
   * @param domain
   */
  @Post('/:ma/next')
  async getNext(
    @RequestParam('ma') ma,
    @QueryParam('domain') domain,
  ) {
    const vResult = await this.svBangMa.getNextSeq(ma, domain);
    return { ...vResult, ma, domain };
  }

  @Put('/:ma/inactive')
  async setInactive(
    @RequestParam('ma') ma,
    @QueryParam('domain') domain,
  ) {
    const vResult = await this.svBangMa.setInActive(ma, domain);
    this.kites.logger.info(`setInactive ${ma} ok!`);
    return { msg: vResult, ma, domain };
  }

}
