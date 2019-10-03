import { prop, Typegoose } from '@hasezoey/typegoose';

class CMTuDien extends Typegoose {
  @prop()
  domain!: string;

  @prop()
  ma!: string;

  @prop()
  ten!: string;

  @prop()
  ghiChu?: string;

  @prop()
  uuTien!: number;

  @prop()
  active!: boolean;

  @prop()
  idLoaiTuDien!: string;
}

/**
 * Model definition
 */
const CMTuDienModel = new CMTuDien().getModelForClass(CMTuDien, {

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
  CMTuDien,
  CMTuDienModel,
};
