import { prop, Typegoose } from '@hasezoey/typegoose';

/**
 * Bảng mã hệ thống
 */
class DMBangMa extends Typegoose {
  @prop({
    required: true,
  })
  domain!: string;

  @prop({
    required: true,
  })
  ma!: string;

  @prop({
    default: '',
  })
  ten?: string;

  @prop({
    default: 8,
  })
  doDai?: number;

  @prop({
    default: '',
  })
  ghiChu?: string;

  @prop({
    default: '',
  })
  tienTo?: string;

  @prop({
    default: '',
  })
  hauTo?: string;

  @prop({
    default: true,
  })
  isTang?: boolean;

  @prop({
    default: false,
  })
  isResettable?: boolean;

  @prop({
    default: 1,
  })
  soTiepTheo?: number;

  @prop({
    default: '',
  })
  tienToHienTai?: string;

  @prop({
    default: '',
  })
  hauToHienTai?: string;

  @prop({
    default: true,
  })
  active?: boolean;
}

/**
 * Model definition
 */
const DMBangMaModel = new DMBangMa().getModelForClass(DMBangMa, {

  schemaOptions: {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
});

export {
  DMBangMa,
  DMBangMaModel,
};
