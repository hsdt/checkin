import { prop, Typegoose } from '@hasezoey/typegoose';

/**
 * DM Quầy phát số
 */
class DMQuayPhatSo extends Typegoose {
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
    default: '',
  })
  ghiChu?: string;

  @prop({
    required: true,
  })
  idKhuVuc?: string;

  /**
   * Bảng mã sinh dãy số đón tiếp
   */
  @prop()
  bangMa?: string;

  @prop({
    default: 0,
  })
  uuTien?: number;

  @prop({
    default: '',
  })
  option1?: string;

  @prop({
    default: '',
  })
  option2?: string;

  @prop({
    default: '',
  })
  option3?: string;

  @prop({
    default: true,
  })
  active?: boolean;
}

/**
 * Model definition
 */
const DMQuayPhatSoModel = new DMQuayPhatSo().getModelForClass(DMQuayPhatSo, {

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
  DMQuayPhatSo,
  DMQuayPhatSoModel,
};
