import { prop, Typegoose } from '@hasezoey/typegoose';
import { BHYT } from './bhyt';

/**
 * Define checkin class
 */
class Checkin extends Typegoose {
  @prop({
    required: true,
  }) domain!: string;

  @prop({
    required: true,
  }) code!: string;

  // mã yêu cầu
  @prop() mayc?: string;

  @prop({
    required: true,
    alias: 'id_noi_dang_ky',
    // TODO: rename to QuayDonTiep
  }) idNoiDangKy!: string;

  @prop({
    required: true,
    alias: 'id_noi_thuc_hien',
  }) idNoiThucHien!: string;

  @prop({
    _id: false,
  }) bhyt?: BHYT;

  id_noi_dang_ky: string;
  id_noi_thuc_hien: string;
}

/**
 * Define Checkin model
 */
const CheckinModel = new Checkin().getModelForClass(Checkin, {

  schemaOptions: {
    timestamps: true,
  },
});

export {
  Checkin,
  CheckinModel,
};
