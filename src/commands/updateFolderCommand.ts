export class UpdateFolderCommand {
  constructor(
    public readonly userId: string,
    public readonly folderId: string,
    public readonly cardIds: string[],
  ) {}
}
