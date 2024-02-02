import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.type';

export class IModUpdated {
  @ApiProperty()
  mod_id: number;

  @ApiProperty()
  latest_file_update: number;

  @ApiProperty()
  latest_mod_activity: number;
}

export class IModLastAdded {
  @ApiProperty()
  name: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  picture_url: string;

  @ApiProperty()
  mod_downloads: number;

  @ApiProperty()
  mod_unique_downloads: number;

  @ApiProperty()
  uid: number;

  @ApiProperty()
  mod_id: number;

  @ApiProperty()
  game_id: number;

  @ApiProperty()
  allow_rating: boolean;

  @ApiProperty()
  domain_name: string;

  @ApiProperty()
  category_id: number;

  @ApiProperty()
  version: string;

  @ApiProperty()
  endorsement_count: number;

  @ApiProperty()
  created_timestamp: number;

  @ApiProperty()
  created_time: string;

  @ApiProperty()
  updated_timestamp: number;

  @ApiProperty()
  updated_time: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  uploaded_by: string;

  @ApiProperty()
  uploaded_users_profile_url: string;

  @ApiProperty()
  contains_adult_content: boolean;

  @ApiProperty()
  status: string;

  @ApiProperty()
  available: boolean;

  @ApiProperty()
  endorsement: any;

  @ApiProperty()
  user: User;
}
