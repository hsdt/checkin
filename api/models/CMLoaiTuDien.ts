import { prop, Typegoose } from '@hasezoey/typegoose';

class CMLoaiTuDien extends Typegoose {
  @prop({
    required: true,
    unique: true,
    uppercase: true,
  })
  maLoai!: string;

  @prop({
    required: true,
  })
  tenLoai!: string;

  @prop({
    default: '',
  })
  ghiChu?: string;

  @prop({
    required: true,
    default: true,
  })
  active!: boolean;
}

/**
 * Model definition
 */
const CMLoaiTuDienModel = new CMLoaiTuDien().getModelForClass(CMLoaiTuDien, {
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
  CMLoaiTuDien,
  CMLoaiTuDienModel,
};
