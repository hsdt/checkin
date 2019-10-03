import { prop, Typegoose } from '@hasezoey/typegoose';

class CMLoaiTuDien extends Typegoose {
  @prop()
  maLoai!: string;

  @prop()
  tenLoai!: string;

  @prop()
  ghiChu?: string;

  @prop()
  uuTien!: number;

  @prop()
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
