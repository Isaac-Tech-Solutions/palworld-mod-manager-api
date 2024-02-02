import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  name: string;

  @ApiProperty()
  member_id: number;

  @ApiProperty()
  member_group_id: number;
}
