import { prop, Typegoose } from '@hasezoey/typegoose';

class DMQuayDonTiep extends Typegoose {
  @prop({
    required: true,
  })
  domain!: string;

  @prop({
    required: true,
  })
  ma!: string;

  @prop()
  ten!: string;

  @prop()
  ghiChu?: string;

  @prop({
    required: true,
  })
  idKhuVuc?: string;

  @prop({
    default: 0,
  })
  uuTien!: number;

  @prop({
    default: true,
  })
  active!: boolean;
}

/**
 * Model definition
 */
const DMQuayDonTiepModel = new DMQuayDonTiep().getModelForClass(DMQuayDonTiep, {
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
  DMQuayDonTiep,
  DMQuayDonTiepModel,
};
