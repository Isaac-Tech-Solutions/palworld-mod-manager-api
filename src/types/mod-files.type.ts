import { ApiProperty } from "@nestjs/swagger";

export class IModFile {
  @ApiProperty()
  uid: number;

  @ApiProperty()
  size: number;
  
  @ApiProperty()
  id: number[];

  @ApiProperty()
  name: string;

  @ApiProperty()
  version: string;

  @ApiProperty()
  file_id: number;

  @ApiProperty()
  size_kb: number;

  @ApiProperty()
  file_name: string;

  @ApiProperty()
  category_id: number;

  @ApiProperty()
  is_primary: boolean;

  @ApiProperty()
  mod_version: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  changelog_html: any;

  @ApiProperty()
  category_name: number;

  @ApiProperty()
  uploaded_time: string;

  @ApiProperty()
  size_in_bytes: number;

  @ApiProperty()
  uploaded_timestamp: number;

  @ApiProperty()
  content_preview_link: string;

  @ApiProperty()
  external_virus_scan_url: string;
}

export class IModFileUpdates {
  @ApiProperty()
  old_file_id: number;
  
  @ApiProperty()
  new_file_id: number;

  @ApiProperty()
  old_file_name: string;

  @ApiProperty()
  new_file_name: string;

  @ApiProperty()
  uploaded_time: string;

  @ApiProperty()
  uploaded_timestamp: number;
}

export class IModFiles {
  @ApiProperty()
  files: IModFile[];

  @ApiProperty()
  file_updates: IModFileUpdates[];
}