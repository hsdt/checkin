import { prop, Typegoose } from '@hasezoey/typegoose';

class BHYT extends Typegoose {
  @prop({ uppercase: true })
  soThe?: string;

  @prop()
  ngayHieuLuc?: Date;

  @prop()
  ngayHetHan?: Date;

  @prop()
  ngayDu5Nam?: Date;

  @prop()
  diaChi?: string;

}

export {
  BHYT,
};
